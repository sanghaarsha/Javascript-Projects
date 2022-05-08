// reduce
// iterates, callback function
// reduces to a single value - number, array, object
// 2 Parms: acc = accumulation, total of all calculation
//          curr = current value
const employees = [
    { name: "Bob", age: 20, position: "Jr.Developer" },
    { name: "Mark", age: 30, position: "Digital Art" },
    { name: "Joy", age: 40, position: "UI/UX" },
    { name: "Zoey", age: 70, position: "Proof Reading" },
];

const arrayNames = employees.reduce((acc, curr) => {
    console.log(acc);
    console.log(curr);
    acc.push(curr.name);
    return acc;
}, []); // [] => initial value for acc

console.log(arrayNames);
