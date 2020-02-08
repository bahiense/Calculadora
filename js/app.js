let runningTotal = 0;
let buffer = "0";
let previousOperator;

document
  .querySelector(".calculator")
  .addEventListener("click", function(event) {
    buttonClick(event.target.innerText);
  });

function buttonClick(value) {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
}

function handleNumber(value) {
  if (buffer === "0") {
    console.log(buffer);
  } else {
    buffer += value;
  }
  console.log(buffer);
}
