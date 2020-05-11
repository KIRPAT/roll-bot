import { botName, command } from "../Constants/index.js"

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

  static sendHelpMessage(message) {
    this.sendMessage(message, ` \`\`\` 
    
    The ${botName} command is ${command}.

    Example roll: ${command} 3d20-8

    3 -> (Optional) How many times you roll the dice. Must be a positive integer.
    20 -> Die type. Can be any positive integer. 6, 10, 20... etc.
    -8 -> (Optional) The integer you want to add or extract from the final sum.

    Roll argument examples: d10, 2d20, d15+3, 5d20-9 , 100d150+1000

    \`\`\` `)
  }

  static sendIsAliveMessage(message) {
    this.sendMessage(message, `\`${botName} is ready to serve master ${message.author.username}!\``)
  }
}