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