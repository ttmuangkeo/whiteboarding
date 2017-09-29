
// prerequisites: array1, array 2 are sorted arrays (smallest to largest)
// returns merged sorted array, with all values from array1 and array2
function mergeSortedArrays(array1, array2) {
  var result = [];
  
  var i = 0;
  var j = 0;
  
  // i and j point to the next lowest elements in array1, array2
  // for each iteration of this while loop,
  // select the smaller of the two, and push to result
  // also increment that array's counter (i or j)
  
  while (i < array1.length && j < array2.length) {
    var lowestFromArray1 = array1[i];
    var lowestFromArray2 = array2[j];
    
    if (lowestFromArray1 < lowestFromArray2) {
      result.push(lowestFromArray1);
      i++;
    } else {
      result.push(lowestFromArray2);
      j++;
    }
  }
  
  // we may "expire" one of the arrays before we finish the other
  // in that case, we just need to push the rest of the remaining array
  // into our result
  
  // Consider: only one of these while loops will run. Why?
  
  while (i < array1.length) {
    result.push(array1[i]);
    i++;
  }
  
  while (j < array2.length) {
    result.push(array2[j]);
    j++;
  }
  
  return result;
}

function arrayToString(array) {
  return `[${array.join(', ')}]`;
}

function testMergeSortedArrays(array1, array2) {
  console.log(`mergeSortedArrays(${arrayToString(array1)}, ${arrayToString(array2)}) = ${arrayToString(mergeSortedArrays(array1, array2))}`);
}

// your tests

testMergeSortedArrays([], []); // expect []
testMergeSortedArrays([1], []); // expect [1]
testMergeSortedArrays([], [1]); // expect [1]
testMergeSortedArrays([1, 5, 7], [2, 5, 100, 452]); // expect [1]
testMergeSortedArrays([1, 5, 7, 15, 20], [2, 5, 100]); // expect [1]
