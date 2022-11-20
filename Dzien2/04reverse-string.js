function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("bolon"));


//Zapomnialem napisac, ale w cwiczeniu mialo byc bez metody reverse(). Bez mozna by napisac cos takiego: 

// const reverseString = str => {
//   let result = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     result = result + str.charAt(i);
//   }

//   return result;
// };