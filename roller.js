exports.roll = function roll(choiceList) {
    var finalRoll, finalResult, numChoices; // Random number generator
  
    numChoices = choiceList.length;
    console.log(numChoices);
    finalRoll = Math.floor(Math.random() * numChoices);
    finalResult = choiceList[finalRoll];
    return finalResult;
  }  