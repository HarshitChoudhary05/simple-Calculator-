let calculation = [];

function updateDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
  calculation = [];
}

function deleteChar() {
  let display = document.getElementById("display").value;
  document.getElementById("display").value = display.substring(0, display.length - 1);
}

function calculate() {
  let display = document.getElementById("display").value;
  if (display !== "") {
    calculation.push(display);
    let result = eval(calculation.join(""));
    document.getElementById("display").value = result;
    calculation = [result];
  }
}

function percentage() {
  let display = document.getElementById("display").value;
  let percentage = parseFloat(display) / 100;
  document.getElementById("display").value = percentage;
}

document.addEventListener("keydown", function(event) {
  let allowedKeys = ["+", "-", "*", "/", ".", "%", "Enter", "Backspace", "Delete"];
  if (allowedKeys.includes(event.key)) {
    event.preventDefault();
    switch (event.key) {
      case "+":
        updateDisplay("+");
        break;
      case "-":
        updateDisplay("-");
        break;
      case "*":
        updateDisplay("*");
        break;
      case "/":
        updateDisplay("/");
        break;
      case ".":
        updateDisplay(".");
        break;
      case "%":
        percentage();
        break;
      case "Enter":
        calculate();
        break;
      case "Backspace":
      case "Delete":
        deleteChar();
        break;
    }
  } else if (!isNaN(parseInt(event.key))) {
    updateDisplay(event.key);
  }
});
