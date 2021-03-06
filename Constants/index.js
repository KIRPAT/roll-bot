/**
 * Name of the bot.
 */
export const botName = 'RollBot';

/**
 * The initial command string that used for calling the RollBot.
 */
export const command = '!roll';

/**
 * The object that is holding all possible "unique" arguments.
 */
export const argument = {};

/**
 * The object that is holding pre-defined RegEx.
 */
export const regex = {
  areYouThere: /Are you here my little servant?/i,
  roll: /(\d+)?d(\d+)([\+\-]\d+)?/ig,
  help: /help/ig
};