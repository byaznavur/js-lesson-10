let person = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set fullName(name) {
    // console.log("Name:", name);
    // let arr = name.split(" ");
    // console.log(arr);
    // this.firstName = arr[0];
    // this.lastName = arr[1];
    [this.firstName, this.lastName] = name.split(" ");
  },
};

// console.log(person.firstName);
// console.log(person.fullName());
// console.log(person.fullName);

person.fullName = "Abdulaziz Programmer";

console.log(person.fullName);
