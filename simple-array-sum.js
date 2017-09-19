/*
Simple Array Sum
Given an array of n integers, can you find the sum of its elements?
*/

//if n = 3, then the array's length must be 3. 
//if n = 6, then the array's length must be 6.

/*
Directions
Step 1. Declare a variable and set it = to 0. This will give you the ability to add to 0 later down the road.
		For me this is used as a counter.
Step 2. Start with a conditional statement (if) to check for any validations. In this case I check to see if the user
		gave me the correct inputs. If the use did not give me a input I return false.
Step 3. Else, I run a for loop. This will loop through the user's input array. Once I run the loop, I want to add
		the integers to my counter in Step 1. I do this by having "sum" = to sum + numbers in the loop.
		ex. if the array is [1,2,3] the loop looks like:

		sum(0) = 0 + 1
		--loops to next i--
		sum(1) = 1 + 2
		--loops to next i--
		sum(3) = 3 + 3

Step 4. Sum should now equal, well the sum of the total array. Simply return sum.
*/


function simpleArraySum(n, ar) {
    var sum = 0
    if(n != ar.length) {
        return false
    } else {
        for(var i = 0; i<ar.length; i++) {
            sum = sum += ar[i]
        }
        return sum
    }
}