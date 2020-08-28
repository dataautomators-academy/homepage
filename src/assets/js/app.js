import $ from "jquery";

$(document).ready(function () {
  // Active Class Changing for Menu
  $(".menu__link").on("click", function () {
    $(".menu__link.active").removeClass("active");
    $(this).addClass("active");
  });


  // scroll_to_top button event
  $(".scroll__top").on("click", (e) => {
    e.preventDefault();
    $("html").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  // FUNNY:- Message for Developers who open Dev-Tools on out site :)
  const styles = `
    background: #04206f; 
    color: #fff; 
    padding: 10px;
    width: 100%;
    margin: 0 auto;
    font-size: 20px;
`;
  console.log(
    "%c 🔥 Welcome Developers, If you find any bugs, feel free to knock us anytime.🔥",
    styles
  );
});

// window_scroll_function
$(window).scroll(function () {
  // [Sticky Header]
  let scroll = $(window).scrollTop();
  const header = document.querySelector(".header");
  if (scroll > 500) {
    // Custom CSS written and that's will trigger while hovering after scroll
    header.classList.add("fixed");
    header.setAttribute("id", "header__sticky");
  } else {
    header.removeAttribute("id");
  }
});
