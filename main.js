const duration = document.getElementById("duration");
const cancelable = document.getElementById("cancelable");
const addToast = document.getElementById("add-button");
const clearAll = document.getElementById("clear-button");
const message = document.getElementById("message-content");
const toast = document.getElementById("toasts");
const success = document.getElementById("success");
const error = document.getElementById("error");

addToast.addEventListener("click", () => {
  let div = document.createElement("div");
  div.classList.add("toast");
  div.classList.add("success-toast");
  let p = document.createElement("p");
  p.classList.add("message");
  if (message.value.trim()) {
    p.innerHTML = message.value;
  } else if (success.checked) {
    p.innerHTML = "Success";
  } else if (error.checked) {
    p.innerHTML = "Error";
  }
  if (success.checked) {
    div.classList.replace("error-toast", "success-toast");
  } else {
    div.classList.replace("success-toast", "error-toast");
  }
  div.appendChild(p);
  toast.appendChild(div);
  if (cancelable.checked) {
    let buttonX = document.createElement("button");
    buttonX.classList.add("cancel-button");
    buttonX.innerHTML = "X";
    buttonX.addEventListener("click", () => div.remove());
    div.appendChild(buttonX);
  }

  clearAll.addEventListener("click", () => (toast.innerHTML = ""));

  setInterval(() => {
    div.remove();
  }, duration.value);
});
