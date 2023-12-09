/**
 * @file tempChange.js
 * @author IMakeToast
 * @license GPL-3.0
 */

function tempChange(DOM, text, time) {
  const newText = `${$(DOM).text().replace(text, '')} ${text}`;

  $(DOM).html(newText);

  setTimeout(() => {
    $(DOM).html(newText.replace(text, ''));
  }, time);
}
