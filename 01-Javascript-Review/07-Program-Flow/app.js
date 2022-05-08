// Conditional Statements: >, <, >=, <=, ==, ===, !=, !==
console.log("1" == 1);
console.log("1" === 1);
console.log("1" != 1);
console.log("1" !== 1);
console.log(1 > 2);
console.log(1 < 2);
console.log("1" >= 1);
console.log(1 >= 2);
console.log(1 <= 2);

// double equality == : checks only values
// triple equality === : checks value and type

// if
// only true conditions are executed
let value = true;
if (value) console.log("true");
if (!value) console.log("false");
// ? !value = true if value = false, false if value = true, i.e opposite

if ("1" == 1) {
    console.log("'1'==1");
}
// if-else
if (1 === "1") {
    console.log("1==='1'");
} else {
    console.log("1!=='1'");
}

// elseif
value = "1";
if (value === 1) console.log(1);
else if (value === 2) console.log(2);
else console.log(value);

// Logical operators : || -> OR, && -> AND, ! -> NOT
console.log(true || false); // true
console.log(true && false); // false
console.log(true && true); // true
console.log(!true); // false
console.log(!false); // true

// ternary
let k;
1 > 2 ? (k = 1) : (k = 2); // condition ? if true do sth : if false do sth else
console.log(k);

//  Switch statements
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

const key = rollDice();

switch (key) {
    case 1:
        console.log("You got 1");
        break;

    case 2:
        console.log("You got 2");
        break;

    case 3:
        console.log("You got 3");
        break;

    case 4:
        console.log("You got 4");
        break;

    case 5:
        console.log("You got 5");
        break;

    case 6:
        console.log("You got 5");
        break;

    default:
        console.log("Invalid Key!");
        break;
}

// Loops
// While
let i = 0;
while (i < 2) {
    console.log("while");
    console.log(i);
    i++;
}
// do while
let j = 0;
do {
    console.log("do while");
    console.log(j);
    j++;
} while (j < 2);
//for
for (let k = 0; k < 2; k++) {
    console.log("for");
    console.log(k);
}
