var screen = document.getElementById("screen");

/* html page 27 line (in any button click then this funtion is call and argument which is passed from html page)*/
function btnclick(value) {
  screen.value += value;
}
/* this is used to clear the screen */
function clearscreen() {
  screen.value = "";
}
/* it is used for performing arithematic operations when we click = sing
use of eval funtion is automatically it evaluvate or perform the operation present 
in the screen  */

function findresult() {
  var result = eval(screen.value);
  screen.value = result;
}
