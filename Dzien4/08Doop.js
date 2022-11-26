// Utwórz funkcję doop(tab), która otrzyma tablicę trzech parametrów:

// Pierwszy i trzeci to liczby całkowite
// Drugi to operator arytmetyczny wybrany spośród: „+”, „-”, „*”, „/” i „%”
// Program musi wyświetlić wynik żądanej operacji arytmetycznej.
// Jeżeli liczba parametrów nie jest równa 3, program wyświetli ERROR.

// Zwracana wartość będzie typu Number, z wyjątkiem przypadku wystąpienia błędu.

console.log(doop([5, "+", 4])); // Zwroci : 9
console.log(doop([9, "*", 2])); // Zwroci : 18
console.log(doop([11, "-", 4])); // Zwroci : 7
console.log(doop([-1, "*", 4])); // Zwroci : -4
console.log(doop([10.1, "-", 2])); // Zwroci : ERROR
console.log(doop([8])); // Zwroci : ERROR