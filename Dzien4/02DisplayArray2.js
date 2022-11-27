// Utwórz plik o nazwie display-array-v3.js.

// Utwórz funkcję displayArray(tab, opcja), która jako parametr otrzyma tablicę ciągów znaków i zwróci ją w postaci ciągu znaków. Drugi parametr włączy separator "i" przed ostatnim elementem, czyli.

function displayArray(tab, opcja) {
  let message;
  if (opcja === false) {
    message = tab.toString().replace(",", " ").replace(",", "");
  } else if (opcja === true) {
    message = `${tab[0]} ${tab[1]} i ${tab[2]}`;
  }
  return message;
}
console.log(displayArray(["Bolon", "Spala", "Penis Grzegorz Sztuczny"], false)); // Ma zwrocic "Bolon Spala Grzegorz Penis Sztuczny"
console.log(displayArray(["Bolon", "Spala", "Penis Grzegorz Sztuczny"], true)); // Ma zwrocic "Bolon, Spala i Grzegorz Penis Sztuczny"
