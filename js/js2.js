$(function() {

    $(document).ready(function() {
      var mHtml = $("html");
      var page = 1;
      mHtml.animate({scrollTop : 0},10);
      var scrollOffset = $('html').offset();
  
      $(window).scroll(function() {
        if ($(document).scrollTop() > scrollOffset.top) {
          $('.top').addClass('active')
        }
        else {
          $('.top').removeClass('active');
        }
      });
    });
  });
  $(function() {

    $(document).ready(function() {
  
      var scrollOffset = $('html').offset();
  
      $(window).scroll(function() {
        if ($(document).scrollTop() > scrollOffset.top) {
          $('.main_inner').addClass('zoom')
        }
        else {
          $('.main_inner').removeClass('zoom')
        }
      });
    });
  });
