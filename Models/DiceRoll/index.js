/**
 *  Creates a model of the dice roll.
 * 
 *  2d20+6
 * 
 *  Parameters:
 * - dieType: 20 (default: 20)
 * - rollMultiplier : 2 (default: 1)
 * - addition: 6 (or -6) (default: 0)
 */
export default class DiceRoll {
  constructor(dieType = 20, rollMultiplier = 1, addition = 0) {
    this.dieType = dieType;
    this.rollMultiplier = rollMultiplier;
    this.addition = addition;
  }

  getDieType() {
    return this.dieType;
  }

  getRollMultiplier() {
    return this.rollMultiplier;
  }

  getAddition() {
    return this.addition;
  }

  printModel() {
    console.log({
      dieType: this.dieType,
      rollMultiplier: this.rollMultiplier,
      addition: this.addition
    })
  }
}