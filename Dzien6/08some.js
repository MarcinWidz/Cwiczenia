/*
  Description :
  Checks if predicate returns truthy for any element of collection. Iteration is stopped once predicate returns truthy. The predicate is invoked with one argument: value.

  Arguments :
  1) The collection to iterate over.
  2) The function invoked per iteration.
  
  Returns :
  Returns true if any element passes the predicate check, else false.
*/

// Poczatek

// Koniec

const isLargerThanTen = (element) => {
  if (element >= 10) {
    return true;
  }
  return false;
}

console.log(some([10, 9, 8], isLargerThanTen)); // Ma zwrocic `true`
console.log(some([1, 4, 2], isLargerThanTen)); // Ma zwrocic `false`