// String properties and methods
// Javascript creates wrapper string object for each string created
// thus we can use various methods with it
const text = "John Doe";
console.log(text.length, text.charAt(0), text[1]);
console.log(text.indexOf("o")); // if multiple returns first index
console.log(text.concat(" Is Bad"));
console.log(text.replace("John", "Mark"));
console.log(text.includes("k") ? "has k" : "doesn't have k");
console.log(text.toLowerCase());
console.log(text.toUpperCase());

const textWithWhiteSpace = "  John Doe  ";
const trimmedText = textWithWhiteSpace.trim();
console.log(textWithWhiteSpace);
console.log(trimmedText);
console.log(trimmedText.toLowerCase().includes("john")); // chaining methods
console.log(trimmedText.slice(0, 2));
console.log(trimmedText.slice(-3));

// reverse a string
function reverseString(string) {
    let rev = "";
    for (let i = string.length - 1; i >= 0; i--) {
        rev += string[i];
    }
    return rev;
}
console.log(reverseString("Mark"));

// Template Literals
const protocol = "https";
const siteName = "google";
const domain = "com";

function createUrl(p, s, d) {
    return `${p}://www.${s}.${d}`;
}

console.log(createUrl(protocol, siteName, domain));
