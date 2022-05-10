const form = document.querySelector("#form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

// event listener : submit
form.addEventListener("submit", function (e) {
    // prevent default form behaviour (i.e. submit and refresh)
    e.preventDefault();
    // get values from form
    console.log(
        `name:${name.value}, email:${email.value},pass:${password.value}`
    );
});
