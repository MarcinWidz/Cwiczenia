const box = (x, y) => {
  let str = "";

  // Poczatek
  for (let j = 1; j <= y; j++) {
    let i = 1;

    while (i <= x) {
      if ((i == 1 || i == x) && (j == 1 || j == y)) {
        if ((i == 1 && j == 1) || (i == x && j == y)) {
          str += "/";
        } else {
          str += "\\";
        }
      } else {
        if (j > 1 && j < y) {
          if (i > 1 && i < x) {
            str += " ";
          } else {
            str += "*";
          }
        } else {
          str += "*";
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
const y = 1;
console.log(box(x, y));

// console.log(box(5, 3));

// Ma zwrocic:

/***\
*   *
\***/

// console.log(box(5, 1));

// Ma zwrocic:

/***\


// console.log(box(1, 1));

//Ma zwrocic

/


//console.log(box(1, 5));

//Ma zwrocic

/
*
*
*
\

//console.log(box(4, 4));

//Ma zwrocic: 

/**\
*  *
*  *
\**/
