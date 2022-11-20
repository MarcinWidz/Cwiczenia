function powerFunc(wykladnik, potęga) {
  let wynik = 1;
  if (potęga < 0) {
    console.log("potegą mniejsza od 0");
  } else
    for (let i = 1; i <= potęga; i++) {
      wynik *= wykladnik;
    }
  return wynik;
}
console.log(powerFunc(3, -2));
