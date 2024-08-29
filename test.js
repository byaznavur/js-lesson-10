let obj = {
  firstName: "Azizbek",
  lastName: "Abduhakimov",

  get fullName() {
    return this.firstName + " " + this.lastName;
  },

  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
};

obj.fullName = "Abdulaziz Programmer";

console.log(obj.fullName);
