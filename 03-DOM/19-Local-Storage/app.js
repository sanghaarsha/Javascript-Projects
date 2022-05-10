// Web Storage API
// session storage: {persists data while tab is still open}
// local storage: {persists data while browser is still open}
// ? Both local storage and session storage have similar methods
// setItem, getItem, removeItem, clear
// syntax:
// localStorage.setItem("name","john")
// sessionStorage.setItem("name","john")

// writing to local storage
localStorage.setItem("name", "emma");
localStorage.setItem("friend", "john");
localStorage.setItem("address", "street no.123");
localStorage.setItem("position", "junior");

// accessing local storage
localStorage.getItem("position");

// remove sigle item
localStorage.removeItem("name");

// clear whole local storage
localStorage.clear();

// ! Local Storage with Multiple Values
const friends = ["john", "peter", "bob"];
localStorage.setItem("friends", friends);
const values = localStorage.getItem("friends");
console.log(values[0]); // j, because friends will be stored as string

// Overcome that by using : JSON.stringify(),JSON.parse()
const fruits = ["apple", "oranges", "mangoes"];
localStorage.setItem("fruits", JSON.stringify(fruits));
const data = JSON.parse(localStorage.getItem("fruits")); // apple
console.log(data[0]);

// check if value exists in local storage
// if it does not exist : assign it
// if it exists : empty array
let cities;

if (localStorage.getItem("cities")) {
    cities = JSON.parse(localStorage.getItem("cities"));
} else {
    cities = [];
}
console.log(cities);

cities.push("Chitwan");

localStorage.setItem("cities", JSON.stringify(cities));
