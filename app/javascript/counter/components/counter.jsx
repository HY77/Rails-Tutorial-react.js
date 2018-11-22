import React, { Component } from "react"
import PropTypes from "prop-types"

export default class Counter extends Component {
  render() {
    return (
      <div>
        <div>{ this.props.count }</div>
        <button onClick={ this.props.onClickCountUp }>+</button>
        <button onClick={ this.props.onClickCountDown }>-</button>
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onClickCountUp: PropTypes.func.isRequired,
  onClickCountDown: PropTypes.func.isRequired
}
