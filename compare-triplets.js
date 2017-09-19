/*
Compare the Triplets
Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100
for three categories: problem clarity, originality, and difficulty.

We define the rating for Alice's challenge to be the triplet A (a0, a1, a2), and the rating for Bob's challenge to be the triplet B (b0, b1. b2).

Your task is to find their comparison points by comparing a0 with b0, a1 with b1, and a2 with b2.

If a(i) > b(i), then Alice is awarded  point.
If a(i) < b(i), then Bob is awarded  point.
If a(i) = b(i), then neither person receives a point.
Comparison points is the total points a person earned.

Given A and B, can you compare the two challenges and print their respective comparison points?
*/

/*
Directions:

Step 1. Declare your variables. Since the end goal is to compare the two (A, B) I want to assign them into an array.
        I want a third variable for the counter. This will be an array. I will add to the 0 index for alice and add to the 1
        index for bob.
Step 2. Run a for loop to loop through alice's score. Now you have alice's score. Compare it with bob's score.
        If alice[i] is larger than bob[i] add to the counter[0]
Step 3. Else, if Bob has a higher score. Add to counter[1]
Step 4. Return your counter.
*/


function solve(a0, a1, a2, b0, b1, b2){
    //Step 1
    var alice = [a0, a1, a2];
    var bob = [b0, b1, b2];
    var aliceBob = [0, 0];
    //Step 2
    for(var i = 0; i<alice.length; i++) {
        if(alice[i] > bob[i]) {
            aliceBob[0] += 1;
    //Step 3
        } else if(bob[i] > alice[i]) {
            aliceBob[1] += 1;
        }
    }
    //Step 4
    return aliceBob
}