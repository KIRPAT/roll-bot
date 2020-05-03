import { command, regex } from '../Constants/index.js'

/**
 * Utility methods for various stuff.
 * 
 * TODO: Expand the documentation futher.
 */
export default class Utilities {
  /**
   * Testing method. Don't use anywhere.
   */
  static helloWord() {
    console.log("Hello World");
  }

  /**
   * Short-hand version for "message.channel.send(...)".
   * @param {String} messageText
   */
  static sendMessage(message, messageText) {
    message.channel.send(messageText);
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