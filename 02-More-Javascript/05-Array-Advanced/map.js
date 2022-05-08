// map
// returns new array
// does not change size of original array
// uses value from original array for making new one
const employees = [
    { name: "Bob", age: 20, position: "Jr.Developer" },
    { name: "Mark", age: 30, position: "Digital Art" },
    { name: "Joy", age: 40, position: "UI/UX" },
    { name: "Zoey", age: 70, position: "Proof Reading" },
];

const ages = employees.map(function (item) {
    return item.age;
});
console.log(ages); // length of returned array = length of original array

// Returning multiple values
const newMappedArray = employees.map((item) => {
    return { age: item.name, pos: item.position.toUpperCase() };
});
console.log(newMappedArray);

const names = employees.map((item) => {
    return `<h1>${item.name}</h1>`;
});

let template = names.join("");
console.log(template);
