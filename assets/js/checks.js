/**
 * @file checks.js
 * @author ToastBox
 * @license GPL-3.0
 */

if (navigator.userAgent !== "BDP (http://example.com), v0.0.1") {
  warnNotification("Whoops! Please set User Agent to 'BDP (http://example.com), v0.0.1'. Visit <a href='https://github.com/toastbox1000/DiscoFun/blob/dev/docs/prerequisites/prerequisites.md'>here</a> for more information.")
} else {
  successNotification("All checks passed successfully.")
}

