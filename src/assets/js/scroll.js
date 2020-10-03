import $ from 'jquery';

$(document).ready(function () {
  // scroll_to_top button event
  $('.scroll__top').on('click', (e) => {
    e.preventDefault();
    $('html').animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
  // window_scroll_function
  $(window).scroll(function () {
    // [Sticky Header]
    let scroll = $(window).scrollTop();
    const header = document.querySelector('.header');
    if (scroll > 500) {
      // Custom CSS written and that's will trigger while hovering after scroll
      header.classList.add('fixed');
      header.setAttribute('id', 'header__sticky');
    } else {
      header.removeAttribute('id');
    }
  });
});
