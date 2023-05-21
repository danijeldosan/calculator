let previousValue;
let previousOperation;

//let calculatorStorage = {
//    operand1 = null,
//    previousoperation = null
//}

function onNumericButtonClick(eventData) {
  // click listener for numeric buttons
  let clickedDigit = eventData.target.innerText;
  let display = document.getElementById("display");

  if (display.innerText === "0") {
    // replace the 0 with digit clicked
    display.innerText = clickedDigit;
  } else {
    // add the digit to the display
    display.innerText += clickedDigit;
  }
  // The same:
  // display.innerText = display.innerText + clickedDigit;
}

function clearDisplay() {
  document.getElementById("display").innerText = "0";
}

function onOperationButtonClick(eventData) {
  let operation = eventData.target.innerText;

  if (operation !== "=") {
    // 1) Save the number on display, and clear it
    // 2) Save the operation
    previousValue = document.getElementById("display").innerText;
    previousOperation = operation;
    clearDisplay();

    console.log("Memory: ", previousValue, previousOperation);
  } else {
    // When we click on equals, we want to
    // 1) Get the previous number that we saved
    // 2) Get the number currently on the display
    // 3) Get the operation saved before
    // 4) Execute the operation --> print the result on display
    let currentValue = document.getElementById("display").innerText;
    console.log("Executing: ", previousValue, previousOperation, currentValue);

    let result;
    // We need to convert the two things we saved to number.
    // Because they were both .innerText --> strings.
    let operand1 = parseFloat(previousValue);
    let operand2 = parseFloat(currentValue);

    //if (previousOperation === "+") {
    //result = operand1 + operand2;
    //} else if (previousOperation === "-") {
    // result = operand1 - operand2;
    //} else if (previousOperation === "/") {
    //result = operand1 / operand2;
    //} else if (previousOperation === "*") {
    //result = operand1 * operand2;
    //}

    switch (previousOperation) {
      case "+":
        result = operand1 + operand2;
        break;
      case "-":
        result = operand1 - operand2;
        break;
      case "/":
        result = operand1 / operand2;
        break;
      case "*":
        result = operand1 * operand2;
        break;
      default:
        alert("Something went wrong!");
        break;
    }

    document.getElementById("display").innerText = result;
  }
}

function onLoadOperations() {
  // We want to programmatically add "click" event
  // listeners to all the buttons of our calculator.

  let numericButtons = document.querySelectorAll(".numeric-button");

  for (let i = 0; i < numericButtons.length; i++) {
    let button = numericButtons[i];
    button.addEventListener("click", onNumericButtonClick);
  }

  let operationButtons = document.querySelectorAll(".operation-button");
  for (let button of operationButtons) {
    button.addEventListener("click", onOperationButtonClick);
  }

  document
    .getElementById("clear-button")
    .addEventListener("click", clearDisplay);
}
window.onload = onLoadOperations;
// Adding a listener for the "load" event of our window.
