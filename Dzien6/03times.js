/*
  Description :
  Invokes the iteratee n times, returning an array of the results of each invocation.

  Arguments :
  1) The number of times to invoke iteratee.
  2) The function invoked per iteration.
  
  Returns :
  The array of results.
*/

// Poczatek

// Koniec

const getRandomInteger = () => {
  return Math.round(Math.random() * 100);
}

console.log(times(5, getRandomInteger)); // Ma zwrocic un tableau contenant 5 valeurs aléatoires `[64, 70, 29, 10, 23]`

console.log(times(2, getRandomInteger)); // Ma zwrocic un tableau contenant 2 valeurs aléatoires `[13, 51]`

console.log(times(4)); // Ma zwrocic `[undefined, undefined, undefined, undefined]`

console.log(times("Hello", getRandomInteger)); // Ma zwrocic `[]`

console.log(times(null, getRandomInteger)); // Ma zwrocic `[]`