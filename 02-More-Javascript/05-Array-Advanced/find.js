// find
// returns single instance (object, string,..)
// returns first match, undefined if unmatched
// great fot getting unique value
const employees = [
    { id: 0, name: "Bob", age: 20, position: "Jr.Developer" },
    { id: 1, name: "Mark", age: 30, position: "Digital Art" },
    { id: 2, name: "Joy", age: 40, position: "UI/UX" },
    { id: 3, name: "Zoey", age: 70, position: "Proof Reading" },
];

const idOne = employees.find((em) => em.id === 7);

if (idOne) {
    console.log(idOne);
} else {
    console.log("Not Found!");
}
