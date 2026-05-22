// hello.js
const greeting = "Hello, world!";
console.log(greeting);

// simple function
function add(a, b) {
  return a + b;
}

const result = add(2, 3);
console.log("2 + 3 =", result);

// object example
const person = {
  name: "Manjit",
  age: 25,
  sayHello() {
    console.log("Hi, I'm", this.name);
  }
};

const company = {
    name: "Clean Electric",
    year: 2021,
    Employee: 100,
    info() {
        console.log(`${this.name} was founded in ${this.year} and has ${this.Employee} employees.`);
    }
}

person.sayHello();
company.info();