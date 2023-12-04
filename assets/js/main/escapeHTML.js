/**
 * @file escapeHTML.js
 * @author OverjoyedToast
 * @license GPL-3.0
 */

function escapeHtml(text) {
  return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
}
