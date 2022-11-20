const checkNums = (num1, num2) => {
  if (num1 > num2) {
    console.log("num2 jest mniejsze od num1");
  }
  if (num1 < num2) {
    console.log("num2 jest wieksze od num1");
  }
  if (num1 == num2) {
    console.log("num2 jest rowne num1");
  }
};
checkNums(10, 7);
