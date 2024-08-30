// ? String.toLowerCase → lowerCase

let str = "Azizbek Abduhakimov";

String.prototype.lowerCase = function () {
  let res = "";

  for (let char of this) {
    let pos = char.charCodeAt();
    if (pos >= 65 && pos <= 90) {
      res += String.fromCharCode(pos + 32);
    } else {
      res += char;
    }
  }
  return res;
};

console.log(str.lowerCase());
