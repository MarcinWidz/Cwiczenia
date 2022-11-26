// Utwórz plik o nazwie second-great-low.js.

// Utwórz funkcję secondGreatLow(tab), która jako parametr przyjmie tablicę liczb i zwróci drugą najmniejszą i drugą największą liczbę.

// Wartość zwracana będzie typu Array, chyba że wystąpi błąd.

console.log(secondGreatLow([1, 42, 42, 180])); // Zwroci [42, 42]
console.log(secondGreatLow([4, 90])); // Zwroci [90, 4]
console.log(secondGreatLow([7, 7, 12, 98, 106])); // Zwroci [12, 98]
console.log(secondGreatLow([8])); // Zwroci [8, 8]
console.log(secondGreatLow([-12, -12, -12])); // Zwroci [-12, -12]
console.log(secondGreatLow(["ABC", 9, 4, 10])); //  Zwroci : ERROR