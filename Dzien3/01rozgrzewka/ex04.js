/*
 Celem tego ćwiczenia jest wyświetlenie „o---o” w kilku wierszach.
  Przykład, jeśli "height” wynosi 4:
  o---o
  o---o
  o---o
  o---o
*/

// Début de votre code
const generateString = (num) => {
  let string = "";
  let str = "o---o\n";
  let i = 0;
  while (i < num) {
    string += str;
    i++;
  }
  return string;
};

// Fin de votre code

const height = 4;
console.log(generateString(height));
