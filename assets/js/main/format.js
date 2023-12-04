/**
 * @file format.js
 * @author OverjoyedToast
 * @license GPL-3.0
 */

function format(command, value) {
  document.execCommand(command, false, value);
}
