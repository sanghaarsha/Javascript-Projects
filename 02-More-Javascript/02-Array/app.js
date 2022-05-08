let firstNames = ["Joe", "Rob", "Ray", "Ben", "Olaga"];
let lastNames = ["Hamil", "Anderson", "Kravitz", "Dover", "Hughes"];

console.log(firstNames.length);
console.log(firstNames[0]);

// Pushing & Popping Array Items
firstNames.push("mark");
console.log(firstNames);
firstNames.pop();
console.log(firstNames);

// concat arrays
const newArray = firstNames.concat(lastNames);
console.log(newArray);

// reverse
console.log(newArray.reverse());

// unshift: add item to index 0
console.log(firstNames.unshift("susan"));
console.log(firstNames);

// shift: remove item from index 0
lastNames.shift();
console.log(lastNames);

// splice
// ! IT MUTATES THE ORIGINAL ARRAY
console.log("Before splicing ");
console.log(lastNames);

const splicedArray = lastNames.splice(0, 2);
console.log("Spliced Array");
console.log(splicedArray);

console.log("After splicing ");
console.log(lastNames);

// Exercise
let expense = [30, 70, 56, 28, 89];

const calcTotal = (array) => {
    let res = 0;
    for (let i = array.length - 1; i >= 0; i--) {
        res += array[i];
    }

    if (res >= 300) {
        console.log("Whoa! You are spending like there's no tommorow!");
        return res;
    }
    console.log("You are cool!");
    return res;
};

console.log(calcTotal(expense));
