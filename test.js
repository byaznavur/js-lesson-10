// let obj = {
//   firstName: "Azizbek",
//   lastName: "Abduhakimov",

//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   },

//   set fullName(name) {
//     [this.firstName, this.lastName] = name.split(" ");
//   },
// };
// obj.fullName = "Abdulaziz Programmer";
// console.log(obj.fullName);

// !setting

// console.log(Math);
// console.log(Math.PI);
// console.log(Object.isFrozen(Math));

// console.log(Object.getOwnPropertyDescriptor(Math, "PI"));
// console.log(Object.getOwnPropertyDescriptor(obj, "firstName"));

// for (let key in obj) {
//   console.log(key);
// }
// {
//     value: 'Azizbek',
//     writable: true, // o'zgartrib bo'lishi
//     enumerable: true, for orqali aylantish
//     configurable: true // delete qilib bo'lish bo'lmaslik
//   }

// let obj = {
//   firstName: "Azizbek",
//   lastName: "Abduhakimov",

//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   },

//   set fullName(name) {
//     [this.firstName, this.lastName] = name.split(" ");
//   },
// };

// let obj = {};

// Object.defineProperty(obj, "firstName", {
//   value: "Abdulaziz",
//   writable: true,
//   enumerable: false,
//   configurable: false,
// });

// obj.firstName = "Azizbek";
// delete obj.firstName;

// for (let key in obj) {
//   console.log(key);
// }
// console.log(obj);

// Object.getOwnPropertyDescriptor;

// !Enumerable properties
// let person = {
//     firstName: "Abdulaziz",
//     lastName: "Programmer"
//   };

//   // `age` xususiyatini `enumerable: false` qilib o'rnatish
//   Object.defineProperty(person, "age", {
//     value: 30,
//     enumerable: false // `age` xususiyati tsikllarda ko'rinmaydi
//   });

//   // `for...in` tsikli
//   for (let key in person) {
//     console.log(key); // "firstName", "lastName" (lekin "age" ko'rinmaydi)
//   }

//   // `Object.keys()`
//   console.log(Object.keys(person)); // ["firstName", "lastName"] ("age" kiritilmagan)

// ? Shallow and Deep copy

// let obj = {
//   name: "Azizbek",
//   lastName: "Abduhakimov ",
// };

// let copyObj = obj;

// copyObj.name = "Toshpulatov";
// console.log(copyObj);
// console.log(obj);

// * Muammo shundaki ikkita objectni ham qiymati o'zgarib ketadi

// let original = { name: "Abdulaziz", age: 30 };
// let copy = { ...original };

// console.log(copy); // { name: "Abdulaziz", age: 30 }

// // Original ob'ektning xususiyatlarini o'zgartirish nusxaga ta'sir qilmaydi
// original.age = 40;
// console.log(copy.age); // 30

// Constructor

function Person(firstName, lastName, middleName, age, weight) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.middleName = middleName;
  this.age = age;
  this.weight = weight;

  if (!new.target) {
    return new Person(firstName, lastName, middleName, age, weight);
  }
  this.getInfo = function () {
    return `${this.firstName} ${this.lastName}'s age is ${this.age}`;
  };
}

let p0 = Person("Azizbek ", "Abduhakimov", "Bakhtiyarovich", 19, 70);
let p1 = Person("Abror ", "Abduhakimov", "Bakhtiyarovich", 23, 70);

let people = [p0, p1];

console.log(p0);
