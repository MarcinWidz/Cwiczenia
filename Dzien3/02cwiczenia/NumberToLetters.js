// Będziesz musiał napisać funkcję NumberToLetters(num), która pobierze jako argument liczbę z przedziału od 0 do 9999 włącznie i zwróci ją literami. Dla wszystkich nieprawidłowych parametrów funkcja zwróci "Nieprawidłowy Parametr".

function getCaseNumber(last_2) {
  switch (last_2) {
    case 0:
      last_2 = "zero";
      break;
    case 1:
      last_2 = "jeden";
      break;
    case 2:
      last_2 = "dwa";
      break;
    case 3:
      last_2 = "trzy";
      break;
    case 4:
      last_2 = "cztery";
      break;
    case 5:
      last_2 = "pięć";
      break;
    case 6:
      last_2 = "sześć";
      break;
    case 7:
      last_2 = "siedem";
      break;
    case 8:
      last_2 = "osiem";
      break;
    case 9:
      last_2 = "dziewięć";
      break;
    case 10:
      last_2 = "dziesięć";
      break;
    case 11:
      last_2 = "jedenaście";
      break;
    case 12:
      last_2 = "dwanaście";
      break;
    case 13:
      last_2 = "trzynaście";
      break;
    case 14:
      last_2 = "czternaście";
      break;
    case 15:
      last_2 = "piętnaście";
      break;
    case 16:
      last_2 = "szesnaście";
      break;
    case 17:
      last_2 = "siedemnaście";
      break;
    case 18:
      last_2 = "osiemnaście";
      break;
    case 19:
      last_2 = "dziewiętnaście";
      break;
    case 20:
      last_2 = "dwadzieścia";
      break;
    case 30:
      last_2 = "trzydzieści";
      break;
    case 40:
      last_2 = "czterdzieści";
      break;
    case 50:
      last_2 = "pięćdziesiąt";
      break;
    case 60:
      last_2 = "sześćdziesiąt";
      break;
    case 70:
      last_2 = "siedemdziesiąt";
      break;
    case 80:
      last_2 = "osiemdziesiąt";
      break;
    case 90:
      last_2 = "dziewięćdziesiąt";
      break;
    default:
      last_2 = "nope";
  }

  return last_2;
}

function NumberToLetters(num) {
  let minus = false;
  if (num < 0) {
    minus = true;
    num = -num;
  }
  let thousand = Math.floor(num / 1000);
  let hundred = Math.floor((num % 1000) / 100);
  let tens = Math.floor(((num % 1000) % 100) / 10);
  let last = num % 10;
  console.log(
    `thousand: ${thousand}\nhundred: ${hundred}\ntens: ${tens} / num: ${num}`
  );
  let minusString;
  if (minus == true) {
    minusString = "minus";
  } else {
    minusString = "";
  }
  let thousandString = getCaseNumber(thousand);
  if (thousand > 1 && thousand <= 4) {
    thousandString = `${thousandString} tysiące`;
  } else if (thousand > 4) {
    thousandString = `${thousandString} tysięcy`;
  } else {
    thousandString = ` tysiąc`;
  }

  let hundredString = getCaseNumber(hundred);
  if (hundred > 3 && hundred <= 4) {
    hundredString = `${hundredString}sta`;
  } else if (hundred > 4) {
    hundredString = `${hundredString}set`;
  } else if (hundred == 1) {
    hundredString = `sto`;
  } else if (hundred == 2) {
    hundredString = `dwieście`;
  }

  let tensString = getCaseNumber(tens * 10);

  let lastString = getCaseNumber(last);

  console.log(
    `${minusString} ${thousandString} ${hundredString} ${tensString} ${lastString}`
  );
}

console.log(NumberToLetters(-8758));
//NumberToLetters(1111);

// NumberToLetters(15) ma zwrocic "pietnascie"
// NumberToLetters(35) ma zwrocic "trzydziescipiec"

// Podpowiedz:

// Ile jest tysiecy w 5130 ?

// let num = 5130;
// console.log(Math.floor(num / 1000)); // 5

// Ile jest setek w 2330 ?
// let num = 2330;
// console.log(Math.floor((num % 1000) / 100)); // 3

//jak jestes hardkorem to dorzuc tez liczby negatywne i ulamki dziesietne
