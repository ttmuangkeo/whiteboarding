/*The Fibonacci sequence is a series of numbers where a number is found by adding up the two numbers before it.
Starting with 0 and 1, the sequence goes 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, and so forth.*/

/*
the function fibinocci(n) will be the length of the sequence.


--1+1-- 2
--1+2-- 3
--2+3-- 5

*/

/* Direction:

Step 1. Declaring a variable to store data in (this is going to be an array). I will loop through this data
		After looping through this data I will create a new variable that recursed and push that into my data array
Step 2. I run a for loop. I start the loop at 2 because my data variable is 2 length on. That's where my starting 
		point will be. My condition will be less than 'n'. This is how long the sequence is.
Step 3. Declare my variable to push to my data array. This is the recursion. This will add the previous two numbers
		together in the array (i-2, i-1). 

		[1,		1,]
		 ^		^
		 |		|
		 n-2 +	n-1

			--RESULTS = 2--
		[1,		1,		2]
				 ^		^
				 |		|
				 n-2 +	n-1


				 	--RESULTS = 3--

				[1,		1,		2,		3]
								 ^		^
								 |		|
								 n-2 +	n-1
								 --RESULTS = 5--
Step 4. In order to keep the sequence going. Push your recursion to your data array.
*/

//this function will take one parameter. Whatever number that is, this will add the two previous number. You will use recursion.
//the input is the length of the sequence.
//the output is the result of the end sequence.
function fib(n) {
	//Step 1
  var data = [1,1];
  //Step 2
  for(var i = 2; i<n; i++) {
    console.log('length of array = ', data)
    //Step 3
    var recursion = data[i-2] + data[i-1];
    console.log('----------')
    //Step 4
    data.push(recursion);
    console.log('results (the previous two results added) = ', data[i])
    console.log('----------')
  }
}
//fibinocci(any number)
fib(10)

/*
fib sequence that is 15 length long.

fib(15)
[ 1, 1, 2 ] '====' 2
[ 1, 1, 2, 3 ] '====' 3
[ 1, 1, 2, 3, 5 ] '====' 5
[ 1, 1, 2, 3, 5, 8 ] '====' 8
[ 1, 1, 2, 3, 5, 8, 13 ] '====' 13
[ 1, 1, 2, 3, 5, 8, 13, 21 ] '====' 21
[ 1, 1, 2, 3, 5, 8, 13, 21, 34 ] '====' 34
[ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ] '====' 55
[ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ] '====' 89
[ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ] '====' 144
[ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 ] '====' 233
[ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377 ] '====' 377
[ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610 ] '====' 610
*/