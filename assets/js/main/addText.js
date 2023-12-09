/**
 * @file addText.js
 * @author IMakeToast
 * @license GPL-3.0
 */

function addText(value) {
  const toSend = $('#toSend');
  toSend.html(`${toSend.html() + escapeHtml(value)} `);
}
