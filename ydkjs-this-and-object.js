"use strict";
// Motivation
// function identyfy() {
//     return this.name.toUpperCase();
// }

// function speak() {
//     var greeting = `Hello, I am ${identyfy.call(this)}`;
//     console.log(greeting);
// }

// var me = {
//     name: 'Kyle'
// }

// var you = {
//     name: 'Reader'
// }

// speak.call(me);
// speak.call(you);

// This can be done like this also
// Passing vai object directly but, pass objects as parameter is actually messier; we will see later

// function identyfy(context) {
//     return context.name.toUpperCase();
// }

// function speak(context) {
//     var greeting = `Hello, I am ${identyfy(context)}`;
//     console.log(greeting);
// }

// var me = {
//     name: 'Kyle'
// }

// var you = {
//     name: 'Reader'
// }

// speak(me);


// Two misconception about this in JS 
// 1. this is not itself like other programming language
// function foo(num) {
//     console.log("foo: ", num);
//     this.count++; // Error because this here is not to itself(foo);
//     // foo.count++   // will work
// }

// foo.count = 0;

// var i;
// for (i = 0; i < 10; i++) {
//     if (i > 5) {
//         foo(i);
//         // foo.call(foo, i) // This will work
//     }
// }
// console.log(foo.count); // no strict mode it will be 0 only


// 2. This is not its scope 
// function foo() {
//     var a = 2;
//     this.bar(foo); // strict mode bar is not accessible and in non strict mode this.a is not accessible
// }

// function bar() {
//     console.log(this.a);
// }
// foo();

// Scope is not based on how or where function is called; Scope is happening in compile time, so position of a function decide scoping


// What is this: 

// This is not compile time binding it is run time binding It is contextual based on the condition of the function's invocation.
// It is not where the function decleared but it is how the function called


// This is neither a reference to  the function itself nor is it a reference to the the function's lexical scope.
// this is actually binding that made when a function is invoked and what it references is determined entirely by the call-site where the function is called 

// Chapter 2:
// call site means the location where a function is called 


// Binding Rules:
// 1. Default Binding 
// function foo() {
//     console.log(this.a);
// }
// var a = 2;
// foo();

// In' non stric' mode in function declaration this point to global object heer global object will be window. 
// In strict mode this will be undefined

// function foo() {
//     console.log(this.a);
// }
// var a = 2;

// void function () {
//     "use strict";
//     foo(); // Still point to global object
// }();


// 2. Implicite Binding 
// function foo() {
//     console.log(this.a);
// }
// var obj = {
//     a: 2,
//     foo: foo
// };
// obj.foo();
// Who ever calling the function, this will point to that. In this case obj is calling foo so this inside foo is obj

// Only top level reference chain matter
// function foo() {
//     console.log(this.a);
// }
// var obj2 = {
//     a: 2,
//     foo: foo
// }

// var obj1 = {
//     a: 3,
//     obj2: obj2
// }

// obj1.obj2.foo(); // 2

// Implicite Lost:
// function foo() {
//     console.log(this.a);
// }
// var obj = {
//     a: 2,
//     foo: foo
// }
// var func = obj.foo;
// var a = 'Opps!'
// func(); // Undefined here because direct function pointing

// on Callback
// function foo() {
//     console.log(this.a);
// }
// function dooFoo(fn) {
//     fn();
// }
// var obj = {
//     a: 2,
//     foo: foo
// }
// var a = "Opps!"
// dooFoo(obj.foo);

// 3. Explicite Binding 
// call, apply and bind method 
// function foo() {
//     console.log(this.a);
// }
// var obj = {
//     a: 2
// }
// function bar() {
//     foo.call(obj);
// }
// bar(); // 2
// setTimeout(bar, 100); // 2
// bar.call(window)

// function foo(something, something1) {
//     console.log(this.a, something);
//     return this.a + something + something1;
// }
// var obj = {
//     a: 2
// }
// var bar = function () {
//     return foo.apply(obj, arguments); 
// }
// var b = bar(10, 8);
// console.log(b);

// In apply arguments get spread using ... automatically

// Other usefull pattern
// function foo(something) {
//     console.log(this.a, something);
//     return this.a + something;
// }
// var obj = {a: 2};

// function bind(fn, obj) {
//     return function () {
//         return fn.apply(obj, arguments);
//     }
// }
// var bar = bind(foo, obj);
// console.log(bar(100));

// 4. new Binding 

// When we call a function using new operator four things happens
// a. new object is created
// b. this is point to thi newly created object
// c. [[Prototype]] linked with this object i.e. function prorototype linked
// d. Unless function return its own alternate object, the new invoked function call automatically return the newly created object

// function foo() {
//     this.a = 2;
// }
// var obj = new foo();
// console.log(obj.a);


// Precedence:
// 1. new bining override 
// 2. Explicite/Hard Binding 
// 3. Implicite
// 4. Default 
// new and call/apply can not be user togather

// Ingnored this: 
// var obj = Object.create({}); // It wont give you prototype chain
// foo.call(obj, ...)

// Indirection:
// function foo() {
//     console.log(this.a);
// }
// var a = 2;
// var o = {a: 3, foo: foo};
// var p = {a: 4};

// o.foo();
// (o.foo = o.foo)(); // 2 non strict mode because (o.foo = p.foo) just gives you reference to function;

// Arrow Function uses lexical this means closest function's this or global this


// Chapter 3:
// Type: String Boolean, Number, null, undefined, Object, Symbol, BigInt 
// null is sometime refered as object 
// console.log(typeof null); // 'object

// Funtion is subtype of object technially callable object 
// Array are also form of object 

// Built In Objects:
// Number, Boolean, String, RegExp, Error, Object, Function, Array, Date 
// Date does not have literal ways of creating Date 
// null and undefined have no Object form
// Literally created Array, Object coersce to its Object type that is why we are able to use their methods 

// computed property [...] command use case is for symbols

// Function never belong to an object even though we write function expression as part of object 
// var myObject = {
//     foo: function() {
//         console.log('foo');
//     }
// }

// Duplicating Object:

// function anotherFunction() { }
// var anotherObject = {
//     c: 3
// };
// var anotherArray = [];

// var myObject = {
//     a: 2,
//     b: anotherObject,
//     c: anotherArray,
//     d: anotherFunction
// }

// anotherArray.push(anotherObject, myObject)
// console.log(anotherArray);

// Shallow Copy: would ends up creating a new object with a as copy of value 2, but b,c,and d will still get the reference 
// It means it copies only one level

// Deep Copy: will duplicate not only a, but b,c,and d as well

// Solution: Objects that are JSON safe can easily be duplicated:
// DeepCopy

// var copyMyObject = JSON.parse(JSON.stringify(myObject));

// Shallow Copy
// Object.assign(targerObject, sourceObj1, sourceObj2...);
// It iterates over all the enumarable, owned key (immediatly parent) on the source objects and copies them (vai = assign) to target object 
// var assignObj = Object.assign({}, myObject);
// assignObj.b === anotherObject // true
// assignObj.c === anotherArray //true
// assignObj.d === anotherFunction // true


// Demo for Object.assign for only enumerable property


// PropertyDescriptor:
// decriber will be 
// value, writable, enumurable, configurable, set, get, Symbol 

// var myObject = {
//     a: 10
// }

// var descripter = Object.getOwnPropertyDescriptor(myObject, 'a');
// console.log(descripter);

// var myObject = {};
// Object.defineProperty(myObject, 'a', {
//     value: 19,
//     writable: true,
//     enumarable: true,
//     configurable: true
// })
// console.log(myObject);

// var myArray = [];
// Object.defineProperty(myArray, '0', {
//     value: 10,
//     writable: true,
//     enumerable: true,
//     configurable: true
// })
// Object.defineProperty(myArray, 'val', {
//     value: 1,
//     writable: true,
//     enumerable: true,
//     configurable: true
// })
// console.log(myArray);

// writable: 
// var myObject = {};
// Object.defineProperty(myObject, 'a', {
//     value: 19,
//     writable: false,
//     enumarable: true,
//     configurable: true
// })
// myObject.a = 10; // Error in strict mode

// configurable:

// If made configurable false and if writable is true then still you can make writable to false but if writable is false then you can not 
// make writable to true
// var myObject = {};
// Object.defineProperty(myObject, 'a', {
//     value: 19,
//     writable: true,
//     enumarable: true,
//     configurable: false
// })
// console.log(myObject.a);
// myObject.a = 10;
// console.log(myObject.a);
// Object.defineProperty(myObject, 'a', {
//     writable: false,
// })
// Object.defineProperty(myObject, 'a', {
//     writable: true,
// }) // Error
// configurable: false prevents ability to use delete operator to remove an existing property 

// Enumarable:
// var myObject = {b: 29};
// Object.defineProperty(myObject, 'a', {
//     value: 10,
//     enumerable: false,
//     writable: true,
//     configurable: true
// });

// for (const key in myObject) {
//     console.log(key);
// }
// for (const key of myObject) {
//     console.log(key);
// } // myObject is not interable

// var myArray = [1];
// Object.defineProperty(myArray, '1', {
//     value: 22,
//     enumerable: false
// })
// Object.defineProperty(myArray, 'val', {
//     value: 22,
//     enumerable: false
// })
// for (const key in myArray) {
//     console.log(key);
// } // 0
// for (const key of myArray) {
//     console.log(key);
// } // 1, 22

// Array is iterable
// Objects are not iterable

// Immutability:
// writable: false,
// configurable: false

// Object.preventExtensions(): prevents adding new property
// var myArray = [1];
// var myObject = {
//     a: 19
// }
// Object.preventExtensions(myArray);
// Object.preventExtensions(myObject);
// myArray.val = 10; // TypeError
// myArray.push(10); // TypeError
// myObject.b = 19;  // TypeError


// Object.seal(): take object and call preventExtensions and make all the existing property configurable to false
// Object.freeze(); take object and call seal and also make all property accessor writeble: false

// [[Get]]: property Accessor:
// when 
// var myObject = {
//     a: 10,
//     b: undefined
// };
// myObject.a;
// its like [[Get]]()

// Its look for current object if its find then it will return the value other wise it look for [[Prototype]] chain and if it does not find
// their as well it will return undefined

// myObject.b; //undefined
// myObject.c; //undefined

// console.log(val); // Error

// [[Put]]: Property Setter:
// Setter Descriptor then call the Setter
// if not then check writable is false if yes then fail silently in non stric mode and generate typeerror otherwise
// otherwise set the value

// var myObject = {
//     get a() {
//         return 12;
//     }
// }
// console.log(myObject);
// console.log(myObject.a);
// myObject.a = 12;
// console.log(myObject.a); // error in strict no(op) in non strict

// Object.defineProperty(myObject, 'b', {
//     get: function () {
//         return this.a * 2;
//     },
//     enumerable: true
// })

// console.log(myObject);
// console.log(myObject.b);


// Existance: 
// var myObject = {
//     a: 2
// }

// console.log(('a' in myObject)); // true
// console.log(('b' in myObject)); // false

// console.log(myObject.hasOwnProperty('a')); // true
// console.log(myObject.hasOwnProperty('b')); // false

// // in operator check in the property as well as in [[Prototype]] chain as well 
// // hasOwnProperty checks in only object not in [[Prototype]] chain

// // It is possible  to create object that does not have prototype chain vai Object.create(null) in that case use 
// Object.prototype.hasOwnProperty.call(myObject, 'a');


// Enumaration: 
// myObject.propertyIsEnumarable('a'); Given property exist directly in the object and has enumarable property descriptor true 
// Object.keys() // return all the enumarable properties
// Object.getOwnPropertyNames() // return all the properties enumarable or not

// there is no build in like in operator that retrieve all the properites present in [[Prototype]] chain as well 


// Iteration: Lateron.....?


// chapter 4: mixing Inplicite and Explicite

// Chapter 5: Prototypes
// property acccessor[[Get]] follows the prototype link
// var anotherObject = {
//     a: 10
// }
// var obj = Object.create(anotherObject);
// console.log(obj.a);

// for...in to interate through the object, it gives you all the properties of object that are enumarable and enumarable propery from prototype
// in operator gives you keys from prototype regardless of enumarable or not

// var anotherObject = {
//     a: 10
// }
// Object.defineProperty(anotherObject, 'b', {
//     value: 23,
//     enumerable: false
// })
// var obj = Object.create(anotherObject);
// for (const key in obj) {
//     console.log(key); // a only
// }

// console.log(('a' in obj)); //true
// console.log(('b' in obj)); // true

// Shadowing Example: 
// var anotherObject = {
//     foo: 10,
//     bar: 20
// }
// // console.log(dec);
// var myObject = Object.create(anotherObject);
// Object.defineProperty(myObject, 'foo', {value: 'bar', writable: true, enumerable: true, configurable: true});
// console.log(myObject.foo, anotherObject.foo); // bar 10
// myObject.foo = 'foo';
// console.log(myObject.foo, anotherObject.foo); // foo 10

// myObject.bar = 'bar'; // because writable true in protptype it will create bar in myObject shadowing
// console.log(myObject.bar, anotherObject.bar);


// var anotherArray = {};
// Object.defineProperty(anotherArray, 'foo', {
//     value: 10,
//     writable: false
// })

// var myObject = Object.create(anotherArray);
// console.log(myObject.foo);
// myObject.foo = 'foo1'; // if on the protptype chain foo is writable false then error will com
// console.log(myObject.foo, anotherArray.foo);

// One more nuance:
// var anotherObject = {a: 10}
// var myObject = Object.create(anotherObject);
// myObject.a++;
// console.log(myObject.a, anotherObject.a); // 11, 10
// // because myObject.a = myObject.a + 1;


// var anotherObject = {
//     foo: 'foo'
// }
// var myObject = Object.create(anotherObject);
// myObject.foo = 'baar';
// console.log(myObject.foo, anotherObject.foo);



// function Foo() {

// }
// var a = new Foo();
// Object.getPrototypeOf(a) === Foo.prototype // true

// Foo.prototype.constructor === Foo // true
// a.__proto__.constructor === Foo; // true

// a.constructor === Foo // true: There is no direct contructor in a but it is in its prototype like above

// Function are not contructors but function calls are "contructor call"

// a.constructor == Foo // does not means a is constructed by Foo It is a false statement
// Let see Why

// function Foo() { }
// Foo.prototype = {};

// var a = new Foo();
// a.constructor === Foo; // false
// a.constructor === Object // true

// // but workaround
// Object.defineProperty(Foo.prototype, 'constructor', {
//     value: Foo,
//     writable: true,
//     enumerable: true,
//     configurable: true
// })

// a.constructor === Foo; // true
// a.constructor === Object // false


// (Prototypical) Inheritance:

// function Foo(name) {
//     this.name = name;
// }

// Foo.prototype.myName = function myName() {
//     return this.name;
// }

// function Bar(name, label) {
//     Foo.call(this, name);
//     this.label = label;
// }

// Bar.prototype = Object.create(Foo.prototype);

// Bar.prototype.myLabel = function myLabel() {
//     return this.label;
// }

// var obj = new Bar('a', 'obj a');
// obj.myLabel(); // obj a
// obj.myName(); //a


// // Pre ES6
// Bar.prototype = Object.create(Foo.prototype); 
// Here we have to get rid of existing Bar.prototype object and it becomes part of GC so compare to setPrototypeOf is making internal link
// But Objec.create will be king we will show in later 
// // ES6+
// Object.setPrototypeOf(Bar.prototype, Foo.prototype);


// Inspecting Class Relationship:

// instanceof: object is in left operand and right operand is funtion 
// instanceof answer is entire [[Prototype]] chain of a, does the object arbiterary pointed to by Foo.prototype ever aprear

// function Foo() { }
// Foo.prototype.blah = function () { }

// function Bar() {}

// Object.setPrototypeOf(Bar.prototype, Foo.prototype);

// var a = new Bar();
// a instanceof Foo // true


// We can inquire only acsestery but let suppose we have two object a, b ans want to find out if objects are related to each other prototype chain?
// function isRelated(o1, o2) {
//     function F() { }

//     F.prototype = o2;
//     return o1 instanceof F;
// }

// function Foo(name) {
//     this.name = name;
// }

// Foo.prototype.mySelf = function () {
//     console.log(this.name);
// }

// function Bar(name, label) {
//     Foo.call(this, name);
//     this.label = label;
// }

// // Bar.prototype = Object.create(Foo.prototype);

// Bar.prototype.myLabel = function () {
//     console.log(this.label);
// }
// Object.setPrototypeOf(Bar.prototype, Foo.prototype);


// var a = new Bar('a', 'obj a');
// a.mySelf();
// a.myLabel();

// a instanceof Bar // true
// a instanceof Foo // true


// var b = new Foo('b');

// console.log(isRelated(a, b)); // false
// console.log(isRelated(b, a)); // false



// function isRelated(o1, o2) {
//     function F() { }

//     F.prototype = o2;
//     return o1 instanceof F;
// }

// var a = {};
// var b = Object.create(a);

// console.log(isRelated(b, a)); //  true
// console.log(isRelated(a, b)); // false
// // Similar
// console.log(a.isPrototypeOf(b));
// console.log(b.isPrototypeOf(a));

// Object.getPrototypeOf(a) === Object.prototype; // true


// __proto__ is like setter and getter:
// Object.defineProperty(Object.prototype, '__proto__', {
//     get: function () {
//         return Object.getPrototypeOf(this);
//     },
//     set: function (o) {
//         Object.setPrototypeOf(this, o);
//         return o;
//     }
// })




// var anotherObject = {a: 10};

// var myObject = Object.create(anotherObject, {
//     a: {
//         enumerable: true,
//         configurable: true,
//         writable: true,
//         value: 1
//     },
//     b: {
//         writable: true,
//         enumerable: true,
//         configurable: true,
//         value: 2
//     }
// })

// console.log(myObject);

// Chapter 6:
// we have to think different from class/inheritance design pattern to delegation design pattern 
// In class we happily use polymorphism buthaving the same name method to parent and in child class but
// In OLOO(Object link to other object design delegation) we try to avoid the polymorphism ascutlly its all shadowing
// Delegation is very powerfull design pattern very distinct from patent child class machansm


// Cyclic Prototype Value not allowed
var anotherObject = {
    doThis: function dothis() {
        console.log(`Doing this`);
    }
}

var myObject = {
    doThat: function doThat() {
        console.log(`Doing that`);
    }
}
Object.setPrototypeOf(myObject, anotherObject);
// Object.setPrototypeOf(anotherObject, myObject) // Cyclick prototype value




// anotherObject.myVal = myObject; // Avoid this ass well


// Class Oriented
// OO oriencted like function and prototype
// OLOO (Object linking to other object oriented)

// OO based:
// function Foo(name) {
//     this.name = name;
// }
// Foo.prototype.identity = function dentity() {
//     return `I am ${this.name}.`;
// }
// function Bar(who) {
//     Foo.call(this, who);
// }
// Bar.prototype = Object.create(Foo.prototype);
// Bar.prototype.speak = function speak() {
//     alert(`hello, ${this.identity()}`);
// }
// var b1 = new Bar('b1');
// var b2 = new Bar('b2');
// // b1.speak();
// b2.speak();

// OLOO based 
// var Foo = {
//     init: function (who) {
//         this.name = who;
//     },
//     identity: function () {
//         return `I am ${this.name}`;
//     }
// }

// var Bar = Object.create(Foo);
// Bar.speak = function () {
//     alert(`hello, ${this.identity()}`);
// }

// var b1 = Object.create(Bar);
// b1.init('b1');
// b1.speak();


// Both the linking is exactyl same
// We have greatly simplified all the stuff in OLOO that are going on OO model
// because we are just linking objects to each other without needing all the cruft and confusion of things that look like(but dont behave) clases, with constructor
// and prototypes and new calls

// Widget Example
// function Widget(width, height) {
//     this.width = width;
//     this.height = height;
//     this.$elem = null;
// }

// Widget.prototype.render = function ($where) {
//     if (this.$elem) {
//         this.$elem.css({
//             width: this.width + "px",
//             height: this.height + "px",
//             margin: "8px"
//         }).appendTo($where);
//     }
// }

// function Button(width, height, label) {
//     Widget.call(this, width, height);
//     this.label = label || 'Default';

//     this.$elem = $("<button>").text(this.label);
// }

// // Object.setPrototypeOf(Button.prototype, Widget.prototype);
// Button.prototype = Object.create(Widget.prototype);

// Button.prototype.render = function ($where) {
//     Widget.prototype.render.call(this, $where);
//     this.$elem.click(this.onclick.bind(this));
// }
// Button.prototype.onclick = function (evt) {
//     console.log(`Button ${this.label} clicked`);
// }

// $(document).ready(function () {
//     var $body = $(document.body);
//     var btn1 = new Button('200', '50', 'Hello');
//     var btn2 = new Button('200', '50', 'World');
//     btn1.render($body);
//     btn2.render($body);
// })


// Widget Example with Class: as class is just a syntax sugar

// class Widget {
//     constructor (width, height) {
//         this.width = width;
//         this.height = height;
//         this.$elem = null;
//     }

//     render($where) {
//         if (this.$elem) {
//             this.$elem.css({
//                 width: this.width + "px",
//                 height: this.height + "px",
//                 margin: '8px'
//             }).appendTo($where);
//         }
//     }
// }

// class Button extends Widget {
//     constructor (width, height, label) {
//         super(width, height);
//         this.label = label || 'Default';

//         this.$elem = $('<button>').text(this.label);
//     }

//     render($where) {
//         super.render($where);

//         this.$elem.click(this.onClick.bind(this));
//     }

//     onClick() {
//         console.log(`Button ${this.label} clicked`);
//     }
// }

// $(document).ready(function () {
//     var $body = $(document.body);
//     var btn1 = new Button('200', '50', 'Hello1');
//     var btn2 = new Button('200', '50', 'World1');
//     btn1.render($body);
//     btn2.render($body);
// })

// //Despite of syntactical improvement these are not real class


// Widget with OLOO Style

var Widget = {
    init: function (width, height) {
        this.width = width;
        this.height = height;
        this.$elem = null;
    },
    render: function ($where) {
        if (this.$elem) {
            this.$elem.css({
                width: this.width + 'px',
                height: this.height + 'px',
                margin: '8px'
            }).appendTo($where);
        }
    }
}


var Button = Object.create(Widget);

Button.setup = function (width, height, label) {
    this.init(width, height);

    this.label = label || 'Default';

    this.$elem = $("<button>").text(this.label);
}

Button.build = function ($where) {
    this.render($where);
    this.$elem.click(this.onClick.bind(this));
}
Button.onClick = function () {
    console.log(`Button ${this.label} clicked!`);
}

$(document).ready(function () {
    var $body = $(document.body);
    var btn1 = Object.create(Button);
    btn1.setup('200', '50', 'Hello2')
    btn1.build($body);

    var btn2 = Object.create(Button);
    btn2.setup('200', '50', 'World2')
    btn2.build($body);
})