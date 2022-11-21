function piramid(size) {
  let str = "";

  for (let i = 0; i < size; i++) {
    if (i == 0) {
      let s = 0;
      while (s < size - 1) {
        str += " ";
        s++;
      }
      str += "X";
    } else {
      str += "XX";
      str = str.replace(" ", "");
    }
    console.log(str);
  }
}
piramid(3);
// utwórz funkcję piramid(size), która rysuje piramidę w terminalu.

// console.log(pyramid(5));
//     X
//    XXX
//   XXXXX
//  XXXXXXX
// XXXXXXXXX

// console.log(pyramid(1));
// X

// console.log(pyramid(3));
//   X
//  XXX
// XXXXX
