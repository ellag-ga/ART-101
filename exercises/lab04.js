let count = 0;

let creatures = [
    {
        name: "Snugglefang",
        species: "Marsh Dragon",
        trait: "collects shiny buttons"
    },

    {
        name: "Blooperton",
        species: "Bubble Goblin",
        trait: "sneezes glitter"
    },

    {
        name: "Princess Pickles",
        species: "Royal Swamp Beast",
        trait: "rules over frogs"
    },

    {
        name: "Toaster",
        species: "Tiny Cave Monster",
        trait: "eats homework"
    },

    {
        name: "Muffin Doom",
        species: "Chaos Hamster",
        trait: "destroys kingdoms accidentally"
    },

    {
        name: "Sir Wiggles",
        species: "Forest Cryptid",
        trait: "communicates through dancing"
    }
];

$("#needy-button").click(function () {

    let creatureIndex = count % creatures.length;

    let creature = creatures[creatureIndex];

    count++;

    let message = "";

    message += "<h3>" + creature.name + "</h3>";

    message += "<p><strong>Species:</strong> " + creature.species + "</p>";

    message += "<p><strong>Special Trait:</strong> " + creature.trait + "</p>";

    message += "<p><strong>Creatures Discovered:</strong> " + count + "</p>";

    $("#output").html(message);
});