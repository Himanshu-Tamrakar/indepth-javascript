'use strict';

// var var0 = 'Hey, I am outer scope';
// function bucketOfMarbles(marbles) {
//     console.table(this, `Hey, I got ${marbles}`);
//     var var1 = `Hey, I am bucket marble scope`;

//     var var2 = `Hey, I am bucket marble scope two`;

//     {
//         let var3 = 'Hey, I am block scope';
//         let shadowVar1 = 'Hey, I am shadow of var 1';
//         let var0 = 'Hey, I am shadow of var 0';

//     }

//     {
//         let var4 = `Hey, I am block scope two`;
//     }

// }


// Clousure 1
// console.log('Hey ther', isPrime);

// var isPrime = (function isPrime() {

//     var primes = {};

//     return function isPrime(v) {
//         if (v in primes) {
//             return primes[v];
//         }

//         if (v <= 3) {
//             return (primes[v] = v > 1);
//         }

//         if (v % 2 == 0 || v % 3 == 0) {
//             return (primes[v] = false);
//         }

//         var vSqrt = Math.sqrt(v);

//         for (let i = 5; i <= vSqrt; i += 6) {
//             if (v % i == 0 || v % (i + 2) == 0) {
//                 return (primes[v] = false);
//             }
//         }
//         return ((primes[v] = true));
//     }
// })();


// var factorize = (function factorize(v) {
//     var factors = {};

//     return function findFactors(v) {
//         if (v in factors) {
//             return factors[v];
//         }

//         if (!isPrime(v)) {
//             let i = Math.floor(Math.sqrt(v));
//             while (v % i != 0) {
//                 i--;
//             }

//             return (factors[v] = [...findFactors(i), ...findFactors(v / i)]);
//         }
//         return (factors[v] = [v]);
//     }
// })();

// console.log(factorize(2048));

