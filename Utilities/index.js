import { command, regex } from '../Constants/index.js';
import DiceHandler from '../Handlers/DiceHandler/index.js';
/**
 * Utility methods for various stuff.
 * 
 * TODO: Expand the documentation futher.
 */
export default class Utilities {
  /**
   * Testing method. Don't use it anywhere.
   */
  static helloWord() {
    console.log("Hello World");
  }

  /**
   * Decides if the message is a bot command or not.
   * 
   * @param {Object} message
   */
  static isThisABotCommand(message) {
    const commandCandidate = message.content.split(" ")[0];
    const isThisABotCommandResult = commandCandidate === command;
    //console.log({ isThisABotCommandResult, commandCandidate });
    return isThisABotCommandResult;
  }

  /**
   * Attempts to retreive the argument section of the command and applies regex check on it.
   * 
   * @param {Object} message 
   */
  static getArgument(message) {
    const argumentCandidate = message.content.split(" ")[1];
    let resultingArgument = DiceHandler.isTheDiceArgumentValid(argumentCandidate);
    return resultingArgument;
  }

  /**
   * Checks if the bot is alive or not.
   * @param {Object} message 
   */
  static isAliveCheck(message) {
    const argumentCandidate = message.content.split(command);
    //console.log({ argumentCandidate });
    const isAliveCheckResult = argumentCandidate[1].match(regex.areYouThere);
    //console.log({ isAliveCheckResult });
    return isAliveCheckResult;
  }
}