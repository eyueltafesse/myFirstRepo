
/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }
  
  /* max returns the maximum of 2 arguments */
  function max(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    };
  }
  console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
  
  /* maxOfThree takes 3 numbers as arguments and returns the largest */
  function maxOfThree(a, b, c) {
    return max(max(a, b), c);
  
  }
  
  console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
  console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
  
  console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));
  
  
  function isVowel(char) {
    if (char.length == 1) {
      var vowels = new Array("a", "e", "i", "o", "u");
      var isVowel = false;
  
      for (e in vowels) {
        if (vowels[e] == char) {
          isVowel = true;
        }
      }
  
      return isVowel;
    }
  }
  console.log("Expected output of isVowel(e) is TRUE  " + myFunctionTest(true, isVowel("e")));
  console.log("Expected output of isVowel(b) is FALSE  " + myFunctionTest(false, isVowel("b")));
  
  function sum(array){
      sum=0;
      for(let i=0; i<array.length; i++){
      sum=sum+array[i];
      }
      return sum;
  }
  console.log("Expected output of sum([1,2,3,4,5]) is 15  " + myFunctionTest(15, sum([1,2,3,4,5])));
  
  function multiply(array){
      mul=1;
      for(let i=0; i<array.length; i++){
      mul=mul * array[i];
      }
      return mul;
  }
  
  console.log("Expected output of multiply([1,2,3,4,5]) is 120  " + myFunctionTest(120, multiply([1,2,3,4,5])));
  
  
  function reverse(str){
    let reversed = "";    
    for (let i = str.length - 1; i >= 0; i--){        
      reversed += str[i];
    }    
    return reversed;
  }
  
  console.log("Expected output of reverse(Good Boy) is Good Boy  " + myFunctionTest("yoB dooG", reverse("Good Boy")));
  
  
  function findLongestWord(string) {
      var str = string.split(" ");
      let longest = 0;
      let word = null;
      for (let i = 0; i < str.length; i++) {
          if (longest < str[i].length) {
              longest = str[i].length;
              word = str[i];
          }
      }
      return word.length;
  }
  
  console.log("Expected output of findLongestWord(Hello World) is 4 " + myFunctionTest(4, findLongestWord("Hello World")));
  
  function filterLongWords(array, sizelimit){
     var str = array.split(" ");
     let word = "";
     for (let i = 0; i < str.length; i++) {
         if(str[i].length>sizelimit){
            word=word+str[i]+" ";
        }
     }
     return word;
  }
  
  console.log("Expected output of filterLongWords(Eyuel New World)  " + myFunctionTest("Eyuel World ", filterLongWords("Eyuel New World",3)));
  