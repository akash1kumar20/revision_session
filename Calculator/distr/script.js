let valueShowbar = " ";
//value we want to show in our showbar
document.querySelector("#display").value = valueShowbar;
function valueSelector(event) {
  let numberClicked = event.target.value;
  valueShowbar = valueShowbar + numberClicked;
  document.querySelector("#display").value = valueShowbar;
}
//when the user clicks on clear
function clearValue() {
  valueShowbar = " ";
  document.querySelector("#display").value = " ";
}
//when user click on equal sign
function calculateValue() {
  valueShowbar = eval(valueShowbar);
  //eval helps to calculate all the things into a single value
  document.querySelector("#display").value = valueShowbar;
}
//when user wants to find out the power of the number
function powerSquare() {
  valueShowbar = valueShowbar * valueShowbar;
  document.querySelector("#display").value = valueShowbar;
}
