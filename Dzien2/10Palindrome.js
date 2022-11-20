function reverseString(str) {
  return str.split("").reverse().join("");
}
function palindrom(str) {
  if (str == reverseString(str)) {
    return true;
  } else {
    return false;
  }
}
console.log(palindrom("owocowo"));
