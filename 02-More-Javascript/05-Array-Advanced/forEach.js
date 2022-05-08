// forEach : does not return new array
// Used to iterate over an array
const employees = [
    { name: "Bob", age: 20, position: "Jr.Developer" },
    { name: "Mark", age: 30, position: "Digital Art" },
    { name: "Joy", age: 40, position: "UI/UX" },
    { name: "Zoey", age: 70, position: "Proof Reading" },
];

// * ways of using forEach
// By passing function reference
employees.forEach(showPerson);

function showPerson(p) {
    console.log(p.name.toUpperCase());
}

// Using Anonymous function
employees.forEach(function (item) {
    console.log(item.age);
});

// Using Anonymous arrow function
employees.forEach((item) => console.log(item.position));
