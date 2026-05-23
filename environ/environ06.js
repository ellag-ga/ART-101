$(document).keydown(function (event) {

  if (event.key === " " || event.code === "Space") {

    event.preventDefault();

    night = !night;

    $("#pond").toggleClass("night");

    if (night === true) {

      $("#cloud").text("🌙");

      $("#status").text("it is night now.");

    } else {

      $("#cloud").text("☁️");

      $("#status").text("it is daytime again.");
    }
  }
});