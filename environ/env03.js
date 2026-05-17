let environmentTitle = "Bob's Dreamy Pink Portal";

let environmentElements = [
    "pink sky",
    "soft clouds",
    "glowing background",
    "tiny Bob",
    "dreamy space"
];

let bobCreature = {
    name: "Bob",
    species: "blob explorer",
    mood: "curious but sleepy",
    favoritePlace: environmentElements[2],
    isLost: false
};

let clickCount = 0;

$("#title-button").click(function () {

    let message = "<p>This environment is called " + environmentTitle + ".</p>";

    $("#environment-output").html(message);

});

$("#mood-button").click(function () {

    let message = "<p>The mood of this environment is dreamy, soft, and slightly mysterious.</p>";

    message = message + "<p>Bob's current mood is " + bobCreature.mood + ".</p>";

    $("#environment-output").html(message);

});

$("#bob-button").click(function () {

    let message = "<p>Name: " + bobCreature.name + "</p>";

    message = message + "<p>Species: " + bobCreature.species + "</p>";

    message = message + "<p>Favorite place: " + bobCreature.favoritePlace + "</p>";

    message = message + "<p>Is Bob lost? " + bobCreature.isLost + "</p>";

    $("#environment-output").html(message);

});

$("#click-button").click(function () {

    clickCount = clickCount + 1;

    let message = "<p>You have followed Bob " + clickCount + " times.</p>";

    message = message + "<p>The environment contains: " + environmentElements.join(", ") + ".</p>";

    $("#environment-output").html(message);

    console.log(clickCount);

});

function changeBobWorld(choice) {

    if (choice == "bob") {

        let message = "<p>Bob is a blob explorer with glitter in his pockets, one brain cell, and the confidence of someone who has never checked a map.</p>";

        message = message + "<p>He is tiny, dramatic, and probably knows a secret about this place.</p>";

        $("#environment-output").html(message);

        $("#blob").css("box-shadow", "0 0 40px hotpink");

    }

    else if (choice == "trick") {

        let message = "<p>You clicked the button that said do not click this.</p>";

        message = message + "<p>Bob is not mad. Bob is just deeply disappointed and a little bit impressed.</p>";

        $("#environment-output").html(message);

        $("body").css("background-color", "purple");

        $("#blob").css("transform", "rotate(10deg)");

    }

    else if (choice == "explore") {

        let message = "<p>You and Bob walk deeper into the glowing environment.</p>";

        message = message + "<p>The air smells like clouds, moss, and something that probably should not be touched.</p>";

        $("#environment-output").html(message);

        $(".text-box").css("background-color", "rgba(255, 200, 240, 0.5)");

        $("#blob").css("width", "360px");

    }

    else {

        $("#environment-output").html("<p>Bob does not understand what is happening.</p>");

    }
}

$("#bob-button").click(function () {
    changeBobWorld("bob");
});

$("#trick-button").click(function () {
    changeBobWorld("trick");
});

$("#explore-button").click(function () {
    changeBobWorld("explore");
});
