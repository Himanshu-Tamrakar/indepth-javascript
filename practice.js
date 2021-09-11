'use strict';

var person = {
    isHuman: false,
    introduce: function () {
        console.log(`My name is ${this.name}, Am i human?: ${this.isHuman}`);
    }
}


var me = Object.create(person, {
    name: {
        value: 'Himanshu Tamrakar',
        enumerable: true,
        writable: true,
        configurable: true
    },
    isHuman: {
        value: true
    }
});

console.log('Hey', me);
console.log(me.isHuman);
console.log(me.introduce());

var oco = Object.create({});   // create a normal object
var ocn = Object.create(null);

console.log(oco, ocn);

var ob = {}; ob.po = oco; ob.pn = ocn;

function ShowProperties(obj) {
    for (var prop in obj) {
        console.log(prop + ": " + obj[prop] + "\n");
    }
}

ShowProperties(ob)