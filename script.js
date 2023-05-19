function onNumericButtonClick(eventData) {
  // click listener for numeric buttons
  let clickedDigit = eventData.target.innerText;
  let display = document.getElementById("display");

  if (display.innerText === "0") {
    display.innerText = clickedDigit;
  } else {
    display.innerText += clickedDigit;
  }
}

function clearDisplay() {
  document.getElementById("display").innerText = "0";
}

function onLoadOperations() {
  // We want to programmatically add "click" event
  // listeners to all the buttons of our calculator.

  let numericButtons = document.querySelectorAll(".numeric-button");

  for (let i = 0; i < numericButtons.length; i++) {
    let button = numericButtons[i];
    button.addEventListener("click", onNumericButtonClick);
  }

  document
    .getElementById("clear-button")
    .addEventListener("click", clearDisplay);
}
window.onload = onLoadOperations;
// Adding a listener for the "load" event of our window.
