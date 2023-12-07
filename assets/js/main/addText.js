/**
 * @file addText.js
 * @author ToastBox
 * @license GPL-3.0
 */

function addText(value) {
  const toSend = $('#toSend');
  toSend.html(`${toSend.html() + escapeHtml(value)} `);
}
