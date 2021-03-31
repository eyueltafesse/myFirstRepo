
// const age = 35;
// const name  = 'John';
// console.log(age);
// let score;
// score = 10;
// console.log(score);
// console.log(20);
// const rating = 4.5;
// const x = null;
// let z;
// console.log(typeof rating);
// console.log('My Name is:  '+ name + '  and i am: ' +age);
// console.log('My Name is ${name} and i am ${age}');
// const s = 'Hello World';
// console.log(s.length);
// //Arrays 
// const number = new Array(4,2,3,4,5,6);
// console.log(number);
// console.log(number.length);
// console.log(number[0]);

// const fruits =['apple'  ,'Pom'  , 'oranges'];
// console.log(fruits.indexOf('oranges'));
// console.log(fruits);

//Object litterals
// const person = {
//     firstname:'jon',
//     lastName: 'Henry',
//     age: 30,
//     hobbies:['music' , 'movies' , 'sports'],
//     Address:{
//         street:'50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// }
// console.log(person.firstname.per);

function sum(numbers){
  var total = 0;
  for(let i = 0 ; i<numbers.length ; i++){
       total += numbers[i];
      
  }
  return total;

}
console.log(sum([2,3,4,5]));

function multipe(numbers){
     var total = 1;
    for(let i = 0 ; i<numbers.length ; i++){
        total= (total *numbers[i]);
        
    }
    return total;
}
console.log(multipe([2,3]));
function isVowel(str){
    if(str == 'a'|| str=='e' || str=='i'||
    str=='o'|| str=='u'){
    return "is vowel"
}
    else{
        return "is consonent"
    }

}
console.log(isVowel('z'));


function maxOfThree(num1 , num2 ,num3){

    var max  = Math.max(num1,num2,num3);
    return max;

    } 

 console.log(maxOfThree(90,40,100))
function minOfThree(num1 , num2 , num3){
    var min = Math.min(num1,num2,num3);
    return min;
}
console.log(minOfThree(20,40,15));

function max(num1 , num2){
   if(num1>num2){
       return num1;
   }else{
       return num2;
   }
}
console.log(max(70,60));

function findLongestWord(str){
    var str = str.split(" ")
    var longestword  = 0;
    var word=" ";
   
  for(let i=0 ; i<=str.length ; i++){
      if(longestword<str[i].length){
          longestword=str[i].length;
           word = str[i];
          
      }
      return word;
  }
}
console.log(findLongestWord("apple","orange" ,"bananana"))


function reversestr(str){
    var split = str.split("");
    var reverArray = split.reverse();
    var join = reverArray.join("");
    return join;
}
console.log(reversestr("Hello"));
function reversee(str){
    let revstr = [];
    for(let i = str.length-1 ;i>=0 ; i--){
        revstr.push(str.charAt(i));
    }
    return revstr.join("");
}
console.log(reversee("MANUca"));