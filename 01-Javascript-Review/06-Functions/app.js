// Functions - can be declared, invoked,
// can take arguments and return values
let msg;
function greet(name) {
    console.log(`Hello, ${name}`);
    return `returned: ${name}`;
}

msg = greet("ram");
console.log(msg);
msg = greet("harry");
console.log(msg);
msg = greet("john");
console.log(msg);
msg = greet("mark");
console.log(msg);

// function expression
const add = function (a, b) {
    return a + b;
};
console.log(add(1, 2));

// arrow function
const mul = (a, b) => a * b;
console.log(mul(2, 3));
