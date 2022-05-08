// Variables let us store, access, modify values
// Variables can be changed : var, let
// Contants can not be changed : const

// block of code
{
    var global = "global: i am at top";
    let local = "local: i am below global";

    console.log(global);
    console.log(local);
}

// global variables are global scoped they are accessible anywhere
console.log(global);

// local variables are accessible only in declared block
try {
    console.log(local);
} catch {
    console.log("error");
}

// variables can be changed
global = "global: I changed global";
console.log(global);

// constant cannot be changed anywhere in the program
const constant = "constant: i do not change";
console.log(constant);
try {
    constant = "Welp!";
} catch {
    console.log("error");
}

// Rules for naming variables
/*
    1. Can contain digit, letters, underscore, dollar sign, etc.
    2. Must start with a letter or $ or _
    3. Cannot start with a number
    4. No keyword(reserved words of javascript i.e. let, const, console, try, etc.)
    5. Variables are case sensitive
    6. Common variable style : camelCase or under_score
*/

// Lets talk about quotes, '' or "" ?
// Single and double quotes does not affect program, use what you like

// escape sequence: they tell program to ignore whats next to them
// prettier-ignore
let escapeQuote = 'Javascript\'s use case is very broad'
console.log(escapeQuote);
// here we are ignoring single quote without using escape sequence but using double quotes
escapeQuote = "Javascript's use case is very broad";
console.log(escapeQuote);

// String concat
const PI = 3.1415;
// ! using quotes
console.log("PI = " + PI);
// ? using template strings
console.log(`PI = ${PI}`);

// Numbers
// They are loosely types in Javascript
const int = 5;
const float = 5.5;
// notice both are of same type  = number
console.log(typeof int);
console.log(typeof float);

// ! CASE WHEN NUMBERS ARE STORED AS STRING
const char = "5";
console.log(typeof char); // string
// if you add char & int it will be concatnated
console.log(int + char); //55
// there is a way to change type of variable to number if it conly contains number
// This way is given name of Implicit Type conversion
// Javascript interpreter auto determines and converts data types
console.log(typeof (char * 1)); // number
// adding char and int using the same way
console.log(char * 1 + int); //10
// Explicit Conversion : explicitly tell javascript interpreter to convert type
console.log(parseInt(char) + float);

// Number Operations
console.log(int + float);
console.log(int - float);
console.log(int % 5); // remainder

let num = 10;
console.log((num += int)); // num = num + int
console.log((num -= int)); // num = num - int
console.log((num *= int)); // num = num * int
console.log((num /= int)); // num = num / int
console.log(++num); // num = num + 1
console.log(--num); // num = num - 1

// NOTE: Javascript also follows BDMAS
