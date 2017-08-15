/**
 * ES6 - Arrow function
 * Leave out the word FUNCTION
 */

var square = (x) => {
    var result = x * x;
    return result;
};

/**
 * if you have only one statement, you don't need curly braces
 * if you have only one argument, you don't need parentesis (but zero or more than one need them) 
 */
var squareRoot = x => Math.sqrt(x);

console.log(square(9));
console.log(squareRoot(9));


var user = {
    name: 'Fred',
    /**
     * Arrow functions bind no this object, inside it, you only use the global this.
     * Therefore, sayHi will give an undefined result.
     * The arguments printed in here are also from the global scope, not the arguments passed in 
     * to this arrow function
     */
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    /**
     * ES6 provides a new way to access this from an object to be used inside a function 
     * that belongs to an object literal, like this one (no need for colons). It's a common ES5 function.
     * The difference is that, if you want the same name of the value for the property, you don't need to 
     * specify the property.
     */
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
};

user.sayHi(1, 2, 3);
user.sayHiAlt(1, 2, 3);
