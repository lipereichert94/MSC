//1.Create a function using function declaration named sum with one parameter of Array type, the
//returned result is the sum of all elements which are greater than 20.

function sum(...ar) {
    summarized = 0;
    for (i = 0; i < ar.length; i++) {
        summarized += ar[i];
    }
    return summarized;
}
var x = [1, 2, 3, 4];

console.log("Ex1");
console.log(sum.apply(null, x));

// 2. Create a function using function expression named getNewArray with one parameter of String
// Array, return a new array which contains all string, length is greater than and equal to 5, and
// contains letter ‘a’.

function getNewArray(...sa) {
    // return sa.map(a => a.length > 5).includes('a');
    return sa.filter(a => a.length > 5).filter(a => a.includes('a'));
}
var y = ['a', 'b', 'cccccccca']
console.log("Ex2");
console.log(getNewArray.apply(null, y));


// 3. Implement an arrow function with feature below:

// concat('hi', [1,2,3], ['Hello','world']) -> return result: ['h', 'i', 1,2,3, 'Hello','world']

var z = []

function arrowfunction() {
    var a = 'hi';
    var b = [1, 2, 3];
    var c = ['Hello', 'world'];
    //concat('hi', [1,2,3], ['Hello','world']) -> return result: ['h', 'i', 1,2,3, 'Hello','world'];
    return [...a].concat(b.concat(c));
}
console.log("Ex3");
console.log(arrowfunction.apply(null,));

//  4.  For the given students array below, compute the average grade of all students who took cs303 course which returns an object which key is students' names, values is the average.

// Example of result:

// {

//  Quincy: 93.5,

//  Sam: 86.5,

//  Katie: 71.5

// }

var test = function (grade) {

    return [grade];
};

console.log("Ex4");
console.log(test('a', 'b'));



const students = [

    { name: 'Quincy', grades: [99, 88], courses: ['cs301', 'cs303'] },

    { name: 'Jason', grades: [29, 38], courses: ['cs201', 'cs203'] },

    { name: 'Alexis', grades: [79, 78], courses: ['cs105', 'cs211'] },

    { name: 'Sam', grades: [91, 82], courses: ['cs445', 'cs303'] },

    { name: 'Katie', grades: [66, 77], courses: ['cs303', 'cs477'] }

];
//const ob = students.filter(c => c.courses.includes('cs303'));
//const grade = ob.map(a => a.grades);
//console.log(ob);
//console.log(grade.map(a => a = a.reduce((accum, current, index, array) => accum + current / array.length, 0)));
//console.log(students.map(({name,grades})=>(name,grades.reduce((accum,current,index,array)=>(accum+current/array.length,0)))));

//a => a = a.reduce((accum, current, index, array) => accum + current / array.length, 0)));
//  console.log(students.filter(c=>c.courses.includes('cs303'))(c=>c.grades.reduce((accum,current,index,array)=>(accum+current/array.length,0))));

//console.log(students);
//console.log(students.filter(c => c.courses.includes('cs303')).map(a => a = a.grades.reduce((accum, current, index, array) => accum + current / array.length, 0)));

//console.log(students.filter(c => c.courses.includes('cs303')).map(({ name, grades }) => ({ name, grades })));

//console.log(students.filter(c => c.courses.includes('cs303')).map(({name,grades}) => 
const oldArray = [16, 9, 4, 1];

//const newArray = students.map(({ name, grades }) => ({ name, grades }))
//console.log(newArray);
console.log("Ex5");
console.log(students.filter(x => x.courses.includes('cs303')).map(x => {
    let xyz = {};
    xyz[x.name] = x.grades.reduce((accum, current, index, array) => accum + current / array.length, 0)
    return xyz;
}));

