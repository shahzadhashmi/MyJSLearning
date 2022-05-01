var myCities = [
    "Isb",
    "rwp",
    "balochistan",
    "karachi",
    1947,
    "muzaffarabad",
    true
];

/*
We don't need to write myCities[i] to loop through and iterate because forEach does it by own. we just need to pass callbackfn.

Definition and Usage
The forEach() method calls a function for each element in an array.

The forEach() method is not executed for empty elements.

Syntax
array.forEach(function(currentValue, index, arr), thisValue)

Parameters:
function():	Required.
A function to run for each array element.

currentValue:	Required.
The value of the current element.

index:	Optional.
The index of the current element.

arr:	Optional.
The array of the current element.

thisValue:	Optional. Default undefined.
A value passed to the function as its this value.

 */
myCities.forEach((cities) => (console.log(cities)));

