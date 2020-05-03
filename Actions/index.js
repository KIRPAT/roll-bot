import Utilities from "../Utilities/index.js"

/**
 * Contains various actions that the RollBot can do in the server.
 * 
 * For example: 
 *  Sending a message to a text channel is an action.
 *  Muting a user is an action.
 *  Changin the name of a user is an aciton. 
 */
export default class Actions {
  static sendIsAliveMessage(message) {
    Utilities.sendMessage(message, `RollBot is ready to serve master ${message.author.username}!`)
  }
}