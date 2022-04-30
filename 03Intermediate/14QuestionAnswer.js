/*
Guess the Output
 */

function check(arr) {
    return arr.every((val) => val === arr[0]);
}

/* The arr.every() method checks whether all the elements of the array satisfy the given condition or not that is provided by a method passed to it as the argument. 

Return: Boolean

Syntax:  

 arr.every(callback(element[, index[, array]])[, thisArg])
*/
/*
console.log(check([1,2,3,4,5])); //expected output: false
console.log(check([4,4,4])); //expected output: true
*/

/*
Question #2 
*/

let arr = [1,3,"5",7,9,"11"];
/*
Apply accepts two arguments, (this) and (arguments) which are required by the function in the form of an array.

let value1 = Math.max.apply(null, arr); -> in this case arr is the argument passed to max it returns the maximum value present in the array, 
so value1 will be = 11

let value2 = Math.max.apply(arr, null); -> in this case null is the argument passed to max it returns the -infinity, 
so value2 will be = -Infinity

 */
let value1 = Math.max.apply(null, arr); // Expected Output: 11
let value2 = Math.max.apply(arr, null); // Expected Output: -Infinity

// console.log(value1, value2);

/*Question # 3 */

let user = { userName: "John Wick"};
var anotherUser = user;
user = null;

//console.log(anotherUser); // Expected Output: "{userName: 'John wick' }"


/*Question #4  */

userId = 10;

const newUser = {

    userId: 81,
    getUserId: function ()  {
       return this.userId;
    }

};

const id1= newUser.getUserId;
const id2= newUser.getUserId.bind(newUser);

// console.log(newUser.getUserId(), id1(), id2()); // Expected Output: 81 10 81


const numbers = [35,2,4,11,7];
numbers.sort(); // Expected Output: 35 -> because we are not providing compare function, so it will produce incorrect results
console.log(numbers[2]);
var sortedNumber = numbers.sort((a,b) =>{ return  a-b});
console.log(sortedNumber[2]); // Expected Output: 7 now it'll compare two value and return correct result.