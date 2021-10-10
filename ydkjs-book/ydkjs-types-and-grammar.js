// JS have  built in type
// number, boolean, string, null, undefined, NaN, Symbols(added in ES6), object, BigInt(ECMA20)

// typeof: typeof return type of value stored in a variable
// but
// typeof null === 'object' // this is bug and never gonna fix
// to check null:
// (!a && typeof a === 'object');

// function is subtype of object it is call callable object
// typeof function() {} === 'function' // true: still it is a object
// function func(arg1, agr2, arg3) { }
// func.length // 3

// array's are not special type
typeof [1, 2, 3] === 'object' //true
// most appropriat to think as subtype of an object

// undefined vs undeclared:
// Variables that have no value currently actually have the undefined value. Calling typeof against such variables will return "undefined" :
// It’s tempting for most developers to think of the word “undefined” as a synonym for “undeclared.” However, in JS, these two concepts
// are quite different.
// An “undefined” variable is one that has been declared in the accessible scope, but at the moment has no other value in it. By contrast, an
// ** “undeclared” variable is one that has not been formally declared in the accessible scope.

// var a;
// typeof a; // 'undefined'
// console.log(b); // Reference error: b is not defined but
// typeof b // 'undefined' not declared
// typeof is very usefull

// function doSomething() {
//     var helper = (typeof FeatureXYZ !== 'undefined') ? FeatureXYZ : function() {};
//     var val = helper();
// }
// // or 
// (function() {
//     function FeatureXYZ() {}
//     function doSomething() {
//         var helper = (typeof FeatureXYZ !== 'undefined') ? FeatureXYZ : function() {};
//         var val = helper();
//     }
//     doSomething();
// })();
// // or: dependency injection
// function doSomething(FeatureXYZ) {
//     var helper = FeatureXYZ || function() {}
//     var val = helper();
// }


// Chapter 2:
// Array: No need to presize them and contain any other type
// var arr = [1, 2, 3];
// console.log(arr.length);
// delete arr[2];
// arr.length; // still 3


// arr[5] = 6;
// arr[4] // undefined but it is actually a empty slot but it gives undefined

// // array also a object:
// arr["getOpsCount"] = 0;
// arr["getOpsCount"]++;
// arr["getOpsCount"]; // 1

// // but 
// arr['5'] = 6;
// arr[5] // 6 

// Array Like:
// array like values are not actually array. We have to make them actual array so that we can use the methods available in arrays,
//  like indexOf, concat, forEach etc...


// DOM query return list of elems that are not array but array like structure ex. // document.querySelectorAll()
// argumants in function are array like structure but not a actual array

// function foo() {
//     // var arr = Array.prototype.slice.call(arguments);
//     // or 
//     var arr = Array.from(arguments);
//     console.log(arr);
// }
// foo(1, 2, 3, 4);

// String: String are not array of charector in js.
// they have comman methods like indexOf, concat but they are not array 
// var a = 'abc';
// var b = ['a', 'b', 'c'];
// a[0] // a
// b[0] // a
// a.indexOf(0);
// b.indexOf(0);
// a === b // false

// String are immutable and array are quite mutable.
// a[0] in string is not valid sysntax for string in older browser but uses a.charAt(0)

// Borrowing
// var arrA = Array.prototype.map.call(a, function todo(val, i) {return val});
// var joinA = Array.prototype.join.call(a, '**')
// arrA, joinA; // work

// but 
// Array.prototype.reverse.call(a);// will not work because it reverse implicite and string are immutable

// Number:
// IEEE 754 

// 42.0 === 42 // true 
// // In JS trailing portion of decimal value after . is optional
// 42. // valid
// .42 // valid

// // Very large and very small value will outputted in exponent form
// var a = .0000000000000000000005; // 5e-21
// var a = 5000000000000000000000; // 5e21

// var a = 42.59;
// a.toFixed(0) //43;
// a.toFixed(1) // 42.6
// a.toFixed(2) // 42.59
// a.toFixed(3) // 42.590

// a.toPrecision(1) // 4e1
// a.toPrecision(2) // 43
// a.toPrecision(3) // 42.6
// a.toPrecision(4) // 42.59
// a.toPrecision(5) // 42.590

// ** 42.toFixed(3) // Syntax error // . is swallowed up for 42.
// ** 42 .toFixed() // valid


// ** The most (in)famous side effect of using binary floating-point num‐
// bers (which, remember, is true of all languages that use IEEE 754—
// not just JavaScript as many assume/pretend) is:
0.1 + 0.2 === 0.3; // false
// Mathematically, we know that statement should be true . Why is it false ?
// Simply put, the representations for 0.1 and 0.2 in binary floating point are not exact, so when they are added, the result is not exactly
// 0.3 . It’s really close, 0.30000000000000004 , but if your comparison fails, “close” is irrelevant.

// Same as 0.1 + 0.7 ===0.8 // false


// For floating point we have to take tolerance value and that is EPSILON
// function numberCloseEngoughToEqual(n1, n2) {
//     return Math.abs(n1-n2) < Number.EPSILON;
// }
// numberCloseEngoughToEqual((0.1+0.2), 0.3); //true
// numberCloseEngoughToEqual((0.0000001+0.0000002), 0.3); // false


// Number.MAX_VALUE
// Number.MAX_SAFE_INTEGER

// Number.isInteger(42) // true
// Number.isInteger(42.0) // true
// Number.isInteger(42.42) // false

// * null means empty value
// * undefined means missing value

// * void operator is to tell it is returning undefined
// The expression void ___ “voids” out any value, so that the result of
// the expression is always the undefined value.
var a = 42;
console.log(void a, a); // undefined 42

// function doSomething() {
//     if (!APP.ready) {
//        return void setTimeout(doSomething, 1000) // avoid side-effect
//     }
//     var result;
//     return result;
// }


// * NaN don't consider it as not a number consider it as invalid number 
// It is a number but invalid: refer book

// var a = 1 / '';
// var b = 'foo';
// window.isNaN(a); // true
// window.isNaN(b); //true -- ouch
// // b is not NaN but window.isNaN consider or coerce it ot number and that give NaN 

// // NaN will never be equal to another NaN 

// Number.isNaN(a); // true
// Number.isNaN(b); // false yeah

// Infinites
// -Infinity
// -1/0 // -Infinite
// 1/0 // Infinite

// Javascript wrap up to nearest possible value 
// var a = Number.MAX_VALUE;
// a + a; // Infinite
// a + Math.pow(2, 970) // Infinite
// a + Math.pow(2, 967) // Number.Max_Value

// Infinity/Infinity // NaN

// Zeros -0 and 0
// a = -0;
// a.toString(); // '0'
// a + ""; // '0'
// String(a); // "0" 
// JSON.stringify(a); //"0"
// JSON.parse("-0"); // -0
// Number("-0"); // -0
// +"-0"; // -0

// 0 > -0; // false
// use this method
// function isNegZero(n) {
//     n = Number(n);
//     return ((n === 0) && (1 / n === -Infinity));
// }


// instead use Object.is(): safe for NaN, zero comparision

// var a = 2 / '';
// var b = 0 * -3;

// Object.is(a, NaN); // true
// Object.is(b, -0); // true
// Object.is(b, 0) // false


// Chapter 3:
// var a = new String('abc');
// typeof a; // object
// a instanceof String // true
// a instanceof Object // true

// // Values that are typeof of 'object' are additionally tagged with internal [[Class]] property (For internal classification)
// Object.prototype.toString.call([1, 2, 3]); // '[Object String]'
// Object.prototype.toString.call(/g/); // '[Object RegExp]'
// Object.prototype.toString.call(null); // "[object Null]"
// Object.prototype.toString.call(undefined) // "[object Undefined]"

// var a = new Boolean(false);
// if(!a) {
//     console.log('Never Runs');
// }

// var a = new String('sdsds');
// var b = a + "";
// typeof a; // 'object'
// typeof b; // string

// Array:
// new Array(3); becomes lenth of three with empty slots 
// empty slots are not undefined may it seems as undefined but not purly undefined

// new Array([1,2,3]); will create actual array with value 

// var a = new Array(3);
// var b = [undefined, undefined, undefined];
// var c = [];
// c.length = 3;
// console.log(a, b, c);

// // as c and a has empty slots map not work
// a.map(function (v, i) {return i}); // [undefined * 3]
// b.map(function (v, i) {return i}); // [0,1,2]

// // but join work 
// a.join('-');
// b.join('-');

// Array.apply(null, {length: 3}); // this heck will work, it creates a actual array

// Create regular expression using literal syntax because it is fater Js engine precompile and cache literal form 
// Date and Error does not have literal form

// Symbols:
// Symbol is primitive value added in ES6
// Symbols are special unique(not strictly guaranteed) values that can be used as properties on objects with little fear of collision

// Prototype;
// Function Prototype is a Function
// Array prototype is an Array
// RegEx Prototype is a RegEx


// Chapter 4:
// “type casting” (or “type conversion”) occurs in statically typed languages at compile time, 
// while “type coercion” is a runtime conversion for dynamically typed languages

// Type Casting: Converting one type value to another typeof explicitely: Compile Type
// type Coarsion: When the conversion happends implicit: Run Time in dynamic language

// * ToString:
// * When any non-string value is coerced to a string representation, the conversion is handled by the 'ToString' abstract operation.
// null => "null"
// undefined => "undefined"
// true => "true"

// var a = 1.08 * 1000 * 1000 * 1000 * 1000 * 10000 * 1000 * 1000 * 1000;
// a.toString(); // "1.08e+25"

// * For regular Object, default toString will return using [[Class]] property
// var a = {firstName: 'HImanshu'};
// a.toString(); // "[object Object]"
// var b = [1, 2, 3];
// Object.prototype.toString.call(b); // "[object Array]"
// b.toString(); // "1,2,3"
// var c = new Boolean(); // false
// Object.prototype.toString.call(c); // "[object Boolean]"
// var d = Object("asdsd"); // "asdsd"
// Object.prototype.toString.call(d); // "[object String]"
// var e = function () { }
// Object.prototype.toString.call(e); // "[object Function]"
// e.toString(); // "function () { }"

// JSON Stringyfication:
// For simple value JSON.stringyfy is same as toString except it always stringify it 
// JSON.stringify("23"); // ""23""
// JSON.stringify(true); // "true"

// ** JSON.stringyfy() omit properties with undefined, function and Symbol.
// JSON.stringify(..) an object with circular reference(s) in it, an error will be thrown.
// var a = {
//     firstName: 'Himanshu',
//     lastName: undefined, // igonored
//     func: function () { }, // ignored
//     arr: [1, 2, 3, 4],
//     heyNull: null,
// }

// ** if an object contains a 'toJSON' method then JSON.stringify call that method and 
// var a = {
//     firstName: 'Himanshu',
//     lastName: undefined, // igonored
//     func: function () { }, // ignored
//     arr: [1, 2, 3, 4],
//     heyNull: null,
//     toJSON: function () {
//         return {}; // anything you want
//     }
// }
// JSON.stringify(a); // "{}"


// ** JSON.stringify accept second argumat that is replacer accept array or function
// var a = {
//     firstName: 'Himanshu',
//     lastName: undefined, // igonored
//     func: function () { }, // ignored
//     arr: [1, 2, 3, 4],
//     heyNull: null
// }

// JSON.stringify(a, ['firstName', 'arr']); // "{\"firstName\":\"Himanshu\",\"arr\":[1,2,3,4]}"
// JSON.stringify(a, function (k, v) {
//     console.log(1);
//     if (typeof v === 'function') return 'one';
//     return v;
// })
// JSON.stringyfy accepts thrird argument as number of spaces


// * ToNumber:
// * If any non-number value is used in a way that requires it to be a number, such as a mathematical operation, the ES5 spec defines the
// * 'ToNumber' abstract operation in section 9.3. For example, true becomes 1 and false becomes 0 . undefined becomes NaN , but (curiously) null becomes 0

// ** ToNumber for string value that is not a number result in NaN(invalid number) and string start wiht 0 not consider as octal number in ToNumber 

// ** Object and Array first convert into its primitive value if they are not already a number then ToNumber will perform.
// ** To convert to this primitive value ToPrimitive abstract operation will consult, the value in question to see if it has a valueOf() method. 
// ** If valueOf present and it is primitive then that value is used for coersion otherwise toString() will provide the value for coersion
// ** If neither operation provide a primitive value TypeError is thrown.

// var a = {
//     valueOf: function () {
//         return "42";
//     }
// }
// var b = {
//     toString: function () {
//         return "41";
//     }
// }

// var c = [4, 2];
// c.toString = function () {
//     return this.join("");
// }

// console.log(Number(a)); // 42
// console.log(Number(b)); // 41
// console.log(Number(c)); // 42
// console.log(a + 10); // 4210
// console.log(b + 10); // 4110
// console.log(Number("")); // 0
// console.log(Number([])); // 0, toString is ""
// console.log(Number(["abc"])); // NaN, toString is "abc"

// ToBoolean:
// In JS 0/1 are not false/true, we can coerce 0 to false and 1 to true nut they are not 0, 1
// Ok so we 0 coersed to false and 1 to true but what about other types of values

// 1. Value will become false if coersed to Boolean
// 2. rest become true

// All the falsy value become false when coersed
// Falsy values are:
// * null, undefined, "", 0, -0, false, NaN

// Rest are truty value 


// new Boolean(false); // true because it is object and object is not in falsy value
var a = new Boolean(false);
var b = new Number(0);
var c = new String("false");
var d = Boolean(a && b && c); // true;

// Falsy Object:
// Objects are truthy basically but there are some falsy object as well like document.all.
// if “falsy objects” are not just objects(like a, b, c) wrapped around falsy values,
// what the heck are they?

// ** 'falsy object' are not a part of jS itself they came from browser
// ** A “falsy object” is a value that looks and acts like a normal object
// ** (properties, etc.), but when you coerce it to a boolean , it coerces to a false value.
// Non Standrd, deprecated document.all is still present because to many lagecy code out there so Js make it a falsy value 
// document.all // Array like object but not actual array
// ** if (document.all) {
//     console.log(234); // never runs
// }
// document.all is falsy object 


// *** Explicite Coersion:

// unary + will do Number coersion
// +"3.14"; // 3.14
// The unary - operator also coerces like + does, but it also flips the
// sign of the number. However, you cannot put two ( -- ) next to each other to unflip the sign, as that’s parsed as the decrement operator.
// Instead, you would need to do - -"3.14" with a space in between and that would result in coercion to 3.14 .

// 3.14.toString();
// toString boxed to its object type and then convert to string 

// Date to number
// +new Date(); // timestamp in ms

// Curious case of ~
// ~ bitwie not 
// In JS bitwise operation happened in 32 bits 
// so when we perform ~ it confirms operand to 32 bits first 

0 | -0 // 0
0 | NaN // 0
0 | Infinity // 0
0 | -Infinity // 0
// As in JS number are 64 bits so with bitwise operator Js first convert it to 32 integer so it becomes 0
// ** The ~ operator first “coerces” to a 32-bit number value, and then performs a bitwise negation (flipping each bit’s parity).
// ** ~x is roughly the same as -(x+1)
// var fN = 'Hello World';
//* ~fN.indexOf('ol') => 0 falsy because ~x = -(x+1) => -(-1+1) => 0 => falsy

// Math.floor(-49.6); // -50
// ~~-49.6 // 49

// * Explicitly: Parsing Numeric String:
// var a = "42";
// var b = "42px";

// Number(a); // 42
// Number.parseInt(a); // 42

// Number(b); // NaN
// Number.parseInt(b); // 42

// ** Number.parseInt() //For non string type value, first in convert to string then convert to number
// example: 
// parseInt( 1/0, 19 ); // 18
// here 1/0 will convert to string so it become "Infinity" and then "Infinity"'s "I" to 19 base is 18.
// var a = {
//     num: 21,
//     toString: function () {return String(this.num * 2);}
// };
// parseInt(a); // 42

// Number.parseInt([1,2,3]); // first string [1,2,3] => "1,2,3" then to Number => 1
// parseInt take second argument as base.


// Explicite Boolean:
// as + uneary operator convert string to Number
// "!" operator conver to boolean

// "!"" acutally coearce to boolean and flip the sign
// so we need "!!" for.. 

// var a = "0";
// Boolean(a);
// !!a; // true

// * Implicit Coearsion 
// Implicitly String <-> Number

// For normat operands If either operand is string then + operator works as concatination otherwise plus in Math.
// It’s a common misconception that the difference is whether one or both of the operands is
// a string , as that means + will assume string concatenation. While that’s partially true, it’s more complicated than that
var a = [1, 2];
var b = [3, 4];
a + b; // "1,23,4"
// Neither of these operands is a string , but clearly they were both coerced to string s and then the string concatenation kicked in. So
// what’s really going on?

// According to the ES5 spec, section 11.6.1, the + algorithm (when an object value is an operand) will concatenate if either operand is
// either already a string, or if the following steps produce a string representation. So, when + receives an object (including array ) for
// either operand, it first calls the ToPrimitive(first valueOf is present otherwise toString) abstract operation (section 9.1) on the value, which then calls the [[DefaultValue]] 
// algorithm (section 8.12.8) with a context hint of number .

// ** It is identical like ToNumber operation first it check valueOf if it returns a primitive that use otherwise call
// toString.

// var a = 42;
// (a +"") vs String(42):
// a + "" invokes valueOf first, whose return value is then finally converted to a String via internal
// toString abstract operation but String(a) just invoke toString()

// var a = {
//     valueOf: function() {
//         return 42;
//     },
//     toString: function() {
//         return 4;
//     }
// }

// a + ""; // "42"
// String(a); // "4"


// - convert string to number and perform arithmatic operation
// [3] - [2]; // 1
// as + is overloaded but - is only Math minus operation hence string is also converting to number and then
// First they coersed to string then coearsed to Number;


// Implicitly: Boolean <=> Numbers:
// Boolean implicit coercion automatically happend in these places
// if(), while, do while, for, ?

// Operators || and && Short Circuit:
// It's a operand selector operator
// Value produces via && and || operator is always one of the operand from two operand 
// var a = 42;
// var b = "abc";
// var c = null;
// a || b; // 42
// a && b; // "abc"
// c || b; //"abc";
// c && b; //null

// ** || operator skips all falsy value; Short circuit operator


// **
// var a = 42;
//  var b = null;
//  var c = "foo";

//  if (a && (b || c)) {
//      console.log("yep");
//  }
//  provided a && (b || c) results to "foo" and eventually "foo" result to true as truty value 


// * Symbol Coersion:
// explicit coercion of a symbol to a string is allowed, but implicit coercion of the same is disallowed and throws an error
// symbol values cannot coerce to number at all (throws an error either way), but strangely they can both explicitly and implicitly 
// coerce to boolean (always true ).


// ** == and ===:
// A very common misconception about these two operator is "==" checks the value only for equality and "===" checks both value and types for 
// comparision. While that sound nice and resonable, It's inaccurate. 
// Countless well repected JS books and blogs have said exaclty the that, but unfortunatily they are all wrong.

// ** == ALLOW COERSION FOR IN THE EQUALITY COMPARISION AND === DOES NOT. 
// There is no reason for saying which one is more performant both of them, It should be just if you want comparision 
// allow coersion then use == otherwise ===


// compatision algo:
// if type are same then it campare naturally like 42 is equal to 42
// Minor exception
// NaN will never equal to NaN; NaN is only type that is not reflexive
// +0 are equal to -0

// The final provision in clause 11.9.3.1 is for == loose equal it
// if operands are Object(function, array) then it check the reference to same object or not 
// It’s a very little known fact that == and === behave identically in the case where two object s are being compared!

// In loose comparision coersion first to make both the operand same type then compare the values

// ** Comparing string and number using ==:
// in == string operand will coersed to number then comparision take place

// ** comparing anything with boolean via ==:
// var a = "42";
// var b = true;

// a == b; // false; strang

// but if Type(x) is Boolean return the result of the operation ToNumber(x) == y;
// if Type(y) is Boolean return result of the operation x == ToNumber(y)
// and that is why a == b was false dispite "42" is truthy value 


// ** Comparing null and undefined
// null == undefined; // true

// var a = null;
// var b;
// a == b;  //true
// a == null' // true

// a == false; // false
// a == 0; // false
// a == ""; // false;

// b == false; // false
// b == 0; // false
// b == ""; // false;

// so:
// var a = doSomething();
// if (a == null) {
//     console.log("Run is a is undefined or null");
// } // this code is better than

// if (a === undefined || a === null) // == code was better that this one.


// ** comparing: objects to non objects
// Is Object/Function/Array compared with primitive(string, number, boolean) Then 
// if Type(x) is either string or number and Type(y) is Object then return x == ToPrimitive(y)
// if Type(y) is either string or number and Type(x) is Object then return y == ToPrimitive(x)
// var a = 42;
// var b = [42];
// a == b; // true: b coearse via ToPrimitive and call valueOf or ToString that return "42" and 42 will become 42 then


// var a = "abc";
// var b = Object(a);
// a === b; // false
// a == b; // true

// null and undefined can not wrapped but they have Object equivalent Object(null), Object(undefined);

// ** Edge Cases:
// Number.prototype.valueOf = function () {return 3;} // very bad idea
// new Number(200) == 3; // true

// more evil
// if (a == 2 && a == 3) {
//     console.log('Can this code run? Is it possible');
//     console.log('Answer is yes!');
// }
// ---
// var i = 2;
// Number.prototype.valueOf = function () {
//     return i++;
// }
// var a = new Number(42);
// if (a == 2 && a == 3) {
//     console.log('What, This code runs. It is an evil');
// }

// ** Falsy Comparision
// "0" == null; // false
// "0" == undefined; // false
// "0" == false; // *false
// "0" == NaN; // false
// "0" == 0; // true
// "0" == ""; //false

// false == null; // false
// false == undefined; // false
// false == NaN; // false
// false == 0; // true
// false == ""; //true
// false == []; // true
// false == {}; // false
// ... Page 110


// The creazy ones:
// [] == ![]; // ! coerse to boolean, [] become true and !makes it false and and we have seen false == [] is true
// 2 == [2]; true;
"" == [null]; // [null].toString is "" so its true



// Chapter 5:

// * `foo` labeled-loop
// foo: for (var i = 0; i < 4; i++) {
//     for (var j = 0; j < 4; j++) {
//         // whenever the loops meet, continue outer loop
//         if (j == i) {
//             // jump to the next iteration of
//             // the `foo` labeled-loop
//  *           continue foo; // or break foo;
//         }
//         // skip odd multiples
//         if ((j * i) % 2 == 1) {
//             // normal (nonlabeled) `continue` of inner loop
//             continue;
//         }
//         console.log(i, j);
//     }
// }

[] + {}; // [Object Object] first evaluated [] that result using ToPrimitive "" then expression '+ {}' coersed to number and result [Object Object]
{ } +[]; // 0 first evaluate {} that result that is empty and then expression "+[]" coersed to 0 so result is 0
