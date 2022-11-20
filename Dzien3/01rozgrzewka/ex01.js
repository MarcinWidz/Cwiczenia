const generateString = (num) => {
  let str = "";

  // Poczatek
  let i = 0;
  while (i < num) {
    str += "-";
    i++;
  }
  // koniec

  return str;
};

console.log(generateString(1)); // Ma zwrocic `-`
console.log(generateString(2)); // Ma zwrocic `--`
console.log(generateString(4)); // Ma zwrocic `----`
console.log(generateString(19)); // Ma zwrocic `-------------------`
