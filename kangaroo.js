/*
Kangaroo
There are two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity). 
The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump. The second kangaroo starts at location x2
and moves at a rate of v2 meters per jump. Given the starting locations and movement rates for each kangaroo, can you determine
if they'll ever land at the same location at the same time?

*/

/*
This is a speed/velocity question in disguise. You are finding the difference between one point (kangaroo 1) and a second point (kangaroo 2)
The equation of velocity is ---- V = change in distance/time

In english, you are finding the difference of position and dividing it by difference of speed.

Fortunately we can have a function do all of that for us.
*/

/*
Direction:
Step 1: Find the different between your kangaroo's position. We want to use modulo for this because we want the find the remainder and check
		for true or false (boolean). The difference between the X's and V's. Divide and return the remainder. Store this in a variable
x1 = 1
v1 = 2
x2 = 3
v2 = 4


x1 - x2 = (1 - 3) = -2

v2 - v1 = (2 - 4) = 2

% of the two looks like is ====  0


Step 2: This is essentially the velocity equation. The difference of kangroos' position is not negative AND the second kangaroo is move faster than
		the first kangaroo. OR The difference of kangroos' position is negative AND the first kangaroo is faster than the second.
x1 = 1
v1 = 2
x2 = 3
v2 = 4

(x1-x2) === (1-3) = -2

-2 '>' 0 '--and--' 4 '>' 2

		-----or-----

-2 '<' 0 '--and--' 2 '>' 4

Step 3: This is a fastest most cleanest way of writing a conditional statment. 
		variablename = (condition) ? value1:value2
		var voteable = (age < 18) ? "Too young":"Old enough";


*/


function kangaroo(x1,v1,x2,v2) {
	//Step 1
  	var remainder = (x1 - x2) % (v2 - v1) == 0;
  	console.log('x1 - x2 ==== ', x1 - x2)
  	console.log('v2 - v1 ==== ', v2 - v1)
  	console.log('% of the two looks like is ==== ', (x1 - x2) % (v2 - v1))
  	console.log(typeof remainder)
  	console.log('----------')
  	//Step 2
	var properVelocity = ((x1-x2 > 0) && v2 > v1) || ((x1-x2 < 0) && v1 > v2);
	console.log(x1 - x2, '>', 0, '--and--', v2, '>', v1)
	console.log('------or-------')
	console.log(x1-x2, '<', 0,'--and--', v1, '>', v2)
	//Step 3
	return  remainder && properVelocity ? 'YES': 'NO';
}