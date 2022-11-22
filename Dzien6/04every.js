/*
  Description :
  Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate returns falsey. The predicate is invoked with one argument: value.

  Arguments :
  1) The collection to iterate over.
  2) The function invoked per iteration.
  
  Returns :
  Returns true if all elements pass the predicate check, else false.
*/

// Poczatek

// Koniec

const isLargerThanTen = element => {
  if (element >= 10) {
    return true;
  } else {
    return false;
  }
};

console.log(every([10, 20, 30], isLargerThanTen)); // Ma zwrocic `true`

console.log(every([10, 8, 20], isLargerThanTen)); // Ma zwrocic `false`

console.log(every([4, 13, 5])); // Ma zwrocic `false`

console.log(every(null, isLargerThanTen)); // Ma zwrocic `false`