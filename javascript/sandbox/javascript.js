function add7(a) {
  return a + 7;
}

function multiply(a, b) {
  return a * b;
}

function capitalize(val) {
  return val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
}

function lastLetter(valu) {
  let lastLetterpos = valu.length;
  return valu.charAt(lastLetterpos - 1);
}

console.log(lastLetter("abc"));

/*

function capitalize(string) {
  first = string.charAt(0).toUpperCase();
  remaining = string.slice(1).toLowerCase();
  return first + remaining;
}

.toLowerCase()

.slice(3, 6)
;
*/
