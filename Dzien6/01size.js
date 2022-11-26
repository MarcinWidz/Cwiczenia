/*
  Description :
  Gets the size of collection by returning its length.

  Arguments :
  1) The collection to inspect.

  Returns :
  The collection size.
*/

// Poczatek

// Koniec

console.log(size("pebbles")); // Ma zwrocic `7`

// Pour l'exemple suivant, vous pourriez avoir besoin de `Array.isArray`
// Voir https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
console.log(size([1, 2, 3])); // Ma zwrocic `3`

console.log(size()); // Ma zwrocic `0`

console.log(size(null)); // Ma zwrocic `0`

console.log(size(10)); // Ma zwrocic `0`

console.log(size(true)); // Ma zwrocic `0`