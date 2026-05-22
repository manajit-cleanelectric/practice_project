"use strict";
const greeting = "Hello, world!";
console.log(greeting);
function add(a, b) {
    return a + b;
}
const result = add(2, 3);
console.log("2 + 3 =", result);
const person = {
    name: "Manjit",
    age: 25,
    sayHello() {
        console.log("Hi, I'm", this.name);
    },
};
const company = {
    name: "Clean Electric",
    year: 2021,
    employees: 100,
    info() {
        console.log(`${this.name} was founded in ${this.year} and has ${this.employees} employees.`);
    },
};
person.sayHello();
company.info();
document.addEventListener("DOMContentLoaded", () => {
    const message = "Manjit";
    alert(`Hello ${message}!`);
    const button = document.querySelector("#showMessage");
    const output = document.querySelector("#output");
    if (!button || !output) {
        return;
    }
    button.addEventListener("click", () => {
        output.textContent = "Hello from external TypeScript!";
    });
});
