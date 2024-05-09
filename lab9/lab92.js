class Student {
    constructor(studentid) {
        this.studentid = studentid;
        this.answers = [];
    }
    addAnswer = function (Question) {
        this.answers.push(Question);
    }
}

class Question {
    constructor(id, answer) {
        this.id = id;
        this.answer = answer;
    }
    checkAnswer = function (answer) {
        return this.answer === answer;
    }

}

class Quiz {
    constructor(Question, Student) {
        this.questions = Question;
        this.students = Student;
    }
    scoreStudentBySid = function (idStudent) {
        let stu = this.students.find((x) => x.studentid === idStudent);
        //let ret = stu.answers.filter((x) => this.questions.find(o => o.id === x.id && o.answer === x.answer)).length;
        let ret2 = stu.answers.filter((x) => this.questions.find(o => o.id === x.id).checkAnswer(x.answer)).length;
        //console.log(idStudent);
        //console.log(stu.answers);
        return ret2;
    }
    getAverageScore() {
        
        return this.students.reduce((accum,current,index,array) => accum + (this.scoreStudentBySid(current.studentid))/array.length,0);

        //way 2
        //let ret = this.students.reduce((accum, current, index, array) => accum + (this.scoreStudentBySid(current.studentid)), 0);
        //return ret/this.students.length;
    }
}

const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
const students = [student1, student2];
const questions = [new Question(1, 'b'), new Question(2, 'a'), new
    Question(3, 'b')];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5