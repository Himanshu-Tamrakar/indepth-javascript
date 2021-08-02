// tag function:
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

// for...of:
// loops over set of values produces by iterator.
// The value used to loop over for...of must be iterable or it must be value that can be coearsed/boxed to object that is iterable.

// for...of loops over values produced by NodeIterator
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
// By default Js string operations and methods are ot sensitive to astral symbols in string values. So they treat each BMP
// charector individually, even the two surrogate halves that make up an otherwise single astral charector.
// Page Seven5

// Charector Posotioning:
// Pre ES6 charAt method not respect the atomicuity of astral charactor not will it take account combiniing marks

// see at book
// ES6 aswell does not give astral unicode aware method  
// Hack is use normalize method
// [...s1.normalizw()]

// Symbols:
// New ES6 premitive type that does not have literal version for writting

// We should ot use Symbol with new 
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

// Main reason to create symbol to is to create string-like value that can not collied with othat value
// const EVT_LOGIN = Symbol("event.login");
// this value can not be duplicated.


// Chapter 3:
// Iterator:

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

// Custom Iterator:
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