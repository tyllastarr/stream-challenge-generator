const choices = require("./bns.json");
const roller = require("./roller.js");

exports.rollBnS = function rollBnS() {
  var race, charClass, gender, outputText; // Output variables

  // Race
  race = roller.roll(choices.races);
  console.log(race);

  // Gender
  if (race === "Yun") {
    gender = "Female"; // Yun are gender locked
  } else {
    gender = roller.roll(choices.genders);
    console.log(gender);
  }

  // Class
  charClass = roller.roll(choices.classes);
  console.log(charClass);

  // Parse it all
  outputText = "How about a " + gender + " " + race + " " + charClass + "?";
  return outputText;
};
