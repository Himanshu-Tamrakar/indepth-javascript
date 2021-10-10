'use strict';
function Foo() {
}
Foo.prototype.firstName = 'Himanshu Tamrakar';
var a = new Foo();

function Bar() {

}

Bar.prototype = {};
var b = new Bar();

console.log(a, b);

// function Student() {

// }

// Student.prototype.firstName = 'Himanshu';

// var obj = new Student();


// // obj.firstName = 'Tamrakar';
// console.log(obj);

// Object.defineProperty(Student.prototype, 'firstName', {
//     writable: false
// })

// console.log(Object.getOwnPropertyDescriptor(Student.prototype, 'firstName'));
// obj.firstName = 'Tamrakar1';
// console.log(obj);
// function doSomething(id, name) {
//     var fisrtName = 'Himanshu';
//     function doSomething1() {
//         console.log(this);
//     }
//     return doSomething1;
// }

// var returnFromDoSomething = doSomething();

// function doSomething2() {
//     var firstName = 'Tamrakar';
//     returnFromDoSomething.call(firstName);
// }
// doSomething2();

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

// 'use strict';
// var Fib = {
//     [Symbol.iterator]: function () {
//         var n1 = 1, n2 = 2;
//         return {
//             [Symbol.iterator]() {return this;},
//             next() {
//                 var current = n2;
//                 n2 = n1;
//                 n1 = n1 + current;
//                 const var0 = Math.random();
//                 console.log('random', var0);
//                 if (var0 > 0.6) return {value: current, done: true}
//                 return {value: current, done: false}
//             },
//             return(v) {
//                 console.log('Done');
//                 return {value: v, done: true}
//             }

//         }
//     }
// }

// console.log(Fib);
// ([...Fib]);
// console.log();
// var arr = Array.from(Fib);
// console.log(arr);



// class Foo {
//     constructor (a, b) {
//         this.x = a;
//         this.y = b;
//     }
//     gimmeXY() {
//         return this.x * this.y;
//     }

//     static doSomething() {
//         console.log(`I am a static method in FOO`);
//     }
// }

// var o1 = new Foo();
// Foo.doSomething()
// console.log('o1', o1);

// class Bar extends Foo {
//     constructor (a, b, c) {
//         super(a, b);
//         this.z = c;
//     }
//     gimmeXYZ() {
//         return super.gimmeXY() * this.z;
//     }
// }

// var obj = new Bar(1, 2, 3);
// console.log(obj);
// for (const iterator of Fib) {
//     console.log(iterator);
//     // if (iterator > 50) {
//     //     break;
//     // };
// }






// var testData = {
//     "type": "CONDITION",
//     "operator": "OR",
//     "statements": [
//         {
//             "type": "EXPRESSION",
//             "operator": ">",
//             "lOperand": {
//                 "display": "10",
//                 "type": "Operend",
//                 "subType": "data",
//                 "value": "var(emp.age)"
//             },
//             "rOperand": {
//                 "display": "11",
//                 "type": "Operend",
//                 "subType": "data",
//                 "value": 21
//             }
//         },
//         {
//             "type": "CONDITION",
//             "operator": "AND",
//             "statements": [
//                 {
//                     "type": "EXPRESSION",
//                     "operator": "<",
//                     "lOperand": {
//                         "display": "10",
//                         "type": "Operend",
//                         "subType": "data",
//                         "value": "var(emp.age)"
//                     },
//                     "rOperand": {
//                         "display": "11",
//                         "type": "Operend",
//                         "subType": "data",
//                         "value": 21
//                     }
//                 },
//                 {
//                     "type": "EXPRESSION",
//                     "operator": ">",
//                     "lOperand": {
//                         "display": "50",
//                         "type": "Operend",
//                         "subType": "data",
//                         "value": "var(emp.age)"
//                     },
//                     "rOperand": {
//                         "display": "10",
//                         "type": "Operend",
//                         "subType": "data",
//                         "value": 21
//                     }
//                 }
//             ]
//         },
//         {
//             "type": "EXPRESSION",
//             "operator": "==",
//             "lOperand": {
//                 "display": "10",
//                 "type": "Operend",
//                 "subType": "data",
//                 "value": "var(emp.age)"
//             },
//             "rOperand": {
//                 "display": "10",
//                 "type": "Operend",
//                 "subType": "data",
//                 "value": 21
//             }
//         }
//     ]
// }

// getQuery()
// function getQuery() {
//     var obj = {
//         "type": "CONDITION",
//         "operator": "AND",
//         "statements": [
//             {
//                 "type": "EXPRESSION",
//                 "operator": "!=",
//                 "lOperand": {
//                     "display": "10",
//                     "type": "string",
//                     "subType": "",
//                     "value": ""
//                 },
//                 "rOperand": {
//                     "display": "11",
//                     "type": "string",
//                     "subType": "",
//                     "value": ""
//                 }
//             },
//             {
//                 "type": "EXPRESSION",
//                 "operator": ">=",
//                 "lOperand": {
//                     "display": "19",
//                     "type": "integer",
//                     "subType": "",
//                     "value": ""
//                 },
//                 "rOperand": {
//                     "display": "10",
//                     "type": "integer",
//                     "subType": "",
//                     "value": ""
//                 }
//             },
//             {
//                 "type": "CONDITION",
//                 "operator": "OR",
//                 "statements": [
//                     {
//                         "type": "EXPRESSION",
//                         "operator": "<",
//                         "lOperand": {
//                             "display": "4",
//                             "type": "integer",
//                             "subType": "",
//                             "value": ""
//                         },
//                         "rOperand": {
//                             "display": "20",
//                             "type": "integer",
//                             "subType": "",
//                             "value": ""
//                         }
//                     },
//                     {
//                         "type": "EXPRESSION",
//                         "operator": "<",
//                         "lOperand": {
//                             "display": "100",
//                             "type": "integer",
//                             "subType": "",
//                             "value": ""
//                         },
//                         "rOperand": {
//                             "display": "101",
//                             "type": "integer",
//                             "subType": "",
//                             "value": ""
//                         }
//                     }
//                 ]
//             }
//         ]
//     }

//     var res = {query: ""}
//     objToQuery(obj, res);
//     console.log(res);
// }


// ((10 > 11) OR ((10 < 11) AND (50 > 10)) OR (10 == 10))
// ((10 > 11) OR ((10 < 11) AND (50 > 10)) OR (10 == 10))
// function objToQuery(queryObj, res) {
//     var type = queryObj.type;
//     res.query += "("
//     if (type === 'CONDITION') {
//         queryObj.statements.forEach((query, i) => {
//             objToQuery(query, res);
//             if (i < queryObj.statements.length - 1) {
//                 res.query += " " + queryObj.operator + " ";
//             }
//         });
//     } else {
//         res.query += queryObj?.lOperand.display;
//         res.query += " " + queryObj?.operator + " ";
//         res.query += queryObj?.rOperand.display;
//     }
//     res.query += ")";
// }