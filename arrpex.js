

//Exercise 1

let array = [5, 3, 8, 1]

let filterRange = (arr,a,b) => {
    let newarr = [];
    for(let x of array){
        if ((x >= a && x<= b) || (x <= a && x>= b)){
            newarr.push(x);
        }
    }
    return newarr
}

console.log(filterRange(arr,1,4));

//Exercise 2

let userArr = [ { name: "John", age: 25 }, { name: "Pete", age: 30 } ,  { name: "Mary", age: 28 }];
let Names = userArr.map(user => user.name)
console.log(Names); 

//Exercise 3

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];
  function getAverageAge(users) {
    return users.reduce((preview, user) => preview + user.age, 0) / users.length;
  }
  
  console.log( getAverageAge(arr) ); 


