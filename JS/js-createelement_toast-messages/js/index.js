console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

const toast = document.querySelector('[data-js="toast-container__message"]')


addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  const newCard = document.createElement("li");
  newCard.classList.add("toast-container__message");
  newCard.innerHTML = `<p>New text</p>`;
  toastContainer.append(newCard); 
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  toastContainer.innerHTML = "";
});
