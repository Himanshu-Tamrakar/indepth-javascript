// 'use strict';

// console.log(calcAgeFuncDeclaration);
// const age = calcAgeFuncDeclaration();
// console.log('We are able to call function before declaring it: result', age);
// function calcAgeFuncDeclaration() {
//     console.log(arguments, this);
//     return 2037 - 1993;
// }


// console.log(calcAgeFuncExpression); // Can not access before initialize
// console.log(abx) // abx is undefined
// const age1 = calcAgeFuncExpression();
// console.log(age1);
// const calcAgeFuncExpression = function () {
//     return 2037 - 1993;
// }

// const age2 = calcAgeFuncExpression1();
// console.log(age2);
// const calcAgeFuncExpression1 = () => 2037 - 1993;

// const arrowFunc = (birthyear) => {
//     console.log(this);
// }
// arrowFunc();


// function declaring() {
//     const arrowFunc = (birthyear) => {
//         console.log(this);
//     }
//     arrowFunc();
// }
// declaring();

// function getValue() {
//     console.dir(document.querySelector('.week'));
//     console.dir(document.querySelector('#color'));
// }



/**
 * Funtions are block scope in strict mode
 */

// {
//     function stricModeFunc() {
//         console.log('Hey I am a function in side a block');
//     }
// }

// stricModeFunc();


/**
 * Destructuring Operator
 */

// const arr = [1, 2, 3];
// let [first, second] = arr;
// console.log(first, second);

// [first, second] = [second, first];
// console.log(first, second);

// const obj = {
//     firstName: 'Himanshu Tamrakar',
//     age: 30
// }

// const {firstName: uname, age: a, sex: s = 'MALE'} = obj;

// console.log(uname, a, s);


/**
 * Short Circuit Operator
 * This operator works with falsy and truthy value
 * solution is Nullish Coalition operator
 */

// const numberOfGuests = 0;

// const ans = numberOfGuests || 10;
// console.log(ans);

/**
 * Nullish Coaliation Operator
 */

// const numberOfGuests = 0;

// const ans = numberOfGuests ?? 10;
// console.log(ans);

/**
 * Default arguments
 */

// function defaultFunc(args1 = 10, args2 = args1) {
//     console.log(args1, args2);
// }

// defaultFunc(2);

/**
 * Number
 */
// console.log(+'20px');
// console.log(+'20');
// console.log(Number.parseInt('20px'));

// console.log(Number.isNaN(+'20x'));

/**
 * Intersection and observer api
 */

// const observeCallback = function () { }

// const observeOption = {};

// const observer = new IntersectionObserver(observeCallback, observeOption);
// observer.observe();


/**
 * Object Oriented Programmin using prototype
 */

// We can use a constructor function to create an object
// const Person = function (firstName, birthYear) {
//     console.table(this);
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//     console.table(this);
// }

// const himanshu = new Person('Himanshu', 1993);
// console.table(himanshu);

// const shubh = new Person('Shubh Tamrakar', 1999);
// console.log(shubh);

// // console.log(shubh.calcAge()); Reference Error
// // new operator

// /**
//  * 1. New empty object is created {}
//  * 2. Function is called and this keyward is this new empty object this = {}
//  * 3. {} is linked to prototype
//  * 4. object is retured.
//  *
//  */

// // prototypes
// Person.prototype.calcAge = function () {
//     return 2037 - this.birthYear;
// }


// const matila = new Person('Matila', 1993);
// console.log(matila);
// console.log(matila.calcAge()); // calcAge method added in the prototype

// console.log(matila.__proto__);
// console.log(matila.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(matila));

// // Prototype
// // Everyobject that is created through a constructor function have a prototype property 
// // that belongs to Constructor prototype

// console.log('Classess--------------------------------------------------------');
// /**
//  * Classes
//  */

// // const PersonCl = class {}

// class PersonCl {
//     constructor (firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//         this.calcAge = this.calcAge; // Create a copy of this method
//         this.calcAge();
//     }

//     calcAge() {
//         console.log(2037 - this.birthYear);
//     }

//     greet() {
//         console.log(`Hello ${this.firstName}`);
//     }

//     get age() {
//         return 2037 - this.birthYear;
//     }
// }

// const jessica = new PersonCl('Jessica', 1991);
// jessica.calcAge()
// delete jessica.calcAge;
// jessica.calcAge();
// // console.log(jessica);
// console.log(jessica.age);
// console.log(jessica);

// console.log('Delete');
// delete jessica.age; // Not deleted
// console.log(jessica);

// /**
//  * Getter and Setter
//  */

// const account = {
//     owner: 'Jonas',
//     movements: [200, 300, 100, 500, 232],

//     get latest() {
//         return this.movements.slice(-1).pop();
//     },

//     set latest(mov) {
//         this.movements.push(mov);
//     }

// }

// console.log(account.latest);
// account.latest = 300;
// console.log(account.latest);




// /**
//  * Object.create
//  * There is a concept of prototype but there is no prototype object linked in it
//  * No new operator
//  * It is usefull when we want to manually link data
//  */

// const Personproto = {
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     },

//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }

// }

// // console.log(Personproto);
// // can not do this
// // Personproto.prototype.greet = function () {
// //     console.log('Hello');
// // }

// const steven = Object.create(Personproto);
// console.log(steven);
// steven.init('')
// steven.firstName = 'Steven';
// steven.birthYear = 1999;
// console.log(steven);
// console.log(steven.__proto__ === Personproto);

// const sarah = Object.create(Personproto);
// sarah.init('Sarah', 1993);
// console.log(sarah);

// ===================================================

/**
 * Inheritance between constructor funtion
 */
// const Person = function (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// }

// Person.prototype.calcAge = function () {
//     return 2037 - this.birthYear;
// }

// const Student = function (firstName, birthYear, course) {
//     Person.call(this, firstName, birthYear);
//     this.course = course;
// }

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//     console.log(`My name is ${this.firstName}, and I study ${this.course}`);
// }



// Student.prototype.constructor = Student;



// const mike = new Student('Mike', 2020, 'Computer Science');


// console.log(mike.__proto__);
// console.log(mike.__proto__.constructor);
// console.log(mike.__proto__.__proto__);
// console.log(mike.__proto__.__proto__.constructor);


// console.log(mike);
// mike.introduce();
// mike.calcAge();



/**
 * Inheritance between Classes
 */

class PersonCl {
    constructor (fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2037 - this.birthYear);
    }

    // greet() {
    //     console.log(`Hello ${this.firstName}`);
    // }

    // get age() {
    //     return 2037 - this.birthYear;
    // }

    set fullName(fullName) {
        if (fullName.includes(' ')) this._fullName = fullName;
    }

    get fullName() {
        return this._fullName;
    }
}

class StudentCl extends PersonCl {
    constructor (fullName, birthYear, course) {
        super(fullName, birthYear);
        this.course = course;
    }

    greet() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }
}

const meesha = new StudentCl('Meesha Rawat', 1993, 'Computer Science');
console.log(meesha);
