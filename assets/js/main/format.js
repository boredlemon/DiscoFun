/**
 * @file format.js
 * @author IMakeToast
 * @license GPL-3.0
 */

function format(command, value) {
  document.execCommand(command, false, value);
}
