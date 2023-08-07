// Exercise 1
/*The following function returns true if the parameter age is greater than 18.
Otherwise, it asks for a confirmation and returns its result.
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Do you have your parents permission to access this page?');
  }
}
Rewrite it, to perform the same, but without if...else, and using arrow function.*/

// let checkAge = age => age > 18 ? true : confirm('Do you have your parents permission to access this page?')

// console.log(checkAge(10));

// Exercise 2

// const pow = (x,n) => {
//     let result = 1
//     if(n<2){
//         return `You should enter higher number 1`
//     } 
//     for(let i=0; i<n ; i++){
//         result *= x ;
//     }
//     return result
// }

// console.log(pow(100,2));

// Exercise 3

// const ask = (question, yes, no) => (confirm(question)) ? yes() : no ()
// ask(
//     "Do you agree?",
//     function() { alert("You agreed.") },
//     function() { alert("You canceled the execution.") }
//   )

// Exercise 4

/*Exercise 2
Write a function pow(x,n) that returns x in power n. 
Or, in other words, multiplies x by itself n times and returns the result.
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1

P.S. In this task the function should support only natural values of n: integers up from 1.*/

/*function pow(x,n){
if (x>0 && n>=1){
console.log(x ** n);
} else{
  console.log(`Enter higher number`)
   } 
    }

pow(2,3);
*/
/*Exercise 3
Replace Function Expressions with arrow functions in the code:
    function ask(question, yes, no) {
      if (confirm(question)) yes()
      else no()
    }

    ask(
      "Do you agree?",
      function() { alert("You agreed.") },
      function() { alert("You canceled the execution.") }
    )
    */
////////////////
     /*const ask=(question, yes, no)=>(confirm(question))? yes():no()
      ask(
      "Do you agree?",
      function() { alert("You agreed.") },
      function() { alert("You canceled the execution.") }
    )*/

    /*Exercise 4
Create an object calculator with three methods:

read() prompts for two values and saves them as object properties.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.*/

/*let calculator = {
  // ... your code ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );*/
/*
let calculator = {
  num1 : 0 ,
  num2 : 0,
  read(){
      this.num1 = Number(prompt("First number"));
      this.num2 = Number(prompt("Second number"));
  },
  sum(){
      return this.num1+ this.num2
  },
  mul(){
      return this.num1 * this.num2
  }
}
calculator.read()
alert(calculator.sum())
alert(calculator.mul())
*/
/*Exercise 5
Write a function min(a,b) which returns the least of two numbers a and b. 
Use arrow function along with the question mark operator ?

let min = (a,b)=> a<b ? a:b
*/
