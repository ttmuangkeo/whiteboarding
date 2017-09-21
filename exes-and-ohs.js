// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive. The string can contains any char.
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

/*
This function will take one parameter, str.
The logic behind this approach is to set a counter to = 0. I want to add to the counter
everytime my loop reads 'o'. To check to see if a string has the same amout of 'x', I want to
subtract from the counter everytime my loop reads 'x'. If the string has the same amount of 'x' and 'o'
then the count SHOULD be 0.
*/

/*
Direction:

Step 1: To implement the logic. We need a counter. Call it sum and set it = to 0.
Step 2: Run a for loop. This will run through the length of the user's input string.
Step 3: Since the case is insensitive, we can do less work by making everything lowercase.
		If the loop finds an 'o', make it lowercase and add 1 to the sum counter.
		Vice versa, if the loop finds an 'x', subtract from the sum counter. 
Step 4: We now return the sum counter as a boolean. Is it 0? true or false.

*/


function XO(str) {
	//Step 1
  var sum = 0;
  //Step 2
  for (var i = 0; i < str.length; i++) {
  	//Step 3
    if (str[i].toLowerCase() == "o") {
      sum++;
    } else if (str[i].toLowerCase() == "x") {
      sum--;
    }
  }
  //Step 4
  return sum == 0 ? true:false;
}