function vowelCount(str) {
  let i = 0;
  let num = 0;
  while (i <= str.length) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u" ||
      str[i] == "y"
    ) {
      num++;
    }
    i++;
  }
  return num;
}
console.log(vowelCount("bolaonello"));
