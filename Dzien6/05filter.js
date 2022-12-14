/*
  Description :
  Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The predicate is invoked with one argument: value.

  Arguments :
  1) The collection to iterate over.
  2) The function invoked per iteration.
  
  Returns :
  The new filtered array.
*/

// Poczatek

// Koniec

const isBigEnough = (value) => {
  if (value >= 10) {
    return true;
  }
  return false;
}

console.log(filter([12, 5, 8, 130, 44], isBigEnough)); // Ma zwrocic `[12, 130, 44]`

console.log(filter([1, 6, 173, 151])); // Ma zwrocic `[]`

console.log(filter(null, isBigEnough)); // Ma zwrocic `[]`