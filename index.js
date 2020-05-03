require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

// CONSTANTS
const constant = {
  command: '!roll',
  argument: {
    isAlive: 'are you there',
  },
  regex: {
    areYouThere: /Are you here my little servant?/i,
  }
}

// UTILITIES
/**
 * @param {Object} message
 */
const isThisABotCommand = (message) => {
  const commandCandidate = message.content.substr(0, 5);
  const isThisABotCommandResult = commandCandidate === constant.command;
  console.log({ isThisABotCommandResult, commandCandidate });
  return isThisABotCommandResult;
}


/**
 * @param {Object} message 
 */
const isAliveCheck = (message) => {
  const argumentCandidate = message.content.split(constant.command);
  console.log({ argumentCandidate });
  const isAliveCheckResult = argumentCandidate[1].match(constant.regex.areYouThere);
  console.log({ isAliveCheckResult });
  return isAliveCheckResult;
}

/**
 * Short-hand version for "message.channel.send(...)".
 * @param {String} messageText
 */
const sendMessage = (message, messageText) => {
  message.channel.send(messageText);
}


// ACTIONS
const sendIsAliveMessage = (message) => {
  sendMessage(message, `RollBot is ready to serve master ${message.author.username}!`)
};

// CALLBACK HANDLERS
client.once('ready', () => {
  console.log('RollBot is ready to roll!');
});

client.on('message', message => {
  console.log(`${message.author.username} said: "${message.content}"`);

  // If the message is not coming from the bot, and the message is a bot command!
  if (message.author.bot === false && isThisABotCommand(message)) {
    // Is alive?
    if (isAliveCheck(message) !== null) sendIsAliveMessage(message);
  }
});

client.login(process.env.BOT_KEY);
