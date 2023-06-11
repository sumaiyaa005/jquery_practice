$(document).ready(function () {
  $("#btn").on("click", function () {
    alert("Handler for `click` called.");
  });

  $(".list").css("background-color", "green");

  $(".box")
    .css("border", "2px solid red")
    .css("background", "yellow")
    .css("width", "200px")
    .css("height", "100px");

  $("li.third-item").nextAll().addBack().css("background-color", "red");

  $(".addCl").addClass("selected");

  $("#container")
    .after($(".inner"))
    .css("background-color", "blue")
    .css("color", "white");

  $("#clickme").on("click", function () {
    $("#book").animate(
      {
        opacity: 0.25,
        left: "+=50",
        height: "toggle",
      },
      5000,
      function () {
        // Animation complete.
      }
    );
  });
});
