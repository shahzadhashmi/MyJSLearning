const names= ["youtube", "facebook","instagram", "twitter"];

/*
For of: is fairly used for array.
 */

// for( const n of names) {
//     console.log(n);
// }

/*
For in: is fairly used for objects.
 */

const alpha = {
    yt: 'youtube',
    fb: 'facebook',
    tw: 'twitter',
    ig: 'instagram',
};

for(const a in alpha) {
    console.log(a, alpha[a]);
    // console.log(`Key is: ${a} and value is: ${alpha[a]}`);
}