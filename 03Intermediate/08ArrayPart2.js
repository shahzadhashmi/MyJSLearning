// Simple function

/*function isEven(element) {
    // if ( element%2===0 ) {
    //     return true
    // }
    // return false;
    return element%2===0;
}
// console.log(isEven(3));
*/

//function stored in variable

var isEven = function (element) {
    return element%2===0;
}
// console.log(isEven(12));


// Arrow functions, it's required return keyword
// without return it'll give us undefined

var isEven = (element) => {
    return element%2 ===0;
}
// console.log(isEven(10));


/* The arr.every() method checks whether all the elements of the array satisfy the given condition or not that is provided by a method passed to it as the argument. 

Syntax:  

 arr.every(callback(element[, index[, array]])[, thisArg])
*/

/*
Parameters: This method accepts five parameters as mentioned above and described below:

callback: This parameter holds the function to be called for each element of the array.
element: The parameter holds the value of the elements being processed currently.
index: This parameter is optional, it holds the index of the currentValue element in the array starting from 0.
array: This parameter is optional, it holds the complete array on which Array.every is called.
thisArg: This parameter is optional, it holds the context to be passed as this to be used while executing the callback function. If the context is passed, it will be used like this for each invocation of the callback function, otherwise undefined is used as default.

Return value: This method returns Boolean value true if all the elements of the array follow the condition implemented by the argument method. If one of the elements of the array does not satisfy the argument method, then this method returns false.
*/

// callbackfn
// these fn don't have name  and super helpful in different //situations

// var result = [2,4,6,8].every(isEven);
// console.log(result);


// Arrow fn are callbackfn with no name () => {} or () => ().
// if we write () => {} that means we've to return something
// () => () when we don't write return.

// var result = [2,4,9,8].every((e) => {
//     return e%2 ===0;
// });
var result = [2,4,6,8].every((e) => (e%2 ===0 ));
console.log(result);