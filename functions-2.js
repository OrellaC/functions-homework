/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

maxOfTwoNumbers = (firstNum, secondNum) => {
  if(firstNum > secondNum){
  return firstNum;
} else{
  return secondNum;
}
};

console.log(maxOfTwoNumbers(6,100));

/*
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/
maxOfThree = (firstNum, secondNum, thirdNum) => {
    
    if(firstNum > secondNum && firstNum > thirdNum){
      return firstNum;
    } else if (secondNum > firstNum && secondNum > thirdNum){
      return secondNum;
    } else { 
      return thirdNum;
    }
  };
  console.log(maxOfThree(24,10,400));

/*
3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/
isCharacterAVowel = (character) => {
      
  if(character === "a" || character === "A"){
    return true;
  }
   else if(character === "e" || character === "E"){
   return true;
  } 
   else if(character === "i" || character === "I"){
   return true;
  }
  else if(character === "o" || character === "O"){
  return true;
  }
  else if(character === "u" || character === "U"){
  return true;
  }else{
      return false;
    }
  };

  console.log(isCharacterAVowel('o'))
      
/*
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

sumArray = (arr) => {
  let finalNum = 0;
  for(let i=0; i < arr.length; i++){
    finalNum += arr[i];
  }
  return finalNum;
};
console.log(sumArray[1,2,3,4])

multiplyArray = (mArr) =>{
  let finalNum = 1;
  for(let i=0; i < mArr.length; i++){
    finalNum *= mArr[i];
  }
  return finalNum;
};
console.log(multiplyArray([1,2,3,4]))
  
/*
5.Write a function that returns the number of arguments passed to the function when called.
*/
myArguments = (x,y) =>{
  return (myArguments.length)
}
console.log(myArguments([100,,60,80,1,4,12]))


/*
6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/


reverseString= (string) =>{
  let input = " ";
  for (let i = string.length - 1; i >= 0; i--){
    input += string[i];
  } 
  return input 
};

console.log(reverseString("desserts"));

/*
7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/
findLongestWord = (arr) => {
  let longest = arr[0]
  for (let i =0; i< arr.length; i++){
    if(longest.length < arr[i].length){
      longest = arr[i];
    }
  }
  return longest.length
 }
  console.log(findLongestWord(['small', 'medium', 'large']))




/*
8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
*/
let filterLongWords = (arr, num) => {
  let words = []
  for (let i=0; i < arr.length; i++){
    if(arr[i].length > num){
      words.push(arr[i]);
    }
  }
  return words
}
console.log(filterLongWords(["small", "medium", "large"], 5))


