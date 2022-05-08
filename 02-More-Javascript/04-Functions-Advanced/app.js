// Callback Functions, Higher Order Functions, Functions as first class objects/citizens

// Functions are first class objects - stored in a variable (expression),
// passed as an arguments to another function, return from the function (closure)

// Higher Order Function - a function that can take another function as an argument or returns function as a result (closure)

// Callback Functions - a function passed to another as an argument and executed inside that function

// ? These are callback function
function mrngText(name) {
    return `Wish you a very good morning ${name.toUpperCase()}`;
}

function afrnText(name) {
    return `Wish you a very good afternoon ${name.repeat(3)}`;
}

// ? This is Higher Order Function
function greeter(name, cb) {
    const myName = "John";
    console.log(`${cb(name)}, my name is ${myName}`);
}

// ! DO NOT INVOKE CALLBACK FUNCTION HERE
greeter("Benji", mrngText);
greeter("Marko", afrnText);
