const choices = require("./sto.json");
const roller = require("./roller.js");

exports.rollSTO = function rollSTO() {
    var faction, allegiance, race, charClass, gender, ship, outputText; // Output variables
    var fixedAllegiance; // Is the allegiance of that faction fixed?
    var counter;

    // Faction and allegiance
    faction = roller.roll(choices.factions);
    switch(faction) {
        // For future use to add more factions
        default: // Unlocked allegiance
        fixedAllegiance = false;
        break;
    }
    if(!fixedAllegiance) {
        allegiance = roller.roll(choices.allegiances);
    }

    // Gender
    if(faction === "Dominion") {
        gender = "Male"; // Dominion only allows male characters
    } else {
        gender = roller.roll(choices.genders);
    }

    // Race
    for(counter = 0; counter < choices.races.length; counter++) {
        if(choices.races[counter].faction === faction) {
            race = roller.roll(choices.races[counter].races);
            break;
        } else {
            race = undefined;
        }
    }
    if(race === undefined) {
        return "An error occurred: race not found.";
    }

    // Class
    charClass = roller.roll(choices.classes);

    // Ship
    for(counter = 0; counter < choices.ships.length; counter++) {
        if(choices.ships[counter].faction === faction) {
            ship = roller.roll(choices.ships[counter].ships);
            break;
        } else {
            ship = undefined;
        }
    }
    if(ship === undefined) {
        return "An error occurred: race not found.";
    }

    // And parse it all
    if(fixedAllegiance) {
        outputText = "How about a " + gender + " " + race + ", flying a " + ship + " as a " + charClass + " officer for the " + faction + "?";
    } else {
        outputText = "How about a " + gender + " " + race + ", flying a " + ship + " as a " + charClass + " officer for the " + faction + " and allying with " + allegiance + "?";
    }

    return outputText;
}