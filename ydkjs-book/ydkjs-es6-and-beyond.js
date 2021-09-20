// Chapter 1:
// **Transpiling (transformation + compiling). Roughly, the idea is to use a special tool to transform your ES6 code into equivalent 
// (or close!) matches that work in ES5 environments
// For example, consider shorthand property definitions(see “Object Literal Extensions” on page 38 in Chapter 2).Here’s the ES6 form:
// var foo = [1, 2, 3];
// var obj = {
//     foo
//     // means `foo: foo`
// };
// obj.foo;
// // [1,2,3]
// // But(roughly) here’s how that transpiles:
// var foo = [1, 2, 3];
// var obj = {
//     foo: foo
// };
// obj.foo;
// // [1,2,3]

// ** Shims/Polyfills
// Not all new ES6 features need a transpiler. Polyfills (aka shims) are a pattern for defining equivalent behavior from a newer environment
// into an older environment, when possible. Syntax cannot be polyfilled, but APIs often can be.
// For example, Object.is(..) is a new utility for checking strict equality of two values but without the nuanced exceptions that ===
// has for NaN and -0 values. The polyfill for Object.is(..) is pretty easy:
// if (!Object.is) {
//     Object.is = function (v1, v2) {
//         // test for `-0`
//         if (v1 === 0 && v2 === 0) {
//             return 1 / v1 === 1 / v2;
//         }
//         // test for `NaN`
//         if (v1 !== v1) {
//             return v2 !== v2;
//         }
//         // everything else
//         return v1 === v2;
//     };
// }

// Chapter 2:
// function declaration, var, let, const, function expressions scope, hoisting rule
//  spread/rest operator
// Default parameter value: default parameter create its own scope in ()
// destructuring
var o1 = {a: 1, b: 2, c: 3};
var o2 = {};
({a: o2.a, b: o2.b, c: o2.c} = o1);
console.log(o2);

// can convert array t Object, Object to array, change value position in array 
var obj1 = {a: {x: 1}};

var {a: {x: X}} = obj1;
console.log(X);


// Object Literal Extension:
// So what are we left to conclude about concise methods? They’reshort and sweet, and a nice convenience. But you should only use
// them if you’re never going to need them to do recursion or eventbinding/unbinding. Otherwise, stick to your old-school something:
// function something(..) method definitions.
// var btn = document.querySelector('button');
// var obj = {
//     something: function something(o) {
//         var x = Math.random(),
//             y = Math.random();

//         if (x < y) {
//             return something(y, x);
//         }
//         console.table(x, y, x - y);
//         return x - y;
//     }
// }
// btn.addEventListener('click', obj.something);

// super:
// got o prototype and call the function, prototype is super 

// Interpolation:
// String literal tag function
//  arg strings = spliy by ${...}
// arg ...values = all the ${...} values
function dollabillsyall(strings, ...values) {

    console.log(strings.raw);
    console.log(strings);
    console.log(values);

    return strings.reduce(function (s, v, idx) {
        console.table(s, v, idx);
        if (idx > 0) {
            if (typeof values[idx - 1] == 'number') {
                s += `$${values[idx - 1].toFixed(2)}`;
            } else {
                s += values[idx - 1]
            }
        }
        return s + v;
    }, "")
}

var amt1 = 11.99,
    amt2 = amt1 * 1.18,
    firstName = "kyle";

var text = dollabillsyall
    `Thanks for your purchase, ${firstName}! Your product cost was ${amt1}, which with tax comes out to ${amt2}`;
console.log(text);



// raw value in tag function strings argument:
function showraw(strings, ...values) {
    console.log(strings);
    console.log(strings.raw);
}
showraw`Hello\nWorld`;

console.log(`Hello\nWorld`);
console.log(String.raw`Hello\nWorld`);
console.log('%c -------------------------- ', 'background: #b3bac5; color: #bada55');

// Arrow Function:
// Shorter sysntax, good for one line body,
// uses closest lexical this, no dynamic this,
// uses closest loxical arguments and super and new.target.

// for..of Loops:
// Joining the for and for..in loops from the JavaScript we’re all familiar with, ES6 adds a for..of loop, which loops over the set of
// values produced by an iterator. The value you loop over with for..of must be an iterable, or it must
// be a value that can be coerced/boxed to an object (see the Types & for..of Loops Grammar title of this series) that is an iterable. 
// An iterable is simply an object that is able to produce an iterator, which the loop then uses.
// Best example
var o = {};
for (o.a of [1, 2, 3]) {
    console.log(o.a);
}
// 1 2 3
for ({x: o.a} of [{x: 1}, {x: 2}, {x: 3}]) {
    console.log(o.a);
}

// for...in loops ovre keys
// var a = [11, 22, 33, 44, 55, 66];
// for (const val of a) {
//     console.log(val);
// }
// for (const key in a) {
//     if (Object.hasOwnProperty.call(a, key)) {
//         console.log(key);
//     }
// }

// // pre ES6:
// var k = Object.keys(a);
// for (let val, i = 0; i < k.length; i++) {
//     console.log(a[k[i]]);
// }

// // Iterator way
// for (var val, ret, it = a[Symbol.iterator](); (ret = it.next()) && !ret.done;) {
//     console.log(ret.value);
// }

// Standard build in value that have default iterable:
// Array
// String
// Generator Function
// Typed Arrays/Collections

// Plain object are not iterable that is why we can not for...of. but we can create iterator in that function 


// Boxing to String
// for (const v of "object") {
//     console.log(v);
// }


// Number Literal Extension:
// Pre ES6
// var dec = 42,
//     oct = 052,
//     hex = 0x2a;

// // Specifying number in different base. all three are 42 in dec
// // 052 was non standard. so it is restricted in strict mode 
// // octal varsion is not allowed in strict mode
// Number("42"); // 42
// Number("052"); // 52
// Number("0x2a"); // 42

// // Standarized form in ES6 for decimal. octal. hexdecimal valuesa are:

// var dec1 = 42, // 42
//     oct1 = 0o52, // 42
//     hex1 = 0x2a, // 42
//     bin = 0b101010 //42;

// Number("42"); // 42
// Number("0o52"); // 52
// Number("0x2a"); // 42
// Number("0b101010"); // 42



// Unicode:
// Unicode charectors range from 0x0000 to 0xFFFF
// Group of charectors call BMP(Basic Bilingual Plane)
// BMP even contains fun sysmbols like snowman etc
// There are lots of ther extended Unicode charectors beyonds this BMP which range up to 0x10FFFF
// THese symbols are ofter reffered as astral symbols like U+1D11E and U+1F4A9
// For details: Mathias Bynens writting reference on unicode: page seven4

// Prior ES6:
// var snowman = "\u2603";
// console.log(snowman);

// var gclef = "\u{1D11E}";
// console.log(gclef);



// Unicode-Aware String Operation:
// By default Js string operations and methods are not sensitive to astral symbols in string values. So they treat each BMP
// charector individually, even the two surrogate halves that make up an otherwise single astral charector.
// Page Seven5

// Charector Positioning:
// Pre ES6 charAt method not respect the atomicuity of astral charactor not will it take account combiniing marks

// see at book
// ES6 aswell does not give astral unicode aware method  
// Hack is use normalize method
// [...s1.normalizw()]

// Symbols:
// New ES6 premitive type that does not have literal version for writting

// We should not use Symbol with new 
// parameter is opitonal
// typeof is "symbol"

// var smb = Symbol("Hey this is symbol");
// smb.toString(); // Symbol("Hey...")

// smb instanceof Symbol; // false because it is not boxed
// smb === Symbol; //false
// typeof smb; //"symbol"

// // To Box:
// smbObj = Object(smb);
// smbObj instanceof Symbol; //true

// Main reason to create symbol to is to create string-like value that can not collied with other value
// const EVT_LOGIN = Symbol("event.login");
// this value can not be duplicated.


// ** Chapter 3:
// Iterator:
// Interator Interface:
// Iterator[required]
//     next() {method}: retrieves next IteratorResult

// There are two optional members that some iterators are extended with:
// Iterator [optional]
//     return() {method}: stops iterator and returns IteratorResult
//     throw() {method}: signals error and returns IteratorResult

// The IteratorResult interface is specified as:
// IteratorResult
//     value {property}: current iteration value or final return value (optional if `undefined`)
//     done {property}: boolean, indicates completion status
// -----
// There’s also an Iterable interface, which describes objects that must
// be able to produce iterators:
// Iterable
// @@iterator() {method}: produces an Iterator
// If you recall from “Built-In Symbols” @@iterator is the special built-in symbol representing the method
// that can produce iterator(s) for the object


// var Fir = {
//     [Symbol.iterator]: function () {return this;},
//     next: function () {
//         return {value: Math.random(), done: false};
//     },
//     return: function () {
//         return {value: Math.random(), done: true}
//     }
// }



// var i = 0;
// for (const iterator of Fir) {
//     console.log(iterator);
//     if (i > 10) break;
//     else i++;
// }

// Custom Itrable:
// var Fib = {
//     [Symbol.iterator]: function () {
//         var n1 = 1, n2 = 2;
//         return {
//             [Symbol.iterator]() {return this;},
//             next() {
//                 var current = n2;
//                 n2 = n1;
//                 n1 = n1 + current;
//                 return {value: current, done: false}
//             },
//             return(v) {
//                 console.log('Done');
//                 return {value: v, done: true}
//             }

//         }
//     }
// }

// for (const iterator of Fib) {
//     console.log(iterator);
//     if (iterator > 50) {
//         break
//     };
// }

// Fun:
// if (!Number.prototype[Symbol.iterator]) {
//     Object.defineProperty(
//         Number.prototype,
//         Symbol.iterator, {
//         enumerable: false,
//         configurable: true,
//         writable: true,
//         value: function iterator() {
//             var i, inc, done = false, top = +this;
//             inc = 1 * (top < 0 ? -1 : 1);

//             return {
//                 [Symbol.iterator]() {
//                     return this;
//                 },
//                 next() {
//                     if (!done) {
//                         if (i == null) {
//                             i = 0;
//                         } else if (top >= 0) {
//                             i = Math.min(top, i + inc);
//                         } else {
//                             i = Math.max(top, i + inc);
//                         }

//                         if (i == top) {
//                             done = true;
//                         }
//                         return {value: i, done: false}

//                     } else {
//                         return {value: undefined, done: true};
//                     }
//                 }
//             }
//         }
//     }
//     )
// }

// Object.defineProperty(
//     String.prototype,
//     Symbol.iterator, {
//     enumerable: false,
//     configurable: true,
//     writable: true,
//     value: function iterator() {
//         var i, inc, done = false, top = 5;
//         inc = 1 * (top < 0 ? -1 : 1);

//         return {
//             [Symbol.iterator]() {
//                 return this;
//             },
//             next() {
//                 if (!done) {
//                     if (i == null) {
//                         i = 0;
//                     } else if (top >= 0) {
//                         i = Math.min(top, i + inc);
//                     } else {
//                         i = Math.max(top, i + inc);
//                     }

//                     if (i == top) {
//                         done = true;
//                     }
//                     return {value: i, done: false}

//                 } else {
//                     return {value: undefined, done: true};
//                 }
//             }
//         }
//     }
// }
// )

// for (const v of 5) {
//     console.log(v); // Fun Funa fun fun
// }
// console.log([...-3]); // Fun Funa fun fun

// for (const v of "object") {
//     console.log(v); // Fun Funa fun fun
// }


// ** Destructure can use iterator
// ** spread can use iterator

// var a = [1, 2, 3, 4, 5];

// var b = [0, ...a, 6];

// var it = a[Symbol.iterator]();
// var [x, y] = it; // destrcutor operator
// var [z, ...w] = it; // rest opearator
// console.log(it.next());
// console.log(x, y, z, w);


// Generator:
// Module:
// ** Class
// .call() with class keyward does not work 
// Class does not hoisted
// class Foo in the top global scope creates a lexical Foo identifier in that scope, but unlike function Foo does not create a global object property of that name.

class Foo {
    constructor (a, b) {
        this.x = a;
        this.y = b;
    }
    gimmeXY() {
        return this.x * this.y;
    }
}

class Bar extends Foo {
    constructor (a, b, c) {
        super(a, b);
        this.z = c;
    }
    gimmeXYZ() {
        return super.gimmeXY() * this.z;
    }
}

var obj = new Bar(1, 2, 3);
console.log(obj);
// It is like,
// Bar.prototype = Object.create(Foo.prototype);
// Bar.prototype.constructor = Bar;
// Bar.prototype.gimmeXYZ = ...

// ** new.target
// new.target is a new “magical” value available in all functions, though in normal functions it will always be undefined . In any con‐
// structor, new.target always points at the constructor that new actually directly invoked, even if the constructor is in a parent class
// and was delegated to by a super(..) call from a child constructor.Consider:

class Foo {
    constructor () {
        console.log("Foo: ", new.target.name);
    }
}
class Bar extends Foo {
    constructor () {
        super();
        console.log("Bar: ", new.target.name);
    }
    baz() {
        console.log("baz: ", new.target);
    }
}
var a = new Foo(); // Foo: Foo
var b = new Bar();
// Foo: Bar < --respects the `new` call-site
// Bar: Bar
b.baz(); // baz: undefined

// * If new.target is undefined , you know the function was not called with new . You can then force a new invocation if that’s necessary.



// ** static
// static members wento .constructor inside protptype object 

class Foo {
    static cool() {console.log("cool");}
    wow() {console.log("wow");}
}
class Bar extends Foo {
    static awesome() {
        super.cool();
        console.log("awesome");
    }
    neat() {
        super.wow();
        console.log("neat");
    }
}
Foo.cool(); // "cool"
Bar.cool(); // "cool"
Bar.awesome(); // "cool"
// 'awesome
var b = new Bar();
b.neat(); // "wow"
// "neat"
b.awesome; // undefined
b.cool;// undefined


// ** Chapter 4:
// Callbacks, (Inversion of control, synchronous looking code for async code)
// promises(Solves trust issue(inversion of control)),
// Generators (Solce sync looking code of an async code)
// Promise + Generator (Best)
// async/await

// ** Chapter 5:
// Collections
// TypedArray: 
// Map, set, get, has, values, keys, entries, delete, iterator,
// Set, has, add, values, keys, entries, delete, iterator

// ** Chapter: 6
// Array
// Object
// Math
// Number
// String

// ** Chapter 7
