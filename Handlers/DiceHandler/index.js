import { regex } from "../../Constants/index.js"
import DiceRoll from "../../Models/DiceRoll/index.js"

/**
 * Handles the dice related arguments such as "d20", "3d6", "2d20+8" etc.
 * 
 * Ex: "!roll 2d6"
 */
export default class DiceHandler {

  /**
   * Decides if the dice argument is valid. 
   * 
   * Returns either "null" or the argument itself.  
   * @param {String} diceArgument 
   */
  static isTheDiceArgumentValid(diceArgument) {
    let diceArgumentValidationResult = diceArgument.match(regex.roll);
    console.log({ diceArgumentValidationResult });
    return diceArgumentValidationResult === null ? null : diceArgumentValidationResult[0];
  }

  /**
   * Must be called if and only if "isTheDiceArgumentValid" returns an argument. (Not "null".)
   * 
   * Returns a "DiceRoll" model.
   * 
   * @param {String} diceArgument 
   */
  static parseArgument(diceArgument) {
    const additionSeparators = ["+", "-"];
    const diceSeparator = /d/gi // regex;
    let mainRoll = diceArgument; // 2d20, if there is an addition, it will be separated later. 
    let foundAddition = false;

    let dieType = 20, rollMultiplier = 1, addition = 0;

    // Separate "-" or "+".
    additionSeparators.forEach(separator => {
      let splitResult = diceArgument.split(separator);
      console.log({ splitResult });

      if (foundAddition === false && splitResult.length === 2) {
        foundAddition = true;
        addition = splitResult[1];
        mainRoll = splitResult[0]; // addition fix
        if (separator === "-") {
          addition = addition * (-1);
        }
      }
    })

    // Main Roll Part
    let splittedMainRoll = mainRoll.split(diceSeparator);
    console.log({ splittedMainRoll });

    if (splittedMainRoll[0] !== "") {
      rollMultiplier = splittedMainRoll[0];
    }
    dieType = splittedMainRoll[1]

    const rollModel = new DiceRoll(dieType, rollMultiplier, addition);
    //rollModel.printModel();
    return rollModel;
  }

  /**
   * Calculates the result of a single dice roll, and produces a string from it.
   * @param {DiceRoll} diceRoll 
   */
  static evaluateDiceRoll(diceRoll) {
    const dieType = diceRoll.getDieType();
    let evalResult = Math.floor(Math.random() * Math.floor(dieType)) + 1;
    console.log({ evalResult })
    return evalResult;
  }

  /**
   * Makes the total calculation of the dice roll and returns a string. 
   * @param {DiceRoll} diceRoll 
   */
  static evaluateDiceRollArgument(diceRoll) {
    const rollMultiplier = diceRoll.getRollMultiplier();
    let resultingTotal = 0;
    let evaluatedString = "";

    for (let i = 0; i < rollMultiplier; i++) {
      let rollResult = this.evaluateDiceRoll(diceRoll);
      resultingTotal += rollResult;

      if (rollMultiplier === (i + 1)) {
        evaluatedString += rollResult
      } else {
        evaluatedString += `${rollResult} + `;
      }
    }

    let finalString = `\`${evaluatedString}(${diceRoll.getAddition()}) = ${resultingTotal + parseInt(diceRoll.getAddition())}\``
    console.log(finalString)
    return finalString;
  }
}