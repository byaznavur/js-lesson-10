// let a = Number(12);

// console.log(a);

// let people = [
//   {
//     firstName: "John",
//     lastName: "Doe",
//     middleName: "Alex",
//     age: 30,
//     weight: 100,
//   },
//   {
//     firstName: "John1",
//     lastName: "Doe1",
//     middleName: "Alex1",
//     age: 35,
//     weight: 80,
//   },
//   {
//     firstName: "John2",
//     lastName: "Doe2",
//     middleName: "Alex2",
//     age: 40,
//     weight: 120,
//   },
//   {
//     firstName: "John3",
//     lastName: "Doe3",
//     middleName: "Alex3",
//     age: 20,
//     weight: 80,
//   },
// ];

function Person(firstName, lastName, middleName, age, weight) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.middleName = middleName;
  this.age = age;
  this.weight = weight;
  if (!new.target) {
    return new Person(firstName, lastName, middleName, age, weight);
  }
}

Person.prototype.getInfo = function () {
  return `${this.firstName} ${this.lastName}'s age is ${this.age}`;
};

let p0 = Person("John", "Doe", "Alex", 30, 100);
let p1 = Person("John1", "Doe1", "Alex1", 35, 80);
let p2 = Person("John2", "Doe2", "Alex2", 40, 120);
let p3 = Person("John3", "Doe3", "Alex3", 20, 80);

// let people = [p0, p1, p2, p3];

// console.log(people);

// console.log("p0", p0);
// console.log("p1", p1);

// console.log(p0);

console.log(p0);

console.log(p0.propertyIsEnumerable("firstName"));
