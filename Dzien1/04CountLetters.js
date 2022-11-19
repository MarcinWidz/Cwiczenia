const str = "Jesteeem hardkorem!";
let counter = 0; // zawiera liczbe e

// poczatek kodu
let i = 0;
let len = str.length;
while (i <= len) {
  if (str[i] == "e") {
    counter++;
  }
  i++;
}
// koniec kodu

console.log(counter);

//Perfect
