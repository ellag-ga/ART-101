let failCount = 0;

function livefireGuess(correctNumber) {
let userNumber = prompt("Guess a number 1-35");

if (userNumber == correctNumber) {
$("#output").html("YOU GOT IT. 29 was the magic number ☆");
failCount = 0;
}
else if (userNumber > 29 && userNumber <= 35) {
$("#output").html("🚨 GIANT ERROR WRONG 🚨");
failCount = 0;
}
else if (userNumber >= 1 && userNumber <= 25) {
failCount++;

let extraOs = "o".repeat(failCount * 4);

$("#output").html("N" + extraOs + "pe");
}
else {
$("#output").html("no.");
}
}

$("#good-button").click(function () {
livefireGuess(29);
});

