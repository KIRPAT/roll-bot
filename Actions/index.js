import { botName } from "../Constants/index.js"

/**
 * Contains various actions that the RollBot can do in the server.
 * 
 * For example: 
 *  Sending a message to a text channel is an action.
 *  Muting a user is an action.
 *  Changin the name of a user is an aciton. 
 */
export default class Actions {
  /**
   * Short-hand version for "message.channel.send(...)".
   * @param {String} messageText
   */
  static sendMessage(message, messageText) {
    message.channel.send(messageText);
  }

  static sendHelpMessage(message, messageText) {
    this.sendMessage(message, `\` This is a help message! \``)
  }

  static sendIsAliveMessage(message) {
    this.sendMessage(message, `\`${botName} is ready to serve master ${message.author.username}!\``)
  }
}