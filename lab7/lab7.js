// <!-- 1. using 5 ways to fix the errors which will print below in the console:



// Our Group: John

// Our Group: Pete

// Our Group: Alice

//   -->


//Solution 1
// let group = {

//     title: "Our Group",

//     students: ["John", "Pete", "Alice"],
//     showList: function () {
//         console.log(this)
//         this.students.forEach((student) => {
//             console.log(this.title + ": " + student);
//         });
//     }

// };

// group.showList();



// // //Solution 2
// let group = {

//     title: "Our Group",

//     students: ["John", "Pete", "Alice"],

//     sayHi() {
//         this.students.forEach(function (student){
//             console.log(this.title + " " + student);
//         }.bind(this));
//     }

// };

// group.sayHi();

// //Solution 3
// let group = {

//     title: "Our Group",

//     students: ["John", "Pete", "Alice"],

//     sayHi() {
//         const self = this;
//         this.students.forEach(function (student){
//             console.log(self.title + " " + student);
//         }.bind(this));
//     }

// };

// group.sayHi();

// // //Solution 4
// let group = {

//     title: "Our Group",

//     students: ["John", "Pete", "Alice"],

//     showList: function () {

//         this.students.forEach(function (student) {

//             console.log(group.title + ": " + student

//             );

//         });

//     }

// };

// group.showList();


// // // //Solution 5
// let group = {

//     title: "Our Group",

//     students: ["John", "Pete", "Alice"],

//     showList: function () {

//         this.students.forEach(function (student) {

//             console.log(group.title + ": " + student

//             );

//         },this);

//     }

// };

// group.showList();

// // //Solution 6
let group = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],

    showList: function () {

        this.students.forEach((stu) => function (student) {

            console.log(group.title + ": " + student

            );

        }.call(this, stu));

    }

};

group.showList();



// 2.  In the code below there’s a setTimeout call scheduled, then a heavy calculation is run, that takes more than 100ms to finish.

// When will the scheduled function run?

// After the loop. X -> CORRECT ANSWER
// Before the loop.
// In the beginning of the loop.
// What is console.log going to show?

// let i = 0;

// setTimeout(() => console.log('scheduled'+i), 100); // ?

// assume that the time to execute this function is >100ms

for (let j = 0; j < 100000000; j++) {
    if (j == 99999999) {
        console.log('heavy calculation')
    }
    //i++;

}
console.log('after loop');