//! String.toLowerCase → lowerCase

const { FigureImage } = require("react-bootstrap");

// let str = "Aziz Abduhakimov";

// String.prototype.lowerCase = function () {
//   let res = "";

//   for (let el of this) {
//     let pos = el.charCodeAt();

//     if (pos >= 65 && pos <= 90) {
//       res += String.fromCharCode(pos + 32);
//     } else {
//       res += el;
//     }
//   }

//   return res;
// };

// console.log(str.lowerCase());

// !Number.int → int

// let num = 12.1331;

// Number.prototype.int = function () {
//   let str = this.toString().split(".")[0];
//   return +str;
// };

// console.log(num.int());

//! Array.filter → fltr

// let arr = [10, 54, 30, 29, 21];
// Array.prototype.fltr = function (callback) {
//   let res = [];
//   for (let i in this) {
//     let el = this[i];
//     let check = callback(el, i, this);
//     if (check) {
//       res.push(el);
//     }
//   }
//   return res;
// };
// let checkArr = arr.fltr((el, i, arr) => el > 20);
// console.log(checkArr);

// ! Array.some → sm
// let arr = [10, 54, 30, 29, 21];

// Array.prototype.sm = function (callback) {
//   for (let i in this) {
//     let el = this[i];
//     let check = callback(el, +i, this);
//     if (check) {
//       return true;
//     }
//   }
//   return false;
// };
// let checkSome = arr.sm((el, i, arr) => el % 2);
// console.log(checkSome);

// ! Array.find → fnd
// let arr = [10, 54, 30, 29, 21];

// Array.prototype.fnd = function (callback) {
//   for (let i in this) {
//     let el = this[i];
//     let check = callback(el, +i, this);
//     if (check) {
//       return el;
//     }
//   }
//   return undefined;
// };
// let checkSome = arr.fnd((el, i, arr) => el % 2 == 0);
// console.log(checkSome);

// let arr = [5, 1, 3, 8, 9];

// Array.prototype.sum = function () {
//   let res = 0;
//   for (let el of this) {
//     res += el;
//   }
//   return res;
// };

// console.log(arr.sum());

// * trim → trm

// String constructoriga trm metodini qo'shish
String.prototype.trm = function () {
  let start = 0;
  let end = this.length - 1;
  // Boshlanishdagi bo'sh joylarni topish
  while (start <= end && this[start] === " ") {
    start++;
    console.log(start);
  }
  while (end >= start && this[end] === " ") {
    end--;
    console.log(end);
  }
  // Bo'sh joylarni olib tashlangan substringni qaytarish
  console.log(start, end);

  return this.substring(start, end + 1);
};

// Trm metodini sinab ko'rish
const myString = "  Salom Dunyo!  ";
console.log(myString.trm()); // "Salom Dunyo!"

// ! toUpperCase → upperCase
// let str = "Aziz Abduhakimov";

// String.prototype.upperCase = function () {
//   let res = "";

//   for (let el of this) {
//     let pos = el.charCodeAt();

//     if (pos >= 97 && pos <= 122) {
//       res += String.fromCharCode(pos - 32);
//     } else {
//       res += el;
//     }
//   }

//   return res;
// };

// console.log(str.upperCase());

//! includes → has
// String constructoriga has metodini qo'shish
String.prototype.has = function (substring) {
  console.log(this.indexOf(substring));
  console.log(substring);

  return this.indexOf(substring) !== -1;
};

let str = "Azizbek Abduhakimov";
// Sinov uchun kod
console.log(str.has("Azizbek"));

// slice → cut

// let cutStr = "Azizbek Abduhakimov";

// String.prototype.cut = function (a, b) {
//   let res = "";
//   for (let i = a; i < b; i++) {
//     res += this[i];
//   }

//   return res;
// };

// console.log(cutStr.cut(1, 9));

//! repeat → rpt

// let strRpt = "Aziz";
// String.prototype.rpt = function (n) {
//   let res = "";
//   for (let i = 0; i < n; i++) {
//     res += this + " ";
//   }
//   return res;
// };
// console.log(strRpt.rpt(3));

// ! Number constructoriga quyidagi metodlarni qo’shing.

//! toFixed -> fixed

// Number.prototype.fixed = function (n) {
//   let numFixed = this.toString().split(".");
//   let fixedNum = numFixed[0] + "." + numFixed[1].slice(0, n);

//   if (n == 0 || n == null || n > numFixed[1].length ) {
//     return +numFixed[0];
//   }
//   return +fixedNum;
// };
// let num = 2123.3123;
// console.log(num.fixed(5));

// ! round 4.567 → 5, 10.102 → 10
// Number.prototype.round = function () {
//   let numSplit = this.toString().split(".");
//   let integerPart = +numSplit[0];
//   if (!numSplit[1]) {
//     return integerPart;
//   }
//   let decimalPart = +("0." + numSplit[1]);
//   if (decimalPart >= 0.5) {
//     return integerPart + 1;
//   } else {
//     return integerPart;
//   }
// };

// let num = 123.122;

// console.log(num.round()); // Output: 124

// Number.prototype.isSquare = function () {
//   let numIs = this;

//   let numRes = numIs ** (1 / 2);
//   let check = Number.isInteger(numIs ** (1 / 2));

//   if (check) {
//     return numRes;
//   } else {
//     return "Ildiz chiqmaydi";
//   }
// };

// let num = 1324;
// console.log(num.isSquare()); // 4

// Number.prototype.count = function () {
//   let numCount = this.toString().split("");
//   return numCount.length;
// };

// let num = 123456789;
// console.log(num.count());

// Number.prototype.sum = function () {
//   let numSum = this.toString().split("");

//   let sum = 0;
//   for (let el of numSum) {
//     sum += +el;
//   }

//   return sum;
// };

// let num = 123456789;
// console.log(num.sum());

//! Array constructoriga quyidagi metodlarni custom variantini qo’shing.

// Array.prototype.cutomMap = function (callback) {
//   let newArr = [];
//   for (let el of this) {
//     newArr.push(callback(el, i, this));
//   }
//   return newArr;
// };
// let arr = [1, 2, 4, 5];
// let mapArr = arr.cutomMap((el, i, arr) => {
//   return el / 2;
// });
// console.log(mapArr, i);

//  ! = = = = = = = = =

// Array.prototype.customMap = function (callback) {
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     newArr.push(callback(this[i], i, this));
//   }
//   return newArr;
// };

// let arr = [1, 2, 4, 5];
// let mapArr = arr.customMap((el, i, arr) => {
//   return el / 2;
// });

// console.log(mapArr); // Natija: [0.5, 1, 2, 2.5]

// ! every → customEvery

// ! every → customEvery

// Array.prototype.customEvery = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     let el = this[i];
//     let check = callback(el, i, this);
//     if (!check) {
//       // Agar callback false qaytarsa
//       return false;
//     }
//   }
//   return true;
// };

// let arr = [2, 4, 8, 10, 2, 8];
// let evenCheck = arr.customEvery((el, i, arr) => el % 2 === 0);

// console.log(evenCheck); // Natija: true

// ! reduce → customReduce

// Array.prototype.customReduce = function (callback, initialValue) {
//   let acc = initialValue !== undefined ? initialValue : this[0];
//   let startIndex = initialValue !== undefined ? 0 : 1;
//   for (let i = startIndex; i < this.length; i++) {
//     acc = callback(acc, this[i], i, this);
//   }
//   return acc;
// };
// let arr = [2, 4, 8, 10, 2, 8];
// let sum = arr.customReduce((acc, el) => {
//   return acc + el;
// }, 0);

// console.log(sum);

// ! customFindIndex

Array.prototype.customFindIndex = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return i;
    }
  }
  return -1;
};

let numbers = [10, 5, 7, 105, 30];
let index = numbers.customFindIndex((el) => el > 2);
console.log(index); // Chiqarish: 3

//! = = = = = = = //

Array.prototype.customSplice = function (start, deleteCount, ...items) {
  // Yangi array yaratamiz va elementlarni qo'shamiz
  let removedItems = [];

  // Arrayning nusxasini yaratamiz
  let arr = [...this];

  // O'chiriladigan elementlarni to'playmiz
  for (let i = start; i < start + deleteCount && i < arr.length; i++) {
    removedItems.push(arr[i]);
  }

  // Qayta o'zgartirilgan arrayni yaratamiz
  let newArr = arr
    .slice(0, start)
    .concat(items)
    .concat(arr.slice(start + deleteCount));

  // Original arrayni o'zgartirish
  this.length = 0;
  this.push(...newArr);

  // O'chirilgan elementlarni qaytaradi
  return removedItems;
};

// Misollar:

let arr = [1, 2, 3, 4, 5];

let removed = arr.customSplice(1, 2, "a", "b");
console.log(arr); // Natija: [1, 'a', 'b', 4, 5]
console.log(removed); // Natija: [2, 3]

// ==
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

let people = [p0, p1, p2, p3];

console.log(people);

console.log("p0", p0);
console.log("p1", p1);

console.log(p0);

console.log(p0);

console.log(p0.propertyIsEnumerable("firstName"));

// ! animal
