
// prerequisites: number is between 1 and 3999
// returns string representing the number in Roman Numerals notation (10 -> X, 3 -> III, 9 -> IX)
function numberToRomanNumerals(number) {
  // return numberToRomanNumeralsAttempt1(number);
  // return numberToRomanNumeralsAttempt2(number);
  // return numberToRomanNumeralsAttempt3(number);
  return numberToRomanNumeralsAttempt4(number);
}

// just print I's ...
function numberToRomanNumeralsAttempt1(number) {
  var roman = "";
  
  while (number > 0) {
    roman += "I";
    number--;
  }
  
  return roman;
}

// just print I, V, X, L, C, D, M (ignore 4 = IV, 9 = IX)
function numberToRomanNumeralsAttempt2(number) {
  var roman = "";
  
  while (number > 0) {
    if (number >= 1000) {
      number -= 1000;
      roman += "M";
    } else if (number >= 500) {
      number -= 500;
      roman += "D";
    } else if (number >= 100) {
      number -= 100;
      roman += "C";
    } else if (number >= 50) {
      number -= 50;
      roman += "L";
    } else if (number >= 10) {
      number -= 10;
      roman += "X";
    } else if (number >= 5) {
      number -= 5;
      roman += "V";
    } else if (number >= 1) {
      number -= 1;
      roman += "I";
    }
  }
  
  return roman;
}

// full solution
function numberToRomanNumeralsAttempt3(number) {
  var roman = "";
  
  while (number > 0) {
    if (number >= 1000) {
      number -= 1000;
      roman += "M";
    } else if (number >= 900) {
      number -= 900;
      roman += "CM";
    } else if (number >= 500) {
      number -= 500;
      roman += "D";
    } else if (number >= 400) {
      number -= 400;
      roman += "CD";
    } else if (number >= 100) {
      number -= 100;
      roman += "C";
    } else if (number >= 90) {
      number -= 90;
      roman += "XC";
    } else if (number >= 50) {
      number -= 50;
      roman += "L";
    } else if (number >= 40) {
      number -= 40;
      roman += "XL";
    } else if (number >= 10) {
      number -= 10;
      roman += "X";
    } else if (number >= 9) {
      number -= 9;
      roman += "IX";
    } else if (number >= 5) {
      number -= 5;
      roman += "V";
    } else if (number >= 4) {
      number -= 4;
      roman += "IV";
    } else if (number >= 1) {
      number -= 1;
      roman += "I";
    }
  }
  
  return roman;
}

// better full solution
function numberToRomanNumeralsAttempt4(number) {
  var roman = "";
  
  var rules = [
   {symbol: 'M', value: 1000},
   {symbol: 'CM', value: 900},
   {symbol: 'D', value: 500},
   {symbol: 'CD', value: 400},
   {symbol: 'C', value: 100},
   {symbol: 'XC', value: 90},
   {symbol: 'L', value: 50},
   {symbol: 'XL', value: 40},
   {symbol: 'X', value: 10},
   {symbol: 'IX', value: 9},
   {symbol: 'V', value: 5},
   {symbol: 'IV', value: 4},
   {symbol: 'I', value: 1}
  ];
  
  for (var i = 0; i < rules.length; i++) {
    var rule = rules[i];
    
    while (number >= rule.value) {
      roman += rule.symbol;
      number -= rule.value;
    }
  }
  
  return roman;
}

function testNumberToRomanNumerals(number) {
  console.log(`numberToRomanNumerals(${number}) = "${numberToRomanNumerals(number)}"`);
}

// your tests

// testNumberToRomanNumerals(959);

testNumberToRomanNumerals(1); // expect I
testNumberToRomanNumerals(5); // expect V
testNumberToRomanNumerals(10); // expect X
testNumberToRomanNumerals(7); // expect VII
testNumberToRomanNumerals(4); // expect IV
testNumberToRomanNumerals(9); // expect IX
testNumberToRomanNumerals(1000); // expect M
testNumberToRomanNumerals(900); // expect CM
testNumberToRomanNumerals(199999); // expect CM
// testNumberToRomanNumerals(186576160); // expect MCLX
// "Donuts :)"

