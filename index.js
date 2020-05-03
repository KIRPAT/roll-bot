/////////////
// IMPORTS //
/////////////

// ENVIRONTMENT
import dotenv from 'dotenv';
dotenv.config();

// DISCORD.JS
import Discord from 'discord.js';
const client = new Discord.Client();

// CUSTOM IMPORTS
import Utilities from './Utilities/index.js';
import Actions from './Actions/index.js';



//////////////////////////////////
// DISCORD.JS CALLBACK HANDLERS //
//////////////////////////////////

client.once('ready', () => {
  console.log('RollBot is ready to roll!');
});

client.on('message', message => {
  // Log every user message. (Not bots.)
  message.author.bot === false && console.log(`${message.author.username} said: "${message.content}"`);

  // If the message is not coming from a bot, and the message is a bot command for the RollBot!
  if (message.author.bot === false && Utilities.isThisABotCommand(message)) {
    if (Utilities.isAliveCheck(message) !== null) {
      Actions.sendIsAliveMessage(message);
    }
  }
});

client.login(process.env.BOT_KEY);