let counter;
let i = 12;

while (i >= 0) {
  if (i == 8) {
    console.log("Ignition sequence start!");
    i--;
  }
  if (i == 7) {
    i--;
  } else {
    console.log(i);
    i--;
  }
}
console.log("All engines running");
