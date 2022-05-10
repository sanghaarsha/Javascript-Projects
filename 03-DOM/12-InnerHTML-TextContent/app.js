const firstDiv = document.getElementById("first");
const secondDiv = document.getElementById("second");
const listItem = document.querySelector(".item");

// textContent
console.log(secondDiv.textContent); // returns text
console.log(firstDiv.textContent);

secondDiv.textContent = "text content changed!"; // set text

// innerHTML
console.log(firstDiv.innerHTML); // returns html structure
firstDiv.innerHTML = `<b>Inner HTML changed!</b>`; // set html structure

// creating completely new element and appending to body
const ol = document.createElement("ol");
ol.innerHTML = `<li class="item">Lorem, ipsum.</li>
            <li>Tenetur, fuga.</li>
        `;
document.body.appendChild(ol);
