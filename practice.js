'use strict';
var Fib = {
    [Symbol.iterator]: function () {
        var n1 = 1, n2 = 2;
        return {
            [Symbol.iterator]() {return this;},
            next() {
                var current = n2;
                n2 = n1;
                n1 = n1 + current;
                const var0 = Math.random();
                console.log('random', var0);
                if (var0 > 0.6) return {value: current, done: true}
                return {value: current, done: false}
            },
            return(v) {
                console.log('Done');
                return {value: v, done: true}
            }

        }
    }
}

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
