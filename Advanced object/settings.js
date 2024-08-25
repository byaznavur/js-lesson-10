// console.log(Math);
// console.log(Math.PI);
// console.log(Math.SQRT2);

// Math.PI = 5;

// delete Math.PI;

// Math.a = 10;

// console.log(Math.PI);

// console.log(Object.isFrozen(Math));

let person = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
};

// console.log(Object.getOwnPropertyDescriptor(Math, "PI"));

// for (let key in Math) {
//   console.log(key);
// }

// Object.defineProperty(person, "firstName", {
//   value: "Abdulazizbek",
//   writable: false,
//   enumerable: false,
//   configurable: false,
// });

// delete person.firstName;

// person.firstName = "Abdulaziz";

// console.log(person.firstName);

// for (let key in person) {
//   console.log(key);
// }

// console.log(Object.getOwnPropertyDescriptor(person, "firstName"));

console.log(Object.getOwnPropertyDescriptor(person, "fullName"));
