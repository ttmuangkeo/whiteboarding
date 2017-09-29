function longestCommonPrefixOfTwoWords(word1, word2) {
  var longestPrefix = "";
  
  var smallerLength = Math.min(word1.length, word2.length);
  
  for (var i = 0; i < smallerLength; i++) {
    if (word1[i] == word2[i]) {
      longestPrefix += word1[i];
    } else {
      break;
    }
  }
  
  return longestPrefix;
}

function longestCommonPrefixOfThreeWords(word1, word2, word3) {
  var longestPrefix = word1;
  
  longestPrefix = longestCommonPrefixOfTwoWords(longestPrefix, word2);
  longestPrefix = longestCommonPrefixOfTwoWords(longestPrefix, word3);
  
  return longestPrefix;
}

function longestCommonPrefixOfManyWords(words) {
  var longestPrefix = words[0];
  
  for (var i = 1; i < words.length; i++) {
    longestPrefix = longestCommonPrefixOfTwoWords(longestPrefix, words[i]);
  }
  
  return longestPrefix;
}

// test 

function testLongestCommonPrefixOfTwoWords(word1, word2) {
  console.log(`longestCommonPrefixOfTwoWords("${word1}", "${word2}") = "${longestCommonPrefixOfTwoWords(word1, word2)}"`);
}

function testLongestCommonPrefixOfThreeWords(word1, word2, word3) {
  console.log(`longestCommonPrefixOfThreeWords("${word1}", "${word2}", "${word3}") = "${longestCommonPrefixOfThreeWords(word1, word2, word3)}"`);
}

function testLongestCommonPrefixOfManyWords(words) {
  var wordsArrayString = `["${words.join('", "')}"]`;
  console.log(`longestCommonPrefixOfManyWords(${wordsArrayString}) = "${longestCommonPrefixOfManyWords(words)}"`);
}

testLongestCommonPrefixOfTwoWords("nothing", "common");
testLongestCommonPrefixOfTwoWords("bad", "ban");

testLongestCommonPrefixOfThreeWords("nothing", "common", "still");
testLongestCommonPrefixOfThreeWords("geek", "geeky", "get");

testLongestCommonPrefixOfManyWords(["geeks", "geeky", "geezer", "geese", "get"]);






