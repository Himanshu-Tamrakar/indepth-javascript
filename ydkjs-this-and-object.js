"use strict";

// function baz() {
//     console.log('baz');
//     bar();
//     foo();
// }

// function bar() {
//     console.log('bar');
//     foo();
//     console.log('bar');
// }

// function foo() {
//     console.log('foo');
// }

// baz();

// This assignment
// Default -> in strict and normal mode
// Implicite
// Explicite
// new operator


// function foo(something) {
//     this.a = something;
// }

// var obj1 = {
//     foo
// }

// var obj2 = {};
// obj1.foo(2);
// console.log(obj1.a);


// function foo(something) {
//     this.a = something;
// }

// var obj1 = {};

// function bind(fn, obj) {
//     return function () {
//         fn.apply(obj, arguments);
//     }
// }


// var bar = foo.bind(obj1);
// bar(2);

// // var bar = bind(foo, obj1);
// // bar(2);

// console.log(obj1.a); //2
// debugger

// var baz = new bar(3);
// console.log(baz.a);//3
// console.log(obj1.a);//2


// Indirection

// function foo() {
//     console.log(this.a);
// }

// var a = 2;
// var o = {a: 3, foo: foo};

// var p = {a: 5};

// (p.foo = o.foo)();



// Object Property Descriptor
// var myObject = {
//     a: 3
// }

// var desc = Object.getOwnPropertyDescriptor(myObject, "a");
// console.log(desc);

/**
 * 
 */
// var myObject1 = {};

// Object.defineProperty(myObject1, "a", {
//     value: 2,
//     writable: true,
//     configurable: true,
//     enumerable: true
// })
// console.log(myObject1);
// myObject1.a = 10;
// console.log(myObject1);


/**
 * 
 */
// var myObject2 = {
// }


// Object.defineProperty(myObject2, "a", {
//     value: 2,
//     writable: false,
//     configurable: false,
//     enumerable: true
// })

// // delete myObject2.a; // Gives error because writable and configurable false

// console.log(myObject2);

/**
 * preventExtension
 */

// var myObject3 = {
//     a: 10
// }

// Object.preventExtensions(myObject3);
// // myObject3.b = 10;
// console.log(); myObject3



// var proto = {
//     firstName: 'Himanshu'
// }

// var obj1 = Object.create(proto);

// console.log(obj1.firstName);
// console.log(obj1);

// obj1.firstName = 'Monty';

// console.log(obj1);
// console.log(obj1.firstName);


// obj1.firstName = 'TT';

// console.log(obj1.firstName);
// console.log(obj1.__proto__);



// var proto = {
//     foo: 'bar'
// }

// Object.defineProperty(proto, "foo", {
//     writable: false
// })

// console.log(proto);

// var obj1 = Object.create(proto);

// console.log(obj1.foo);

// obj1.foo = 'Himanshu'; // Error

// console.log(obj1);




// var proto = {
//     foo: 'bar'
// }

// Object.defineProperty(proto, "foo", {
//     writable: false
// })

// console.log(proto);

// var obj1 = Object.create(proto);

// console.log(obj1.foo);

// Object.defineProperty(obj1, "foo", {
//     writable: true,
//     value: 10
// })

// console.log(obj1);



// Implicite Shadowing

// var anotherObject = {
//     a: 2
// }

// var myObject = Object.create(anotherObject);


// console.log(anotherObject.a);
// console.log(myObject.a);

// console.log(anotherObject.hasOwnProperty('a'));
// console.log(myObject.hasOwnProperty('a'));


// myObject.a++; //implicite shadowing
// console.log(anotherObject);
// console.log(myObject);



/**
 * Constructor does not mean `constructed by`
 * that a very big misconception
 * the words contructor and prototype here has loose default meaning od what it is
 */

// function Foo() { }

// Foo.prototype = {}

// var a1 = new Foo();

// console.log(a1.constructor === Foo);
// console.log(a1.constructor === Object);


/**
 * Prototypical Inheritance
 */

// function Foo(name) {
//     this.name = name;
// }

// Foo.prototype.myName = function () {
//     return this.name;
// }


// function Bar(name, label) {
//     Foo.call(this, name);
//     this.label = label;
// }

// Bar.prototype = Foo.prototype; // Completely wrong prototype chaining

// Bar.prototype.myAge = function (year) {
//     return 2037 - year;
// }

// var a = new Bar('Himanshu', 'Web Developer');
// console.log(a);
// console.log(a.myName());
// console.log(a.myAge(2021));


// console.log(a.__proto__.constructor === Foo);
// console.log(a.__proto__.constructor === Bar);

//----------------

// function Foo(name) {
//     this.name = name;
// }

// Foo.prototype.myName = function () {
//     return this.name;
// }


// function Bar(name, label) {
//     Foo.call(this, name);
//     this.label = label;
// }

// Bar.prototype = Object.create(Foo.prototype);

// // Object.defineProperty(Bar, 'constructor')

// Bar.prototype.myAge = function (year) {
//     return 2037 - year;
// }

// var a = new Bar('Himanshu', 'Engineer');
// console.log(a);


// console.log(a.__proto__.constructor === Bar);
// console.log(a.__proto__.constructor === Foo);

// Bar.prototype.constructor = Bar;

// console.log(a.__proto__.constructor === Bar);
// console.log(a.__proto__.constructor === Foo);


// console.log(Foo.prototype.constructor === Foo);

/**
 * 
 * Wrong
 * 
 * 
 */


// function Foo(name) {
//     this.name = name;
// }

// Foo.prototype.myName = function () {
//     return this.name;
// }


// function Bar(name, label) {
//     Foo.call(this, name);
//     this.label = label;
// }

// Bar.prototype = Object.create(Foo.prototype);

// console.dir(Bar);
// console.dir(Foo);



// function Foo1(name) {
//     this.name = name;
// }

// Foo.prototype.myName1 = function () {
//     return this.name;
// }


// function Bar1(name, label) {
//     Foo1.call(this, name);
//     this.label = label;
// }

// Bar1.prototype = new Foo1('Himanshu') // Name is part of Bar1 prototype now.. Thats why it s wrong

// console.dir(Bar1);
// console.dir(Foo1);


// console.dir(Object);


/**
 * Widgets
 * OO design pattern: Event delegation
 */

// function Widget(width, height) {
//     this.width = width;
//     this.height = height;
//     this.$elem = null;
// }

// Widget.prototype.render = function (where) {
//     if (this.$elem) {
//         this.$elem.css({
//             width: this.width,
//             height: this.height
//         }).appendTo(where);
//     }
// }



// function Button(width, height, label) {
//     Widget.call(this, width, height);
//     this.label = label;
//     this.$elem = $("<button>").text(this.label);
// }

// Button.prototype = Object.create(Widget.prototype);
// Button.prototype.render = function(where) {}
// Button.prototype.onClick = function(evt) {}
// console.dir(Widget);




/**
 * class
 */


// class C {
//     constructor () {
//         this.num = Math.random();
//     }

//     rand() {
//         console.log(`Random ${Math.random()}`);
//     }
// }

// var c1 = new C();
// console.log(c1);
// c1.rand();

// C.prototype.rand = function () {
//     console.log(`Hey hey hey`);
// }
// c1.rand();


class C {
    constructor (id) {
        this.id = id;
    }

    id() {
        console.log(`Hey there`);
    }
}


var c1 = new C('c1');
c1.id(); // Problem we are trying to shadowing property with the prototype funsion
c1.__proto__.id();

