interface Person {
  name: string;
  age: number;
  sayHello(): void;
}

interface Company {
  name: string;
  year: number;
  employees: number;
  info(): void;
}

const greeting: string = "Hello, world!";
console.log(greeting);

function add(a: number, b: number): number {
  return a + b;
}

const result: number = add(2, 3);
console.log("2 + 3 =", result);

const person: Person = {
  name: "Manjit",
  age: 23,
  sayHello() {
    console.log("Hi, I'm", this.name);
  },
};

const company: Company = {
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
  const message: string = "Manjit";
  alert(`Hello ${message}!`);

  const button = document.querySelector<HTMLButtonElement>("#showMessage");
  const output = document.querySelector<HTMLDivElement>("#output");

  if (!button || !output) {
    return;
  }

  button.addEventListener("click", () => {
    output.textContent = "Hello from external TypeScript!";
  });
});
