const box = (x, y) => {
  let str = "";

  // Poczatek
  for (let j = 1; j <= y; j++) {
    let i = 1;

    while (i <= x) {
      if ((i == 1 && j == 1) || (j == 1 && i == x)) {
        str += "A";
      } else {
        if (j > 1 && j < y) {
          if (i > 1 && i < x) {
            str += " ";
          } else {
            str += "B";
          }
        } else {
          if ((i == 1 && j == y) || (i == x && j == y)) {
            str += "C";
          } else {
            str += "B";
          }
        }
      }
      if (i == x) {
        str += "\n";
      }
      i++;
    }
  }

  // Koniec

  return str;
};

const x = 1;
const y = 5;
console.log(box(x, y));
// Koniec

// console.log(box(5, 3));

// Ma zwrocic:

// ABBBA
// B   B
// CBBBC

// console.log(box(5, 1));

// Ma zwrocic:

// ABBBA

// console.log(box(1, 1));

//Ma zwrocic

// A

//console.log(box(1, 5));

//Ma zwrocic

// A
// B
// B
// B
// C

//console.log(box(4, 4));

//Ma zwrocic:

// ABBA
// B  B
// B  B
// CBBC
