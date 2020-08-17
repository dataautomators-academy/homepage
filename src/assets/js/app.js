import $ from "jquery";

$(document).ready(function () {
  // Active Class Changing for Menu
  $(".menu__link").on("click", function () {
    $(".menu__link.active").removeClass("active");
    $(this).addClass("active");
  });

  // prevent clicking [HOME] page :)
  $(".disable").on("click", (e) => e.preventDefault());

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
    "%c 🔥 Welcome Developers, If you find any bugs, feel free to knock us.🔥",
    styles
  );
});
