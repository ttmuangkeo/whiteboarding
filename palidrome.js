//Palidrome - a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.





/*direction:

Step 1. Take the user's input and split it. Split is a function. It will take a string and turn it into an array.
In this case, you will want each individual letter seperated. You are going to reverse this and check if it
matches the orgininal string.
2. splitString is now an array of individual letters. Reverse this.
3. You now want to join the array back into the string.
4. Now you have a string that has been reverse. If this string equals the original string, return true
if it's not true. Return false.
*/


//this function will check a string to see if it is a palidrome.
//this function will one parameter (str)
//str is whatever the user inputs 
function palidrome(str) {
//step 1.
var splitString = str.split('');
console.log('splitString: ', splitString);
//step 2.
var reverseString = splitString.reverse();
console.log('reverseString: ', reverseString);
//step 3.
var joinString = reverseString.join();
console.log('joinString: ', joinString);
//step 4.
if(joinString === str) {
	return true;
	} else {
	return false;
	}
}
palidrome('abc');
//ex. palidrome(racecar), palidrome(hannah), palidrome(phone)