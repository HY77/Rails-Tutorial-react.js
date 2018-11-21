import React, { Component } from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

export default class FollowButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      relationship: props.relationship
    }
  }

  follow = () => {
    this.setState({
      loading: true
    });

    $.ajax({
      type: "POST",
      url: `/relationships`,
      dataType: "json",
      contentType: "application/json",
      data: JSON.stringify({
        followed_id: this.props.user.id
      }),
      //CSRFではないことをRailsに伝えるおまじないのようなもの
      beforeSend: function(xhr) {
        xhr.setRequestHeader("X-CSRF-Token",
                            $("meta[name='csrf-token']").attr("content"))
      }
      //レスポンスとしてJSONで返ってきたデータをthenで取得
    }).then((response) => {
      const relationship = response

      this.setState({
        loading: false,
        relationship: relationship
      });
    });
  }

  unFollow = () => {
    this.setState({
      loading: true
    });

    $.ajax({
      type: "DELETE",
      //''や""だと文字列扱いとなってしまう
      url: `/relationships/${ this.state.relationship.id }`,
      dataType: "json",
      contentType: "application/json",
      beforeSend: function(xhr) {
        xhr.setRequestHeader("X-CSRF-Token",
                            $("meta[name='csrf-token']").attr("content"))
      }
    }).then((response) => {
      this.setState({
        loading: false,
        relationship: null
      });
    });
  }

  render() {
    const isFollowing = this.state.relationship !== null
    const className   = classnames("btn", {
      "btn-danger": isFollowing,
      "btn-primary": !isFollowing
    });

    return (
      <button className={ className }
              onClick={ isFollowing ? this.unFollow : this.follow }
              disabled={ this.state.loading }>
        { isFollowing ? "Unfollow" : "Follow" }
      </button>
    );
  }
}

FollowButton.defaultProps = {
  relationship: null
}

FollowButton.propTypes = {
  user: PropTypes.object.isRequired,
  relationship: PropTypes.object
}
