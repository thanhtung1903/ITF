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
//= require sweetalert2
//= require jquery
//= require jquery-ui
//= require jquery_ujs
//= require bootstrap
//= require ckeditor/init
//= require ckeditor/plugins/widget/plugin
//= require ckeditor/plugins/codesnippet/plugin
//= require syntax-highlighter-rails/shCore
//= require syntax-highlighter-rails/shBrushCpp
//= require syntax-highlighter-rails/shBrushCSharp
//= require syntax-highlighter-rails/shBrushSql
//= require syntax-highlighter-rails/shBrushRuby
//= require syntax-highlighter-rails/shBrushPython
//= require syntax-highlighter-rails/shBrushJava
//= require syntax-highlighter-rails/shBrushJScript
//= require syntax-highlighter-rails/shBrushCss
// require turbolinks
//= require i18n
//= require i18n.js
//= require i18n/translations
//= require_tree .
//= require_tree ../../../vendor/assets/javascripts/.

CKEDITOR.config.customConfig = '/assets/ckeditor/small_ckeditor_config.js';
$(document).ready(function(){
  $('.alert').animate({right: '10px'}, 800, function() {
    window.setTimeout(function() {
      $('.alert').animate({top: '-50px'}, 400, function() {
        $('.alert').hide();
      });
    }, 2000);
  });
})
