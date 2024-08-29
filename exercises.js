//! Exercise1

// let str = "Abdulaziz Programmer";

// String.prototype.lowerCase = function () {
//   let res = "";
//   for (let char of this) {
//     let pos = char.codePointAt();
//     if (65 <= pos && pos <= 90) {
//       res += String.fromCharCode(pos + 32);
//     } else {
//       res += char;
//     }
//   }
//   return res;
// };

// console.log(str);
// console.log(str.toLowerCase());

// console.log(str.lowerCase());

//! Exercise2

// let n = 123.55461932;

// Number.prototype.int = function () {
//   let str = n.toString().split(".")[0];
//   return +str;
// };

// console.log(n.int());

//! Exercise3

// Array.prototype.fltr = function (callback) {
//   let res = [];
//   for (let i in this) {
//     let el = this[i];
//     let check = callback(el, +i, this);
//     if (check) {
//       res.push(el);
//     }
//   }
//   return res;
// };

// let arr = [5, 4, 8, 9, 2, 7];

// // let evenArr = arr.filter((el, i, arr) => el % 2 === 0);
// let evenArr = arr.fltr((el, i, arr) => el % 2 === 0);

// console.log(evenArr);

//! Exercise4

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

// let arr = [5, 4, 8, 9, 2, 7];
// // let evenCheck = arr.some((el, i, arr) => el % 2 === 0);
// let evenCheck = arr.sm((el, i, arr) => el % 2 === 0);

// console.log(evenCheck);

//! Exercise5

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

// let arr = [5, 4, 8, 9, 2, 7];
// let firstEven = arr.find((el, i, arr) => el % 2 === 0);
// let firstEven = arr.fnd((el, i, arr) => el % 2 === 0);

// console.log(firstEven);

//! Exercise6

// let arr = [5, 1, 3, 8, 9];

// Array.prototype.sum = function () {
//   let res = 0;
//   for (let el of this) {
//     res += el;
//   }
//   return res;
// };

// console.log(arr.sum());
