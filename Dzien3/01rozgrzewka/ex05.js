/*
  Celem tego ćwiczenia jest wyświetlenie następujących 3 wierszy po 5 znaków:
  -----
  -----
  -----
*/

const generateString = (height, width) => {
  let str = "";

  // Poczatek
  for (let i = 0; i < height; i++) {
    let j = 0;

    while (j < width) {
      str += "-";

      if (j == width - 1) {
        str += "\n";
      }
      j++;
    }
  }

  // Koniec

  return str;
};

const height = 5;
const width = 6;
console.log(generateString(height, width));
