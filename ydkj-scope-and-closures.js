'use strict';
// Not worked
// function another() {
//     {
//         let firstName = 'Himanshu';
//         {
//             var firstName = 'Tamrakar';
//             console.log(firstName);
//         }
//     }
// }

// another();

// function another() {
//     let firstName = 'Himanshu';
//     {
//         function another1() {
//             var firstName = 'Tamrakar';
//             console.log(firstName);
//         }
//         another1();
//     }
// }

// another();


// Worked
// function another() {
//     var firstName = 'Tamrakar';
//     {
//         {
//             let firstName = 'Himanshu';
//             console.log(firstName);
//         }
//     }
// }

// another();


/**---------------------------------------------------------------------------------------------------------------- */

// Scope answer which variable are accesible by any given statement, and how does it handle two variable with the same name.
// Compiler and Interpreter

// Scope is primarly determine during compilation.

// Compilation in three basic steps 
// 1. Tokenizing/Lexing
// Breaking of string of charectors in to meaningful chunks called DOMSettableTokenList. 
// var a = 2; =? var, a, =, 2, ;

// 2. Parsing
// taking stream (array) of tokens and turning it into a tree of nested elements, whick collectively represent grammatical structure of programm.
// This is called AST (Abstract Sysntac Tree) tree.

// 3. Code Generation
// Taking AST and turning it into executable code. This part varies greatly depending on the language, platform it targetting, and other factor

// In jS Engine is more complex than these three steps. There are step of optimization for performance of execution at parsing and code generation phase. 


// Parsing and Compilation first then execution. 
// You can justify these step Sysntex Error, Early Error, and Hoising

// Systex Error
// var greeting = 'Hello';
// console.log(greeting);
// greeting = ."HI" // Error

// Early Error
// console.log('Howdy');
// greeting('Hi', 'Himanshu');
// function greeting(something, something) { // Error 
//     'use strict';
//     console.log(something);
// }

//Hoisting
// function saySomething() {
//     var greeting = 'Hello';
//     {
//         greeting = 'Himanshu'; // greeting is in TDZ
//         let greeting = 'HI';
//         console.log(greeting);
//     }
// }
// saySomething();


// So scope is determine at the compile time and should not generally affected by runtime conditions.So 
// Howevenr in non stric mode there are technicallly still two ways to cheat this CSSPageRule,modifying the program scope during runtime
// Run in not strict mode
// 1. eval(..)
// function badIdea() {
//     // console.log(opps); //Error
//     eval("var opps = 'Ugh!';");
//     console.log(opps);
// }
// badIdea();

// 2. with
// var badIdea = {opps: 'Ugh!'}
// with (badIdea) {
//     console.log(opps);
// }
// Global scope not modified but at rum time badIdea become a scope and opps as well


// Now there is two reason we should use strict mode 
// 1. Global variable creation in the case of not use let const or var fr variable declaration
// 2. It allow two way to change scope at runtime via eval and 'with'
// 3. It changes behaviour for FIB function declaration inside blocks see line 404 chapter 6

// Lexical Scope:
// We have understand scope is determine at the compile time; the term for this kind of scope is lexical scope. 
// Lexical Scope is the scope of a varialbe is completly determine by the placement of a function, blocks, and variable declaration 

// Variable is JS resolves lexically means It look for the variable in current scope if not found then it look into its outer scope 


// Chapter2
// Colored Marble and Bucket for scope recognition theory
// JS engine contains a Compiler that do the dirty work and Scope Manager That take care of scope things, both are friends of JS Engine:)


// Chapter3
// Shadowing the variable
// It is possible to access a global variable from the scope where that ariable has been shadowd but not through a typica; lexical identifiers reference

// let one = 'HImashu';
// const two = 'Tamrakar';
// var studentName = 'Suzy';
// function printStudent(studentName) {
//     console.log(studentName); // from printStudent Scope
//     console.log(window.studentName); // from Global scope 
//     console.log(window.one); // Undefined // Not present in Global scope only variable that declera with var and function present in global scope
//     console.log(window.two); //undefined
// }    
// console.log(window.printStudent);
// printStudent('Frank');
// console.log(window.one); // undefined
// console.log(window.two); // undefined


// let can shadow var 
// function shadow(params) {
//     var one = 'ONE';
//     {
//         let one = 'TWO';
//         console.log(one);
//     }
// }
// shadow()

// var can not shadow let
// function shadow(params) {
//     let one = 'ONE';
//     {
//         console.log(one);
//         var one = 'TWO'; // Not fine; trying to crossing over the let one
//     }
// }

// function shadow(params) {
//     let one = 'ONE';
//     ajax('', function callback(params) {
//         var one = 'Totaly fine'; // Totally fine: because here it is not crossing over the let one
//     })
// }

// shadow()

// var a = 10; var a = 20; console.log(a); // works: not crossing
// let a = 10; let a = 20; console.log(a); // not works: wierd


// Function Declaration, Function Expression, Arrow Function

// Hoisted, got studentName indentifier
// function studentName(params) {

// }

// Hoisted as it is var, It is anonymous function expression, stud1 points to anonymous function, does not get a function indentifier 
// it means 
// var stud1 = function (params) {}

// const obj = {
//     studentName: function (params) {
//         studentName // referenc error
//         this.studentName // accessible
//     },

//     studentName1: function askMe(params) {
//         console.log(askMe); //accessible
//     }
// }
// obj.studentName1();

// Chaper4
// Global Scope is, 
// 1. ES module works import export
// 2. UMD module wraps around all the code in single Scope 
// 3. we do not wrap but all the top level creates in global scope

// JS exposes its build in libs in Global scope 
// primitives
// natives
// global functions like eval, parseInt
// Math, JSON, Atomics, 
// Intl, WebAssembly

// Environment hosting the Js engine exposes its own build ins 
// console
// DOM 
// timers 
// web Platform api navigator, history, geolocation, webRTC etc

// const theGlobalScopeObject =
//     (typeof globalThis != 'undefined') ? globalThis : //
//         (typeof global != 'undefined') ? global :     // 
//             (typeof window != 'undefined') ? window : // For browser
//                 (typeof self != 'undefined') ? self : // web workser
//                     (new Function("return this"))();  //

// console.log(theGlobalScopeObject);


// Chapter 5

// Hoisting: Variable being avaialbe to use from the begening of its enclosing scope, even though
// its declaration appears further down in a scope

// function declaration hoisting auto initialize with its actual value and that is why function declaration 
// are available before its declaration
// greeting();
// function greeting(params) {
//     console.log('Hi there');
// }

// function hoisting and var-flavared variable hoisting attach their name iidentifier to the nearest enclosing
// function scope(or if Non the global scope), not a block scope
// let and const still hoist(but unavailable to use due to TDZ). But there two declaration forms attach t  their closing
// block not function as var and function declation

// Hoisting: Declaration vs Expression
// greeting() // worked
// function greeting(){}

// greeting() // ReferenceError but: undefined is not function
// var greeting = function greeting() {}

// Variable Hoising:
// RULE: Function declaration are hoisted first then variables
// repeating var declation no-op(eration)
// but below is sysntex error
// let studentName = 'Himanshu';
// console.log(studentName);
// let studentName = 'Tamrakar';

// Systex error means fault in a program that stop executing the program
// Type error means fault that arise during program execution


// Interesting

// Here keepgoing and value are at outer scope so not redeclaration
// var keepgoing = true;
// while (keepgoing) {
//     var value = Math.random();
//     if (value > 0.5) {
//         keepgoing = false;
//     }
// }
// console.log(value);

// and 

// for (let i = 0; i < 10; i++) {
//     let value = i * 10;
//     console.log(`${i}: ${value}`);
// }
// It is like

// let $$i;
// for (; $$i < 10; $$i++) {
//     let i = $$i;

//     value = i * 10;;
//     console.log(`${i}: ${value}`);
// }
// This is just a conseptual model 


// Temporal Dead Zone
// let const and var all have TDZ

// var has almost unobserble TDZ because at the time of hoist it auto initilized with undefined
// let is also hoist but it is not available untill initilize happens as let does not auto initilize with undefined so 
// it gives reference error ot TDZ error.

// studentName = 'Himanshu'; // Reference error
// console.log(studentName);
// let studentName;

// askQuestion();
// let studentName = 'HImanshu';
// function askQuestion(params) {
//     console.log(studentName); // Reference error: Its hoisted
// }

// Its like

// function askQuestion(params) {
//     console.log(studentName); // Reference error: Its hoisted
// }
// askQuestion();
// let studentName = 'Himanshu';


// let and const do hoist 
// var studentName = 'Himanshu';
// {
//     console.log(studentName); // Reference Error
//     let studentName =  'Monty';
//     console.log(studentName);
// }


// Chapter 6
// var factorial = (function hideTheCache() {
//     var cache = {};
//     return factorial;

//     function factorial(x) {
//         if (x < 2) return 1;

//         if (!(x in cache)) {
//             cache[x] = x * factorial(x - 1);
//         }

//         return cache[x];
//     }
// })()

// console.log(factorial(10));

// Book said If code need to wrap a scope has return, this, break, or continue in it, an IIFE is probebly not the best approach. In that case 
// you might look to create the scope with a block instead of a function

// Not all the curly bracket creates a scope, It become a new scope if it contains block scope declaration like let and const.

// Object literals are now scope 
// class {}'s are not block or scope
//{..} on switch statement around the set of case clause does not block or scope
// function getNextMonthStart(dateStr) {
//     var nextMonth, year;
//     {
//         // let val = dateStr.match(/(\d{4})-(\d{2})-(\d{2})/);
//         // console.dir(val);

//         let curMonth;
//         [, year, curMonth] = dateStr.match(/(\d{4})-(\d{2})-(\d{2})/) || [];
//         nextMonth = (Number(curMonth) % 12) + 1;
//     }

//     if (nextMonth == 1) year++;

//     return ` ${year}-${String(nextMonth).padStart(2, "0")}-01`;
// }

// console.log(getNextMonthStart("2019-12-25"))


// function sortNameByLength(names) {
//     var buckets = [];

//     for (const name of names) {
//         if (buckets[name.length] == null) {
//             buckets[name.length] = [];
//         }


//         buckets[name.length].push(name);
//     }
//     {
//         let sortedNames = [];
//         for (const bucket of buckets) {
//             if (bucket) {
//                 bucket.sort();
//                 sortedNames = [...sortedNames, ...bucket]
//             }
//         }

//         return sortedNames;
//     }
// }
// console.log(sortNameByLength(['Sally', 'Aman', 'Harbu', 'Shetty', 'Anshul', 'Anup', 'Paranda']));


// Function Declaration in Block:
// First of all We shoud try to avoid the function declaration in block reason::
// Run on non strict mode
// if (false) {
//     function ask() {
//         console.log("Does this run?");
//     }
// }
// ask();

// JS specification says that function declaration inside ogf blocks are blocked scope, so the answer should be Reference Error, However
// most browser based JS engine (including v8 that is for chrome and node)will treate this as TypeError function identifier is outside of
// if block but it is yet undefined as if block does not runs...
// So clearly this is based on environment and js engine
// and that is why we should avoid function declaration inside blocks


// if (true) {
//     function ask() {
//         console.log('Am I called?');
//     }
// }

// if (true) {
//     function ask() {
//         console.log('Or What about me?');
//     }
// }

// for (let i = 0; i < 5; i++) {
//     function aks() {
//         console.log('Or is it one of these?');
//     }

// }

// ask();

// function ask() {
//     console.log("Wait, maybe, it's this one?");
// }

// One more time we should use strict mode


// Chapter 7
// Closure: Function remember the variables of outer scope or in its birth place even though function has been finished.
// Even though closure is loxical scope but it is runtime charecteristics
// Closure is live link not a snapshot
// Closure is on variavle never on value


// function manageBtnEvents(btn) {
//     var clickHandlers = [];

//     return function listener(cb) {
//         if (cb) {
//             let clickHandeler = function onClick(evt) {
//                 console.log('clicked!');
//                 cb(evt);
//             }

//             btn.addEventListener('click', clickHandeler);

//             clickHandlers.push(clickHandeler);

//         } else {
//             for (const handler of clickHandlers) {
//                 btn.removeEventListener('click', handler);
//             }
//             clickHandlers = [];
//         }
//     }

// }

// var btn = document.querySelector('.closure');

// var onSubmit = manageBtnEvents(btn);
// onSubmit(function checkout(evt) {
//     console.log(evt, evt.target.classList);
// })
// onSubmit(function trackAction(evt) {
//     console.log(evt);
// })


// onSubmit();


// Closure bind scope nto variable.. eval gotcha
// function getStudentInfo(id, name, grade) {

//     return function getInfo(whichValue) {
//         var val = eval(whichValue);
//         return val;
//     }

// }

// var info = getStudentInfo(12, 'Aman', 87);
// console.log(info('name'));
// console.log(info('grade'));
// console.log(info('id'));


// Function are first class value so you can pass function as an argumart to another function and closure 
// assosiates a link that connect function to scope/variable out side of itself, no matter where the function goes.


// Closure improve efficiency by allowing a function instance to remember proviously determined value
// and Closure can improve code readability

// Chapter 8
// 
// IIFE is singleton pattern 
// Factory Pattern can provide us a multiple instances

// Normal Module using IFFE or Function that return public api and rest are bind with public api through closure: This is called classic module format
// Node CommanJS module
// CommanJS module are file based  

// module.export = {
//     // ...
// }
// instead use 
// Object.assign(module.export, {
//     // ... 
// })

// Use it like
// var varName = require('path to module file');


// Modern ES Module ESM 
// ESM file by default assumed as strict mode as compare to CommonJs Module
// Rest as CommanJs module has singleton, file based, private bydefault, and export syntax.
//  but export here should be top level of the scope 

// if export is default then import can be without {}
// import {Student as stud} ... 
// import * as Everything from '...'

// Classic Module pattern applicable in both Browser and Node 
// CommonJs module pattern appicable in Node
// ESM pattern applicable in Browser/Node

// Appendix 1

// Function's parameter also create scope
// Not in the case of notmal parameter
// but Non simple parameter lke defualt value, like that

// function studentName(studentId) {} // wont create scope
// function studentName(studentId = 0) {} // Create scope for parameter as well

// function studentName(studentId = maxId, maxId) { // error
//     console.log('called');
// }
// studentName();

// function whatsTheDealHear(id, defaultId = () => id) {
//     id = 5;
//     console.log(id, defaultId());
// }
// whatsTheDealHear(3);

// function whatsTheDealHear(id, defaultId = () => id) {
//     var id = 5;
//     console.log(id, defaultId());
// }
// whatsTheDealHear(3);

// Function Name Scape:
// var askQuestion = function ofTheTeacher() {
//     let ofTheTeacher = 'Confused Yet!';
//     var val = Math.random();

//     if (val < 0.5) {
//         // ofTheTeacher(); // Error
//         askQuestion();
//     }
//     console.log(val);
// }

// console.log(askQuestion.name);
// // console.log(ofTheTeacher); // Error ofTheTeacher has scope inside function
// askQuestion()


// Arrow Function:
// Does not contains its this uses lexical this means nearest enclosing function's this or global this 
// always anonymous


// IFFE Variation:
// !function thisIsAnIIFE() {
//     console.log('Hey ther I am IIFE!');
// }();
// +function thisIsAnIIFE() {
//     console.log('Hey ther I am IIFE!');
// }();
// ~function thisIsAnIIFE() {
//     console.log('Hey ther I am IIFE!');
// }();
// void function thisIsAnIIFE() {
//     console.log('Hey ther I am IIFE!');
// }();


// Hoisting Function and Varialbes:
// Function declaration hoist to it function scope and initialize with actual function value 
// First Function declaration hoist then var variable

// Var also hoist like function declaration but it initilizes with undefined value 

// function declaration hoisting is nice help maintain better code 
// variable hoisting is not good choice

// let and const also hoist but then do not get initialize automatically but untill then they get initilize it went to TDZ


// Callback : inversion of control, part of program that execute later by other stakeholder
