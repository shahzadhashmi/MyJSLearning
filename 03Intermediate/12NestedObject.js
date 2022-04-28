// nested Objects
const student = {
    name: 'alice',
    age: 36,
    marks: {
        science: 70,
        math: 75
    }
}

//accessing property of student object
console.log(student.marks);

// accessing property  of marks object
console.log(student.marks.science);