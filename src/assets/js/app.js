import $ from "jquery";

$(document).ready(function () {
  // Active Class Changing for Menu
  $(".menu__link").on("click", function () {
    $(".menu__link.active").removeClass("active");
    $(this).addClass("active");
  });

  // prevent clicking [HOME] page :)
  $(".disable").on("click", (e) => e.preventDefault());

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
