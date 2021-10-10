'use strict';


// Group of words, numbers, operations that perform some task are statement.
// Statement is group of expression
// Expression that produces some value

// Coercion: Converting one type value to another called Coercion

// Loose comparision(==) make coercion that is why it is slow compare to tight comparision(===)
// "99.99" == 99.99 then he will first convert "99.99" to 99.99 then compare

// Javascript is dynamic typed language
// var a = 99;// becomes number because 99
// var a = "Himanshu" // becomes string because of 'Himanshu
// JS is typed value not typed variable:

// Scope:  99 page PDF => Scope, Scope of variable, Lexical Scope, Scoping


// Built In Types
// Number
// String 
// Boolean
// NULL & Undefined
// Object
// Symbol
// BigInt // ES2020

var fisrtName = 'Himanshu';
typeof fisrtName; // 'string'
fisrtName = null;
typeof fisrtName; // 'object' --wierd, bug
// typeof here is not asking of typeof fisrtName but it is asking the typeof value present in fisrtName


var a1 = undefined;
var b1;
a1 === b1 // true

var c1 = null;
a1 == c1 // true
b1 == c1 // true
a1 === c1 // false
b1 === c1 // false


// Arrays, Functions are sub type of an Object Type
// They more specialize type
var arr = ['a'];
typeof arr // object
function foo() { }
typeof foo; // function
foo.fisrtName = 'Tamrakar';
typeof foo.fisrtName // 'string'

// Coercion => Implecite and Explecite

// Falsy Values: false, null, undefined, "", 0, -0, NaN
// truthy: Rest


// == loose equality because it coerce value if need
// === strict equality because it does not coerce

// Array coerced by joining all the value with (,)
var a2 = [1, 2, 3];
var b2 = [1, 2, 3];
var c2 = "1,2,3";

a2 == b2 // false because comparing the reference
// console.log(a2 == b2);
// console.log(a2 === b2);
a2 == c2 // true because coercing of a2 create "1,2,3"
b2 == c2 // true

a2 === c2 // false


/** ------------- */

var a3 = 41;
var b3 = "42";
var c3 = "43";
a3 < b3; // true // because any value is not string then it is coerced to number so 41 < 42
b3 < c3 // true both are string helce comparing lexicographically

/** -------------- */

// If we are trying to access a variable that hasnot been decleared, you will end up creating a variable in the globale scope or 
// getting an error depending upon 'strict mode'


a4 = 19; // in 'use strict' it is an error otherwise it will create property in window


// 'strict mode tighten the rules for cetain behaviour these are to keep code much safer and less error prone
// 1. Disallowing auto global variable creation like above(a4)


// Closure is a way to remember and continue to access the function's scope(its variable, arguments) even once the function has finished 
// running, with closure function remember the variable of its birthplace



// In stric mode this will be undefined but in non strict mode this will be point to global window object
function foo() {
    console.log(this);
}
foo()


// pollyfill means producing a piece of code(newer feature) that is equivalent to the behaviour in older browser

// There is no way to pollyfill new syntax that has been added to the language. The new syntac will throuw an error in the
// old JS engine as unrecognized/invalid. So the option is use a tool that convert your newer code equivalent to older code

