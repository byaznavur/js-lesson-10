let person = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
  work: {
    name: "Najot Ta'lim",
    location: "Qatortol",
  },
};

// let copyPerson = person;

// let copyPerson = { ...person };

// let copyPerson = Object.assign({}, person);

// let copyPerson = JSON.parse(JSON.stringify(person));

copyPerson.firstName = "Abdulaziz";
copyPerson.lastName = "Toshpulatov";

copyPerson.work.name = "EPAM";

console.log(person);
console.log(copyPerson);
