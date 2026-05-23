let night = false;

$("#frog").click(function () {

  $(this).toggleClass("happy");

  $("#status").text(
    "the frog jumped a little."
  );

});

$("#flower").hover(

  function () {

    $("#message").slideDown(300);

    $("#status").text(
      "the flower showed a note."
    );

  },

  function () {

    $("#message").slideUp(300);

    $("#status").text(
      "the note went away."
    );

  }

);

$(document).keydown(function (event) {

  if (event.key === " " || event.code === "Space") {

    event.preventDefault();

    night = !night;

    $("#pond").toggleClass("night");

    if (night === true) {

      $("#cloud").text("🌙");

      $("#status").text(
        "it is night now."
      );

    } else {

      $("#cloud").text("☁️");

      $("#status").text(
        "it is daytime again."
      );

    }

  }

});

$("#cloud").click(function () {

  $(this).toggleClass("cloudy");

  $("#status").text(
    "the cloud moved across the sky."
  );

});