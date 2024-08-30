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

let strRpt = "Aziz";
String.prototype.rpt = function (n) {
  let res = "";
  for (let i = 0; i < n; i++) {
    res += this + " ";
  }
  return res;
};
console.log(strRpt.rpt(3));
