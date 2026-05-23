let following = false;
let flowerEaten = false;

$("#creature").click(function () {
  $(this).toggleClass("transformed");
  $("#status").text("The chameleon changed colors!");
});

$("#creature").hover(
  function () {
    $("#thought").stop(true, true).slideDown(300);

    if (flowerEaten === true) {
      $("#status").text("The chameleon is full and happy.");
    } else {
      $("#status").text("The chameleon is thinking about the flower.");
    }
  },
  function () {
    $("#thought").stop(true, true).slideUp(300);
    $("#status").text("The chameleon is waiting for a snack.");
  }
);

$(document).keydown(function (event) {
  if (event.key === " " || event.code === "Space") {
    event.preventDefault();

    following = !following;
    $("#creature").toggleClass("following");

    if (following === true) {
      $("#status").text("Guide the chameleon to the flower!");
      $("#thought").text("Take me to the flower!");
    } else {
      $("#status").text("The chameleon stopped following you.");
    }
  }
});

$(document).mousemove(function (event) {
  if (following === true) {
    $("#creature").css({
      left: event.pageX - $("#scene").offset().left + 30,
      top: event.pageY - $("#scene").offset().top + 30
    });

    let creaturePosition = $("#creature").position();
    let flowerPosition = $("#flower").position();

    let xDistance = Math.abs(creaturePosition.left - flowerPosition.left);
    let yDistance = Math.abs(creaturePosition.top - flowerPosition.top);

    if (xDistance < 90 && yDistance < 90 && flowerEaten === false) {
      $("#flower").fadeOut(400);
      $("#status").text("The chameleon ate the flower snack!");
      $("#thought").text("Yum yum flower snack!");
      flowerEaten = true;
    }
  }
});