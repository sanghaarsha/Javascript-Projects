// Reference vs Value
// In JS we have Primitives and Objects data types

// Primitive : Only Value of variable is changed, i.e we modify value of copy varaiable
// Reference : Value referenced by the variable is changed, i.e. we modify value of original variable

// Primitive Data Type
let number = 1;
let ref = number;

ref = 7;

console.log("number: ", number);
console.log("ref: ", ref);

// Object(Reference Data Type)
let Car = {
    name: "Honda",
};
let refCar = Car;

refCar.name = "Toyota";

console.log("Car: ", Car);
console.log("refCar: ", refCar);

// ? So any ways to only copy values not reference to them?
// * With ES6 spread operator allows to do copying without reference
// Syntax : const newCopy = {...originalValues}

// ! Null vs Undefined
// Both mean no value is present

// undefined : 'Javascript cannot find any value for this'
// i.e.
// Variables without values
// Missing function arguments
// Missing object properties

// null : 'Set by developer'

console.log(20 + null); // 20+ 0
console.log(20 + undefined); // NaN

// ! Truthy and Falsy
// "", '', ``, 0, -0, NaN, false, null, undefined
// Truthy: 1, "",``,true
// Falsy: 0,-0,NaN,null,undefined

function determine(text) {
    if (text) {
        console.log("truthy: ", text);
    } else {
        console.log("falsy: ", text);
    }
}

determine(1);
determine("");
determine("text");
determine(null);
determine(true);
determine(0);
determine(-1);
determine(-0);
