const generateString = (num) => {
  let str = "";

  // Poczatek
  let i = 1;
  while (i < num) {
    str += "-";
    i++;
  }
  // koniec

  return (str += "o");
};

console.log(generateString(1)); // Ma zwrocic `o`
console.log(generateString(2)); // Ma zwrocic `-o`
console.log(generateString(4)); // Ma zwrocic `---o`
console.log(generateString(19)); // Ma zwrocic `------------------o`
