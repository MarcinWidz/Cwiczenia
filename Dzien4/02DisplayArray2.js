// Utwórz plik o nazwie display-array-v3.js.

// Utwórz funkcję displayArray(tab, opcja), która jako parametr otrzyma tablicę ciągów znaków i zwróci ją w postaci ciągu znaków. Drugi parametr włączy separator "i" przed ostatnim elementem, czyli.

function displayArray(tab, opcja) {
  if (opcja === false) {
    tab = ["Bolon", "Spala", "Penis Grzegorz Sztuczny"];
  } else if (opcja === true) {
    tab = ["Bolon1", "Spala1", "Penis Grzegorz Sztuczny1"];
  }
  return tab;
}
console.log(displayArray(["Bolon", "Spala", "Penis Grzegorz Sztuczny"], false)); // Ma zwrocic "Bolon Spala Grzegorz Penis Sztuczny"
console.log(displayArray(["Bolon", "Spala", "Penis Grzegorz Sztuczny"], true)); // Ma zwrocic "Bolon, Spala i Grzegorz Penis Sztuczny"
