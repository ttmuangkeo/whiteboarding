// for (var i = 1; i <= 100; i++) {
//   if (i % 5 == 0 && i % 3 == 0) {
//     console.log("fizzbuzz");
//   } else if (i % 3 == 0) {
//     console.log("fizz");
//   } else if (i % 5 == 0) {
//     console.log("buzz");
//   } else {
//     console.log(i);
//   }
// }

// Don't use the string "fizzbuzz" anywhere in your code.

for (var i = 1; i <= 100; i++) {
  var result = "";
  
  if (i % 3 == 0) {
    result += "fizz";
  }
  
  if (i % 5 == 0) {
    result += "buzz";
  }
  
  if (result == "") {
    result = i;
  }
  
  console.log(result);
}









