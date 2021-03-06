// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require materialize-sprockets
//= require_tree .

$(document).ready(function() {
  $(".my_story_text").hide();
  $(".my_story").on('click', function() {
    $(".my_story_text").toggle(1000);
  });

  $(".tables").hide();
  $(".toggle_tables").on('click', function() {
    $(".tables").toggle(1000);
    $(".title_header").toggle(1000);
  });

  $(".repos_toggle").hide();
  $(".repos").on('click', function() {
    $(".repos_toggle").toggle(1000);
  });

  $(".education_text").hide();
  $(".education").on('click', function() {
    $(".education_text").toggle(1000);
  });

  $(".work_history_text").hide();
  $(".work_history").on('click', function() {
    $(".work_history_text").toggle(1000);
  });
});
