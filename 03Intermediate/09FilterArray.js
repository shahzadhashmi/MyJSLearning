var testArray = [2,5,6,7,8,9,10,11,12]

// console.log(testArray.fill("shahzad", 2, 6));

/*console.log(number.sort((a,b) => (a-b)));// sort take compare function and mold original array.*/

var number = [78,85,87,55,21,22,23];
// console.log(number.filter((num) => ( num != 55)));


/*
Array methods:
map(): gives us a new array
filter(): gives us a new array

sort(): mold original array and return it.
fill(): mold original array and return it.

reduce(): does not change the original array.

slice(): returns selected array elements as a new array:
orange, kiwi

splice():
The splice() method adds and/or removes array elements.
The splice() method overwrites the original array.
*/


/* we'll use cake cutting example here, cake cuts into two
pieces.one from left and other from right.

slice():
@param: start, included value
@param: end, excluded value
@param: string[]
Array.slice() returns selected array elements as a new array:

Abbas, Tasha
*/
var users = ["shahzad", "Abbas","Tasha","akbar","jannie"];
console.log(users.slice(1,3));

/*
splice():
@param: start 
@param: deleteCount?, how many elements you want to delete
param: string[], which you want to add in these removed element places
*/ 
// users.splice(1, 1, "hi-ali");
// console.log(users);

