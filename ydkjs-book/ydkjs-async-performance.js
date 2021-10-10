// **Chapter 1:
// A program in chunks:
// You may write your JS program in one.js File, but your program is almost certainly comprised of 
// several chinks, only once of which is going to execute now, and the rest of which will execute later.
// Most common chunk is function.

// Anytime you wrap a portion of code into a function and specify that it should be executed in respose to some event like 
// timer, event, ajax respose, etc, you are creating a later chunk of your code, and thus introducing asynchony to your program

// Console is browser implemention and I/O could delay in some browser


// *Event Loop:
// Let's make a claim: despite your clearly being able to write asynchronous JS code(like timers), up untill recently ES6 JS itself has
// actully never had any direct notion of asynchrony built into it.
// What! that seems a crazy clearTimeout. Infact its quite true. The Js engine itself has never done anything that execute a single chunk
// of your program at any moment. 
// So By whome then?
// The JS engine does not run in solation. Is runs inside a hosting environment, which is for most edvelopers the typical browser. 

// But the one common thread, all the environments where JS engine present has machanism to run multiple chunks of programs over 
// TimeRanges, at each moment invoking the Js engine to called the event loop.

// In other words, the JS engine has had no innate sense of time, but has instead been an on demand execution environment for any 
// arbiitarary snippet oj JS. Its the surrounding environment that has always scheduled events 
// Page: 6 for more 

// settimeout tell that piece of code will always run after given time not at exact given time due to callback queue
// (long running task present in JS engine or queue is contains next tasks

//*Parallel Threading:
// It’s very common to conflate the terms “async” and “parallel,” but they are actually quite different. Remember, async is about the gap
// between now and later. But parallel is about things being able to occur simultaneously

// Javascript is single threaded behaviour

// Parallel threading brings non determinism hugely but async is also non deterministic but not as parallel programming because
// js does not share memmory between threads
// JavaScript never shares data across threads, which means that level of nondeterminism isn’t a concern. 
// But that doesn’t mean JS is always deterministic

// function-ordering non determinism is race conditions

// Concorancy:
// Page: 13 book
// Concorancy as task level as compare to operation level 
// You can think of concurrency then as “process”-level (or task-level) parallelism, 
// as opposed to operation level parallelism (separate-processor threads).


// Coorporation:
// Jobs:
// *As of ES6, there's a new concept layered on the top of event loop queue called the job queue. the most likely exposure you will have to 
// it is with the asynchronous behaviour of Promise. 

// The event loop is like amusement park ride. one you finish the ride you have to go to the end of the line to take ride again and again
// where the jobs queues finishing the ride and cutting the line and getting right back on

// A job can also cause more jobs to add jobs end of the same queue and that could spin infinetly. thus starving the program of the ability
// to ove on to the next event loop tick.

// Jobs happens at the end of the currnt event loop tick, and the timers fires to schedule for the next event loop tick. 

// Js engine reorder the statements for optimization purpose without effecting result

// Review:
// ** Whenever there are events to run, the event loop runs until the queue is empty. Each iteration of the event loop is a tick. User inter‐
// action, IO, and timers enqueue events on the event queue.At any given moment, only one event can be processed from the 
// queue at a time. While an event is executing, it can directly or indirectly cause one or more subsequent events.



// Chapter 2:
// Callbacks are fundamental unit of asynchrony in JS but they are not enough land scape of async programming as JS matures.

// First our brains plan things out in sequencial, blocking, single threded sentic ways but callbacks express asynchronous flow in a 
// rather non linear, non sequencial, way whick makes reasoning properly about such code much harder. Hard to reason code is bad code.

// We need a way to express asynchrony in a more synchronous, sequencial, blocking, manner, just like out brain do.

// Second callback suffer inversion of control(trust issue) give control to other programe.callback

//  ad hoc logic to solve trust issue is possible but its more difficult than it should be and it produces code that is clunkier, 
// harder to maintain, and likely issuffient protected from these hazzareds

// We need generalized solution for all the trust issues

// We explored the terminology and concepts around asynchronous programming in JSON. Our focus is under standing single threaded event loop queue that drive all the events.
// We also explored various vays of concorancy patterns explaiin the relationships between simultaneously running chains of events ot processes.


// Our higher level brain functionality have parallel multi tasking? answer is no. Its fast context switching.



// AudioListener('click', function() {
//     setTimeout(function() {
//         ajax('url', function(text) {
//             if (text === 'true') {}
//             else {}
//         })
//     }, 1000)
// })
// Callback hell:
// 

// Callback is easy and obious solution for async programming in JS, but callback have lots of issues:
// 1. inversion of control(trust issue). part of programe handle by other part of programe and in some cases you do not have direct access to that code that is handing your code 
// If you are giving control to other part of program then that might be chances that your callback call many Times,
// To Early,
// Too Late,
// Never called your function,
// swallowed error and many more
// Difficuly to track down the errors


// To handle these problem then you have to write some boiler plate code that handle certain situation and you have to do it for all callbacks

// This non determinism around the sync or async behaviour is almost always going to very difficult to track down bugs. In some circle fictional nsanityy inducing monster naed Zaglo.

// Read Zaglo: Golan's "Dont release Zaglo" // https://oren.github.io/articles/zalgo/
// Read: Isaac Z. "Designing APIs got Asynchrony" //https://blog.izs.me/2013/08/designing-apis-for-asynchrony
// https://izs.me/resume.html


// Chapter 3:
// We know callback has two deficiencies for async management.
// 1. Sequencibility
// 2. Trust(Inversion of control) [Cover First]
// Promise is like: fast food counter => order => token(Promise) => When token number calls back from counter we either get the cheese burger or get we are out of cheese burger
// Now and Later Vlues: Now is when we create a promise we  get a promise and later we get the value when promise resolved or reject.
// Promises are immutable.

//
// https://www.uuidtools.com/api/generate/v1
//
// Promise behaves as future value.

// Promise Events:
// fullfilled, reject


// Thenable duck typing:
// given a promise constructed by new Promise(...), 
// p instanceof Promise is not sufficient to check for Promise there are number of reasons: 

// We can recieve promise from another window/iframe that would have it own promise different from the current window,
// Moreover a library or framwork may choose to vend  its own Promises and not use the native ES6 Prmse implementation

// Any object can have then method, that can look like a promise,

// The general term for type checks that make assumptions about a value's type based on its shape(what properties are present) is called duck typing.

// if (
//     p !== null &&
//     (typeof p == 'object' || typeof p === 'function') &&
//     typeof p.then === 'function'
// ) {
//     // Its a thenable
// } else {
//     // It's not thenable
// }


// Promise Trust:

// Calling To Early: 
// Primarily, this is a concern of whether code can introduce Zalgo- like effects (see Chapter 2), where sometimes a task finishes syn‐
// chronously and sometimes asynchronously, which can lead to raceconditions. Promises by definition cannot be susceptible to this concern,
// because even an immediately fulfilled Promise (like new Promise(function(resolve){ resolve(42); }) ) cannot be
// observed synchronously. That is, when you call then(..) on a Promise, even if that Promise
// was already resolved, the callback you provide to then(..) will always be called asynchronously
// Immediatly fulfilled promise like
// var p = new Promise(function (resolve, reject) {
//     resolve(42);
// }

// Calling Too late:
// Similarly until resolve or reject is not called, even though .then(...) is registed, It will not call the then(...) callback 

// Watch Case: 

// var p3 = new Promise(function (resolve, reject) {
//     resolve('B');
// })

// var p1 = new Promise(function (resolve, reject) {
//     resolve(p3);
// })

// var p2 = new Promise(function (resolve, reject) {
//     resolve("A");
// })

// p1.then(function (res) {
//     console.log(res);
// })

// p2.then(function (res) {
//     console.log(res);
// })

// A B not B A 
// We’ll cover this more later, but as you can see, p1 is resolved not
// with an immediate value, but with another promise p3 , which is
// itself resolved with the value "B" . The specified behavior is to
// unwrap p3 into p1 , but asynchronously, so p1 ’s callback(s) are
// behind p2 ’s callback(s) in the asynchronus Job queue (see “Jobs” on
// page 23).

// Never Calling the callback

// function foo() {
//     return fetch('https://www.uuidtools.com/api/generate/v1');
// }
// function timeoutPromise(delay) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             reject('Timeout!')
//         }, delay);
//     })
// }

// Promise.race([
//     foo(),
//     timeoutPromise(1000)
// ]).then(function (res) {
//     return res.json()
// }, function (err) {
//     console.log('err', err);
//     return err;
// }).then(function (res) {
//     console.log('res1', res);
// })



// Calling T few and Too Many Time"
// Promise only filfilled or reject once

// Failing to pass Along and Parameter/Environment:
// on reject or resolve, only first argument is considered rest just ignored

// Swallowing Errors and Exceptions:
// var p = new Promise(function (resolve, reject) {
//     foo.bar(); // Exception
//     resolve(42);
// })

// p.then(
//     function (success) {
//         console.log(success);
//     },
//     function (error) {
//         console.log('Error', error); // This run because foo.bar() gives reference error
//     }
// )
// Another Zalgo solved, promise even make errors(Exceptions) into asynchronous behaviour.



// iF YOU PASS an immediate, non-Promise, non-thenable,value to Promise.resolve(), you will get a promise that's filfilled with that value.
// var p = new Promise(function(resolve, reject) {
//     resolve(42);
// })
// var p2 = Promise.resolve(42);
// p and p2 are Promise;

// But if you pass a genuine Promise to Promise.resolve(...), you just get the same promise back. 
// var p1 = Promise.resolve(23);
// var p2 = Promise.resolve(p1);
// p1 == p2; // true

// ** Even more importantly, if you pass a non Promise thenable value to Promse.resolve(...), it will attempt to uwrap that value and the unwrapping 
// ** will keep going until a concreate final non promise like value is extracted

// var p = {
//     then: function (cb) {
//         cb(42);
//     }
// }
// p.then(
//     function fullfilled(val) {
//         console.log(val);
//     }, 
//     function rejected(err) {
//         // never goes here
//     }
// )

// even 

// var p = {
//     then: function (cb, errcb) {
//         cb(42);
//         errcb('evil laugh!')
//     }
// }
// // p.then(
// //     function fullfilled(val) {
// //         console.log(val);
// //     },
// //     function rejected(err) {
// //         console.log(err);
// //     }
// // )

// // now 

// Promise.resolve(p)
//     .then(
//         function fullfilled(val) {
//             console.log(val);
//         },
//         function rejected(err) {
//             // never gets here
//         }
//     )


// Chain Flow:
// ** Every time we call then(...) on a Promise, it creates and return a new Promise, which can be chained with
// ** Whatever value return from then(...) call's fullfillment callback(the first parameter) is automatically set as the fulfillment of the chained Promise.

// var p = Promise.resolve(31)
// p.then(
//     function (v) {
//         console.log(v);
//         return v * 2; // Mean a Fulfilled value like Promise.resolve(..)
//     })
//     .then(function (res) {
//         console.log(res);
//     })

// but what if we want step 2 to wait for step 1:

// var p = Promise.resolve(31)
// p.then(
//     function fulfilled(v) {
//         console.log(v);

//         return new Promise(function (resolve, reject) {
//             setTimeout(function () {
//                 resolve(4 * v);
//             }, 2000)
//         })
//     }
// )
//     .then(
//         function fulfilled(val) {
//             console.log(val);
//         },
//         function rejected(err) {
//             console.log('hey reject');
//         }
//     )


// function getPromise() {
//     return fetch('https://www.uuidtools.com/api/generate/v1');
// }
// var p = Promise.resolve(31)
// p.then(
//     function fulfilled(v) {
//         console.log(v);
//         return getPromise();
//     }
// )
//     .then(
//         function fulfilled(val) {
//             return val.json();
//         },
//         function rejected(err) {
//             console.log('hey reject');
//         }
//     )
//     .then(
//         function fulfilled(val) {
//             console.log(val);
//         }, function rejected(err) {
//             console.log(err);
//         }
//     )


// ** If error handler is not present in then then default handler is used like
// function(err) {
//     throw err
// }
// ** Same if fulfilled handler is not present then default hhandler is use like
// function(v) {
//     return v;
// }

// Review intrinsic behaviour of promise chain:
// then call against Promise automatically return a new promise.
// Inside the fulfilled/rejection handlers, if you return a value or an exception is thrown, the new returned (chainable) Promise is resolved accordingly
// If the fulfillment or rejection handler returns a Promise, it is unwrapped so that whatever its resolution is will become the resolution of the chained Promise returned from current chained promise

// Promises normalizes asynchrony and encalsulate time dependent value state, and that is what lets us chhain them togther in this useful way.

// try catch does not work for async code: 

// var p1 = {
//     then: function (cb, errcb) {
//         cb(42);
//         errcb('evil laugh!')
//     }
// }


// var p1 = fetch('https://www.uuidtools.com/api/generate/v1');
// var p = Promise.resolve(32);
// p.then(
//     function fulfilled(val) {
//         console.log(val.toLowerCase());
//     }
// ).catch(
//     function handleError(err) {
//         console.log(err);
//     }
// )

// var p = new Promise(function (resolve, rejected) {
//     resolve(p1);
// })
// // console.log(p, p1); // false

// // var p = Promise.resolve(p1);
// //  console.log(p == p1); // true

// p.then(function (res) {
//     res.toLowerCase();
//     return res.json();
// }).then(function (res) {
//     console.log(res);
// }).catch(function (err) {
//     console.log(err);
// })



// Static methods:
// Promise.all()
// It is use for when you want multiple promise are fulfilled not necessarly in some order but just fulfilled all.
// Accepts array<iterable> of promises, thenables, or immediate values. 
// if array is empty main promise fulfilled immediatly
// Each value in the array is passed through Promse.resolve(...)

// if any promise reject then Promise.all rejects.

// var promises = [
//     fetch('https://www.uuidtools.com/api/generate/v1'),
//     fetch('https://yesno.wtf/api'),
// ]

// var p = Promise.all(promises);
// p.then(
//     function (msgs) {
//         return Promise.all(msgs.map(res => res.json()));
//     }, function rejected(err) {
//         console.log(err);
//     }
// ).then(function (res) {
//     console.log(res);
// })


// Promise.race(...)
// Promise.all(...) coordinate multiple Promises concurrently and assumes all are need for fulfillment, sometimes you want to resond only to the first
// promise to cross the finish line and letting the other promises fall away

// Acceps array of promisses, thenables or immediate value.
// Passing immediate value is like a runner start from finish line itself so first value gets fulfilled
// Main promise reject if one promise rejects
// We can not pass empty array in the Promse.race(..), it will never fulfilled

// Promise.race(
//     [
//         timeoutPromise(),
//         fetch('')
//     ]
// )

// Promise.none(...) All promise needed to reject
// Promise.any(...) Igonore rejection, and need one fulfilled promise
// Promise.first(...) Ignore rejection and need the first one to fulfilled
// Promise.last(...) latesr fulfilled, like first

// Promises resolved once(fulfilled/rejected)
// Promise is not calcelable
// Promise performance: In race remain promise present in memory even though the become the part for GC


// function getPromise() {
//     return fetch('https://www.uuidtools.com/api/generate/v1');
// }

// var p = getPromise();

// p.then(
//     function handleResolve(res) {
//         return res.json();
//     },
//     function handleError(err) {
//         console.log(err);
//     }
// ).then(
//     function (res) {
//         console.log(res);
//     }
// )


// Chapter 4:
// Second problem callbacks was async sequencial flow...
// Now we turn our attention to expressing asynch flow control in sequencial looking fashion.

// ES6 introduced new type of function that does not behaves run to completion behaviour. This new type is called Generator.

// Example:
// var x = 1;
// function* foo() {
//     x++;
//     yield;
//     console.log("x: ", x);
// }

// function bar() {
//     x++;
// }

// var it = foo();
// it.next();
// console.log(x);
// bar();
// it.next();


// Example:
// function* foo(x, y) {
//     return x * y;
// }

// var it = foo(5, 6);
// var res = it.next();
// console.log(res); // {value: 30, done: true}

// yeild and next both the method can pass messages between
// Example:
// function* foo(x) {
//     var y = x * (yield);
//     return y;
// }

// var it = foo(5);
// it.next();
// var res = it.next(6);
// console.log(res); // {value: 30, done: true}

// Message can go in both direction
// Example:

// function* foo(x) {
//     var y = x * (yield "Hello");
//     return y;
// }

// var it = foo(5);
// var res = it.next();
// console.log(res); // {value: 'Hello, done: false}
// res = it.next(6);
// console.log(res);


// Multiple Iterator
// Example:
// function* foo() {
//     var x = yield 2;
//     z++;
//     var y = yield (x * 2);
//     console.log(x, y, z);
// }
// var z = 1;
// var it1 = foo();
// var it2 = foo();

// var it1Res = it1.next(); // {value: 2, done: false}
// var it2Res = it2.next(); // {value: 2, done: false}

// it1Res = it1.next(5).value; // {value: 10, done: false}
// it2Res = it2.next(10).value; // {value: 20, done: false}

// it1.next(it1Res); // 5, 10, 3
// it2.next(it2Res); // 10, 20, 3


// Interleaving:
// var a = 1;
// var b = 2;

// function* foo() {
//     a++;
//     yield;
//     b = b * a;
//     a = (yield b) + 3;
// }

// function* bar() {
//     b--;
//     yield;
//     a = (yield 8) + b;
//     b = a * (yield 2);
// }

// function step(gen) {
//     var it = gen();
//     var last;

//     return function () {
//         last = it.next(last).value;
//         return last;
//     }
// }

// var s1 = step(foo);
// console.log(s1()); // undefined
// console.log(s1()); // 4
// console.log(s1()); // undefined

// Generating Values:
// var gimmeSomething = (function () {
//     var nextVal;

//     return function () {
//         if (!nextVal) {
//             nextVal = 1;
//         } else {
//             nextVal = (3 * nextVal) + 6;
//         }
//         return nextVal;
//     }
// })();

// console.log(gimmeSomething());
// console.log(gimmeSomething());
// console.log(gimmeSomething());
// console.log(gimmeSomething());

// Generating Values from Iterator:
// iterator is common design pattern to stepping through values
// var something = (function () {
//     var nextVal;

//     return {
//         [Symbol.iterator]: function () {return this;},
//         next: function () {
//             if (nextVal == undefined) {
//                 nextVal = 1;
//             } else {
//                 nextVal = (3 * nextVal) + 3;
//             }
//             return {value: nextVal, done: false};
//         }
//     }
// })();
// console.log(something.next());
// console.log(something.next());
// for (const itr of something) {
//     console.log(itr);
//     if (itr > 500) break;
// }

// Default array comes wiith iterator but
// ES6 object does not come with default iterator


// Iterable:
// Iterable is an object that have ES6 special symbol value [Symbol.iterator];
// var a = [1,2,3,4,5];
// var it = a[Symbol.iterator]();
// it.next(); it.next()

// for..of expect something called iterable, so it looks for iterator function and in every iteration call next method

// Generator Iterator:

// function* something() {
//     try {
//         var nextVal;

//         while (true) {
//             if (nextVal == undefined) {
//                 nextVal = 1;
//             } else {
//                 nextVal = (3 * nextVal) + 3;
//             }
//             yield nextVal;
//         }
//     } finally {
//         console.log('I ran!');
//     }

// }

// var it = something();
// for (const v of it) {
//     console.log(v);
//     if (v > 500) {
//         it.return("")
//     }
// }

// for (const it of something()) {
//     console.log(it);
//     if (it > 500) break;
// }

// It is common to use while infinite loop because iterator pause the current function 
// break, return from for.. of exiting the generator function implicitrly

// we can explicitly stop the generator by calling it.return("") explicitly
// When we stop generator explicitly, finally block will run



// Iterating Generator Asynchronously:
// function getPromise() {
//     return fetch('https://www.uuidtools.com/api/generate/v1');
// }

// function foo() {
//     getPromise().then(function (res) {
//         return res.json()
//     }, function (err) {
//         it.throw(err);
//     }).then(function (res) {
//         it.next(res);
//     });
// }

// function* main() {
//     try {
//         var p = yield foo(); // ** look here; This is the solution for previously stated problem that callback is not squncial looking for asynchrony.
//         console.log(p);
//     } catch (err) {
//         console.error(err);
//     }
// }

// var it = main();
// it.next();

// ** With this nature we can handle asynchronous error using try and catch


// Generator + Promise:
// See Iterating Generator Asynchronously code

// Promise Aware Generator Runner like start eairlier:
//function getPromise() {
//     return fetch('https://www.uuidtools.com/api/generate/v1');
// }

// function* main() {
//     try {
//         var p = yield getPromise();
//         console.log(p);
//     } catch (err) {
//         console.error(err);
//     }
// }

// function run(gen) {
//     debugger
//     var args = [].slice.call(arguments, 1);

//     var it = gen.apply(this, args);

//     return Promise.resolve()
//         .then(function handleNext(value) {
//             var next = it.next(value);

//             return (function handleResult() {
//                 debugger
//                 if (next.done) {
//                     return next.value;
//                 } else {
//                     return Promise.resolve(next.value)
//                         .then(
//                             handleNext,
//                             function handleError(err) {
//                                 return Promise.resolve(it.throw())
//                                     .then(handleResult);
//                             }
//                         )
//                 }
//             })(next);
//         })
// }

// run(main);


// ** ES async await syntax:

// function foo() {
//     return fetch('https://www.uuidtools.com/pi/generate/v1');
// }

// async function main() {
//     try {
//         var text = await foo();
//         console.log(text);
//     } catch (err) {
//         console.log(err);
//     }
// }

// main();


// Promise Concurrency in Generators:
// fetch('https://www.uuidtools.com/api/generate/v1')
// fetch('https://yesno.wtf/api')

// function request(url) {
//     return fetch(url)
//         .then(function (res) {
//             res.json().then(function (res) {
//                 it.next(res);
//             })
//         })
// }

// function* foo() {
//     var p1 = request('https://www.uuidtools.com/api/generate/v1');
//     var p2 = request('https://yesno.wtf/api');

//     console.log(p1, p2);

//     var r1 = yield p1;
//     var r2 = yield p2;
//     console.log(r1, r2);


// }

// var it = foo();
// it.next();




// function request(promises) {
//     return Promise.all(promises).then(function (msgs) {
//         it.next(msgs)
//     })
// }
// function* foo() {
//     var results = yield request([
//         fetch('https://www.uuidtools.com/api/generate/v1'),
//         fetch('https://yesno.wtf/api')
//     ])

//     console.log(results);
// }

// var it = foo();
// it.next()


// Generator Delegation:
// function* foo() {
//     console.log("'*foo() starting");
//     yield 3;
//     yield 4;
//     console.log("'*foo finished");
// }

// function* bar() {
//     yield 1;
//     yield 2;
//     yield* foo(); // This is not yielding it just a delegation
//     yield 5;
// }

// var it = bar();

// var barRes = it.next();
// console.log(barRes);
// // value is 1

// barRes = it.next();
// console.log(barRes);
// // value is 2;

// barRes = it.next();
// // '*foo() starting
// console.log(barRes);
// // value is 3
// barRes = it.next();
// console.log(barRes);
// // value is 4;
// barRes = it.next();
// // *foo finished but not done
// // value is 5
// console.log(barRes);

// barRes = it.next();
// console.log(barRes);
// // value is undefined; and done


// Delegation Message:
// function* foo() {
//     console.log("inside *foo(): ", yield "B");
//     console.log("inside *foo(): ", yield "C");
//     return "D";
// }

// function* bor() {
//     console.log("inside *bar(): ", yield "A");
//     console.log("inside *bar(): ", yield* foo());
//     console.log("inside *bar(): ", yield "E");
//     return "F";
// }

// var it = bor();
// var res = it.next();
// console.log("outside: ", res.value);
// // outide: A


// res = it.next(1);
// console.log("outside: ", res.value);
// // inside *bar(): 1
// // outside: B

// res = it.next(2);
// console.log("outside: ", res.value);
// // inside *foo(): 2
// // outside: C

// res = it.next(3);
// console.log("outside: ", res.value);
// // inside *foo(): 3
// // inside *bar(): D
// // outside: E

// res = it.next(4);
// console.log("outside: ", res.value);
// // inside *bar(): 4
// // F


// Delegating Asynchrony:
// Delegating Recursion: