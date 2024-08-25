let person = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
};

// console.log(person.propertyIsEnumerable("firstName"));
// console.log(Math.propertyIsEnumerable("PI"));

Object.defineProperty(person, "firstName", {
  enumerable: false,
});

for (let key in person) {
  console.log(key);
}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
