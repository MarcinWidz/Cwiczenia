/*
  Description :
  Iterates over elements of collection and invokes iteratee for each element. The iteratee is invoked with one argument: value.

  Arguments :
  1) The collection to iterate over.
  2) The function invoked per iteration.
*/

const forEach = (arr, func) => {
  // Poczatek
  
  // Koniec
};

const callback = value => {
  console.log(value);
};

forEach([1, 2], callback); // Ma zwrocic `1` puis `2`

forEach([3, 1]); // Ne doit rien afficher

forEach([], callback); // Ne doit rien afficher

forEach(); // Ne doit rien afficher