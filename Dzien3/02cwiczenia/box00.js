const box = (x, y) => {
  let str = "";

  // Poczatek
  for (let j = 1; j <= y; j++) {
    let i = 1;

    while (i <= x) {
      if ((i == 1 || i == x) && (j == 1 || j == y)) {
        str += "o";
      } else {
        if (j > 1 && j < y) {
          if (i > 1 && i < x) {
            str += " ";
          } else {
            str += "|";
          }
        } else {
          str += "-";
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

const x = 10;
const y = 6;
console.log(box(x, y));

// console.log(box(5, 3));

// Ma zwrocic:

// o---o
// |   |
// o---o

// console.log(box(5, 1));

// Ma zwrocic:

// o---o

// console.log(box(1, 1));

//Ma zwrocic

//o

//console.log(box(1, 5));

//Ma zwrocic

// o
// |
// |
// |
// o

//console.log(box(4, 4));

//Ma zwrocic:

// o--o
// |  |
// |  |
// o--o
