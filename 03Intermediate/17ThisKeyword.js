/* This: For All Regular function call, this points to window object.

=> Regular Function call sayHello()

=> Function call through object -> user.getCourseCount().
*/

/*
In this case this keyword gives us empty object {} in nodeJs and in browser console it'll give us a window object
[object Window]
 */
console.log(this);

const user = {
    firstName: 'John',
    courseCount: 4,
    getCourseCount: function() {
        console.log("Sorry you are not a regular function");
        console.log("LINE 18: ", this);

        function sayHello() {
            console.log("Hello Regular Function");
            console.log("LINE 21: ", this);
        }
        sayHello(); // regular function call
    },
};
user.getCourseCount(); // not a regular function call
/*
Output: get entire object as a reference back, which is 100% true
LINE 18 {
  firstName: 'John',
  courseCount: 4,
  getCourseCount: [Function: getCourseCount]
}
 */
