// Data types : 7 total
// Primitives: String, Number, Boolean, Null, Undefined, Symbol
console.log(typeof "test");
console.log(typeof 1);
console.log(typeof undef);
console.log(typeof true);
console.log(typeof null); // object?? This is a bug that is not going to be fixed!
console.log(typeof Symbol());

// Objects: Arrays, Functions, Object

// Arrays - [], 0 based, multiple types
const friends = ["anna", "ram", "harry", "zia", "john", "roy", true, 1];
// accesing item
console.log(friends[0]);
// traversing array
friends.forEach((friend) => console.log(friend));
const ram = friends.find((item) => item == "ram");
console.log(ram);
const startsWithR = friends.filter((item) => item[0] == "r");
console.log(startsWithR);
// friends.reduce
// there are many other array methods...

// Objects: collection of properties/keys
// keys have values, if those values are function they are called methods
// dot notations
const Car = {
    name: "Toyota",
    color: "Red",
    speed: "50 MPH",
    drive: function () {
        console.log("Vroom Vroom");
    },
};

console.log(Car.name);
console.log(Car.drive());
