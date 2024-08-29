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
