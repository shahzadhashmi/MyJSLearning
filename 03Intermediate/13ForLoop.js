// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

var myCities = [
    "Isb",
    "rwp",
    "balochistan",
    "karachi",
    1947,
    "muzaffarabad",
    true
];

//for (let i = 0; i < myCities.length; i++) {
    // console.log(myCities);
    /* Output : print out array of cities again and again
    ['Isb', 'rwp', 'balochistan', 'karachi', 1947, 'muzaffarabad']
    ['Isb', 'rwp', 'balochistan', 'karachi', 1947, 'muzaffarabad']
    ['Isb', 'rwp', 'balochistan', 'karachi', 1947, 'muzaffarabad']
    ['Isb', 'rwp', 'balochistan', 'karachi', 1947, 'muzaffarabad']
    ['Isb', 'rwp', 'balochistan', 'karachi', 1947, 'muzaffarabad']
    ['Isb', 'rwp', 'balochistan', 'karachi', 1947, 'muzaffarabad']
    */

    // console.log(myCities[1]);
    /*
    output: print rwp till loop ends
    rwp
    rwp
    rwp
    rwp
    rwp
    rwp
    */
    //    console.log(myCities[i]);
    /* 
    output: loop through an array and print each element from array
     Isb
     rwp
     balochistan 
     karachi     
     1947        
     muzaffarabad
    */

    /*Now print only "string" values */
    
    // if (typeof myCities[i] !== "string") {
        //     console.log(myCities[i]);
        // }
        /*
        output: print only those value that are not strings
        1947
        true
        */
       
       /*Now print only "string" values */
       
    //    if (typeof myCities[i] === "string") {
    //        console.log(myCities[i]);
    //     }
        /*
        output: print only those value that are strings
        Isb
        rwp
        balochistan
        karachi
        muzaffarabad
        */


//}

for (let i = 0; i <= myCities.length; i++) {
    console.log(myCities[i]);
} 

/* 
output: notice one thing about this logic we have undefined here that is because we are adding "=" i <= myCities.length; in r condition. so don't use = here.
Isb
rwp
balochistan 
karachi     
1947        
muzaffarabad
true
undefined
*/