const email = "bolon@bolonello.com";
let valid = false;

// poczatek kodu
let i = 0;
let len = email.length;
while (i <= len) {
  if (email[i] == "@") {
    valid = true;
  }
  i++;
}

// koniec kodu

console.log(valid);
