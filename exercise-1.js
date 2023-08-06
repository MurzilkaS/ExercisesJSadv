/* Exercise 1
   let user = {
     name: "John",
     years: 30
  }
  Write the destructuring assignment that reads:
name property into the variable name.
years property into the variable age.
isAdmin property into the variable isAdmin (false if absent)


   var { name, years}= user
   var name= "name";
   var age = "years";
   var isAdmin = "isAdmin";
   if( isAdmin == absent){
     return false;
  }

*/

//   // Exercise 2
/*Give the right name:

Create the variable with the name of our planet. How would you name such a variable?
Create the variable to store the name of the current visitor. 
How would you name that variable?*/

/*    let  ourPlanet;
      let currentVisitor ;   

*/
     // Exercise 3
    /* Look at the code. What will be result of the call at the last line and why?
     let phrase = "Hello"

      if (true) {
        let user = "John";
        function sayHi() {
          alert(`${phrase}, ${user}`)
        }
      }

      sayHi()
  
      /* Hello John 


    // Exercise 4
    Write the code, one line for each action:
Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.
  
/* const user = {} ;
    user.name = "John";
    user.surname = "Smith";
    user.name = "Pete";
    delete user.name;; */


    // // Exercise 5

    /* const user = {
         name: "John"
       }
      
    //   // does it work?  
      user.name = "Pete"
It doesnt work,because the variable is declared as a constant-unchanged. */

    // // Exercise 6

     /*let salaries = {
         Fred: 100,
         Ted: 160,
        Ghaith: 130
       }

     let sum =0 ;
       for(const i in salaries){
         sum+=salaries[i]
       }

     console.log(sum)
     */


        /* Exercise 7
        Rewrite this if using the ternary operator '?':
        if (a + b < 4) {
          result = 'Below';
        } else {
          result = 'Over';
        }

         /*let x= (a+b < 4) ? result = 'Below' : result = 'Over' ;*/
      

        // // Exercise 8
      //  Rewrite if..else using multiple ternary operators '?'.

        // let message;

        //     if (login == 'Employee') {
        //     message = 'Hello';
        //     } else if (login == 'Director') {
        //     message = 'Greetings';
        //     } else if (login == '') {
        //     message = 'No login';
        //     } else {
        //     message = '';
        //     }
/*
       let message = login == 'Employee'?'Hello'
       :login == 'Director'?'Greetings' 
       : login == '' ?'No login'
       : '';
*/
