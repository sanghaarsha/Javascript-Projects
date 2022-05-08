// Math
// Standard built-in objects
const num = 4.56789;

let res = Math.floor(num);
console.log(res);
res = Math.ceil(num);
console.log(res);
res = Math.ceil(num);
console.log(res);
res = Math.sqrt(81);
console.log(res);
res = Math.PI;
console.log(res);
res = Math.min(5, 3, 5, 54, 2);
console.log(res);
res = Math.max(5, 3, 5, 54, 2);
console.log(res);
const random = Math.ceil(Math.random() * 10);
console.log(random);

// Date
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const date = new Date(); // setting Date('1/12/2004') : Day/Month/Year
// prettier-ignore
const dateFormatted = `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
console.log(dateFormatted);
