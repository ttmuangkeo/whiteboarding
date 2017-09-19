/*The Fibonacci sequence is a series of numbers where a number is found by adding up the two numbers before it.
Starting with 0 and 1, the sequence goes 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, and so forth.*/


/* Direction:

Step 1. 

*/

//this function will take one parameter. Whatever number that is, this will add the two previous number. You will use recursion.
//the input is the length of the sequence.
//the output is the result of the end sequence.
function fib(n) {
  var array = [1,1];
  for(var i = 2; i<n; i++) {
    var recursion = array[i-2] + array[i-1];
    array.push(recursion)
    console.log(recursion)
  }
  return recursion
}
//fibinocci(any number)
fibinocci(10)