console.clear();

const startButton = document.querySelector('[data-js="start-button"]');
const toast = document.querySelector('[data-js="toast"]');
const bread = document.querySelector('[data-js="bread"]');
const countdown = document.querySelector('[data-js="countdown"]');
const countdownBread = document.querySelector('[data-js="countdownBread"]');

let timeoutId;

startButton.addEventListener("click", () => {
  startButton.disabled = true;
  timeoutId = setTimeout(hideToast, 3000);
  timeoutId = setTimeout(hideBread, 5000);
  toast.classList.remove("toast--hidden");
  bread.classList.remove("bread--hidden");
  countdown.classList.add("countdown--visible");
  countdownBread.classList.add("countdown--visible--bread");
});

toast.addEventListener("click", () => {
  clearTimeout(timeoutId);
  hideToast();
});

bread.addEventListener("click", () => {
  clearTimeout(timeoutId);
  hideBread();
});

// These actions are in a separate function
// because we need them in two places in our code.
function hideToast() {
  startButton.disabled = false;
  toast.classList.add("toast--hidden");
  countdown.classList.remove("countdown--visible");
}

function hideBread() {
  startButton.disabled = false;
  bread.classList.add("bread--hidden");
  countdown.classList.remove("countdown--visible");
}
