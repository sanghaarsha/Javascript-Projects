// filter
// returns new array
// can manipulate size of returned array
// returns based on condition

const employees = [
    { name: "Bob", age: 20, position: "Jr.Developer" },
    { name: "Mark", age: 25, position: "Digital Art" },
    { name: "Hilary", age: 30, position: "Sr.Developer" },
    { name: "Joy", age: 40, position: "UI/UX" },
    { name: "Zoey", age: 70, position: "Proof Reading" },
];

const oldPeople = employees.filter((emp) => emp.age > 30);
console.log(oldPeople);

const developers = employees.filter((emp) =>
    emp.position.toLowerCase().includes("developer")
);
console.log(developers);
