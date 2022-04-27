var user = {
    fullName: 'Shahzad',
    phoneNumber: '0321455555',
    address: 'abc street',
    courseList: [],
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
};

console.log(user.fullName);
console.log(user.getCourseCount());
user.buyCourse("Angular 10");
console.log(user.getCourseCount());