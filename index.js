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

// CONSTANTS
import { botName } from "./Constants/index.js"
import DiceHandler from './Handlers/DiceHandler/index.js';

//////////////////////////////////
// DISCORD.JS CALLBACK HANDLERS //
//////////////////////////////////

client.once('ready', () => {
  console.log(`${botName} is ready to roll!`);
});

client.on('message', message => {
  // Log every user message. (Not bots.)
  if (message.author.bot === false) {
    console.log(`${message.author.username} said: "${message.content}"`);
  }

  // If the message is not coming from a bot, and the message is a bot command for the RollBot!
  if (message.author.bot === false && Utilities.isThisABotCommand(message)) {

    // !roll Are you here my little servant?
    if (Utilities.isAliveCheck(message) !== null) {
      Actions.sendIsAliveMessage(message);
    }

    if (Utilities.isHelpCheck(message) !== null) {
      Actions.sendHelpMessage(message);
    }

    // !roll 2d6+9
    if (Utilities.getArgument(message) !== null) {
      const argument = Utilities.getArgument(message);
      const diceModel = DiceHandler.parseArgument(argument);
      let resultingString = DiceHandler.evaluateDiceRollArgument(diceModel);
      Actions.sendMessage(message, resultingString);
    }

  }
});

client.user.setActivity("!roll help", { type: 'CUSTOM_STATUS' });
client.login(process.env.BOT_KEY);
