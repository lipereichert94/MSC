// 2. Create a Student Constructor function:

// Properties: firstName:String, lastName:String, grades:Array

// methods:

// inputNewGrade(newGrade): push newGrade to grades

// computeAverage(): return average of the grades

// After you finish, create some students using the constructor function.

// Then draw prototypal inheritance diagram.
'use strict';

function Student(firstname = 'Default', lastname = 'Default') {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = 18;
    this.grades = [];
    this.printDetail = function () {
        console.log(`${this.firstname} ${this.lastname} ${this.age} ${this.grades}`);
    }
    this.addgrade = function (x) {
        this.grades.push(x);
    }
    this.computeaverage = function () {
        //let average = [];
        //average[this.firstname] = this.grades.reduce((avg, g, index, array) => { avg + g / array.lenght, 0 });
        //return average;
        var ex4 = [];

        ex4[this.firstname] = this.grades.reduce((accum, current, index, array) => accum + current / array.length, 0);

        console.log(ex4);
        let ret = [];
        ret[this.firstname] = {};
        this.grades.forEach(() => {
            ret = this.grades.reduce((accum, current, index, array) => accum + current / array.length, 0);
        })
        console.log(ret);
        console.log(this.grades.reduce((accum, current, index, array) => accum + current / array.length, 0));
        return ret;
    }
}

const john = new Student('John', 'Smith');
john.printDetail();
john.addgrade(8);
john.addgrade(8);
john.addgrade(8.8)
john.printDetail();
console.log("Compute average John " + john.computeaverage());