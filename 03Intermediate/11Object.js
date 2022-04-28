var user = {
    fullName: 'Shahzad',
    phoneNumber: '0321455555',
    address: 'abc street',
    facebookSignedIn: true,
    role: 'admin',
    loginCount: 10,
    courseList: [],
    courseNumber: [],
    // we can also use method inside the object.
    buyCourse: function (courseName) {
        // we'll use this keyword here to access the object value inside the method
        this.courseList.push(courseName);
    },
    // buyCourse: (courseName) => {    
    //     this.courseList.push(courseName);
    // }, 
    getCourseCount: function () {
        return `${this.fullName} is enrolled in ${this.courseList.length} courses`;
    },
    info: function (courseNumber) {
       return  `${this.fullName} is enrolled in ${this.courseList.length} courses and he is loggedIn form ${this.facebookSignedIn}. His total loginCount is ${this.loginCount}.`
    }

};

console.log(user.fullName);
console.log(user.getCourseCount());
user.buyCourse("Angular 10");
console.log(user.getCourseCount());
console.log(user.getCourseCount());
console.log(user.info());