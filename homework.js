//! String.toLowerCase → lowerCase

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
