function exOh(str) {
  let o = 0;
  let x = 0;
  let i = 0;
  while (i <= str.lenght) {
    if (str[i] == "o") {
      o++;
    }
    if (str[i] == "x") {
      x++;
    }
    i++;
  }
  if (o == x) {
    return true;
  } else {
    return false;
  }
}
console.log(exOh("oooxxx"));
