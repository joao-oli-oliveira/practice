let from = document.getElementById("from"); //User selects from tempe

let to = document.getElementById("to"); //User selects to temp

let input = document.getElementById("input"); //User inputs temp

let button = document.getElementById("confirm");

let output = document.getElementById("output");

button.addEventListener("click", function (event) {
  if (from.value === "f" && to.value === "c") {
    output.textContent = (input.value * 9) / 5 + 32;
  }

  if (from.value === "c" && to.value === "f") {
    output.textContent = ((input.value - 32) * 5) / 9;
  }

  if (from.value === to.value) {
    output.textContent = input.value;
  }

  console.log(output.value);
}); //Confirm button is pressed

/*


if (from === "f" && to === "c") {
output = (input.value * 9/5) + 32};
  



//Conversion is calculated

//Conversion is displayed




*/
