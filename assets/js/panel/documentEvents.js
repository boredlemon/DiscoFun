/**
 * @file documentEvents.js
 * @author IMakeToast
 * @license GPL-3.0
 */

$(document).on('change', '.guilds', () => {
  updateGuild();
});

$(document).on('change', '.channels', () => {
  updateChannel();
});
