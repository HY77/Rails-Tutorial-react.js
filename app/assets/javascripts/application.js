// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require jquery
//= require bootstrap
//= require_tree .

$(document).on("turbolinks:load", function() {
  var $count = $("#counter-count")
  $("#counter-up").on("click", function() {
    var count = parseInt($count.text(), 10)
    $count.text(count + 1)
  })

  $("#counter-down").on("click", function() {
    var count = parseInt($count.text(), 10)
    $count.text(count - 1)
  })
})
