'use strict';
var p = new Promise((resolve) => setTimeout(() => resolve('1'), 0))
Promise.resolve(p).then(function fullfilled(params) {
    console.log(params);
})



Promise.resolve(2).then(function fullfilled(params) {
    console.log(params);
})



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