function onLoadOperations() {
  // We want to programmatically add "click" event
  // listeners to all the buttons of our calculator.

  let numericButtons = document.querySelectorAll(".numeric-button");

  for (let i = 0; i < numericButtons.length; i++) {
    let button = numericButtons[i];
    button.addEventListener("click", onNumericButtonClick);
  }
}
window.onload = onLoadOperations;
// Adding a listener for the "load" event of our window.

function onNumericButtonClick() {
  console.log("Clicked");
}
