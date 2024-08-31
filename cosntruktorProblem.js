// function Animal(name, speed, limitAge) {
//   this.name = name;
//   this.speed = speed;
//   this.limitAge = limitAge;

//   if (!new.target) {
//     return new Animal(name, speed, limitAge);
//   }
// }

// Animal.prototype.info = function () {
//   return `${this.name} soatiga ${this.speed} tezlikga ega va max yoshi ${this.limitAge}gacha`;
// };

// let animal1 = Animal("Yo'lbars", 30, 12);
// let animal2 = Animal("Arslomn", 20, 12);

// let res = [animal1, animal2];

// console.log(animal1);
// console.log(animal2);
// console.log(res);

// !=====

// function Student(name, course, years, university) {
//   this.name = name;
//   this.course = course;
//   this.years = years;
//   this.university = university;

//   if (!new.target) {
//     return new Student(this.name, this.course, this.years, this.university);
//   }
// }

// Student.prototype.leftYears = function () {
//   return `${this.name}  ${this.university} ga ${
//     this.years
//   } da o'qishga kirgan. Hozirda u ${this.course} da o'qimoqda va ${
//     this.years + 4
//   }-yilda o'qishni tamomlaydi`;
// };
// let student1 = Student("Azizbek", 3, 2022, "TDTU");
// let res = [student1, ];
// console.log(student1);
// console.log(res);
// let result = student1.leftYears();
// console.log(result);

// ! =====

// function Person(name, age, currentYear) {
//   this.name = name;
//   this.age = age;
//   this.currentYear = currentYear;

//   if (!new.target) {
//     return new Person(this.name, this.age, this.currentYear);
//   }
// }

// Person.prototype.getBirthYear = function () {
//   return `${this.name} ${this.currentYear - this.age} da tug'ilgan`;
// };
// let person1 = Person("Azizbek", 20, 2024);
// let res = [person1];
// console.log(person1);
// console.log(res);
// let result = person1.getBirthYear();
// console.log(result);

// !===

// function Employee(name, salary, workName) {
//   this.name = name;
//   this.salary = salary;
//   this.workName = workName;

//   if (!new.target) {
//     return new Employee(this.name, this.salary, this.workName);
//   }
// }

// Employee.prototype.increaseSalary = function (protcent) {
//   return `${this.name} ${this.workName}ning maoshi ${
//     this.salary + (this.salary * protcent) / 100
//   } gacha oshadi`;
// };
// let employee = Employee("Azizbek", 200000, "Developer");
// let res = [employee];
// console.log(employee);
// console.log(res);
// let result = employee.increaseSalary(50);
// console.log(result);

// ! ====

// function Employee(width, height) {
//   this.width = width;
//   this.height = height;

//   if (!new.target) {
//     return new Employee(this.width, this.height);
//   }
// }

// Employee.prototype.getArea = function () {
//   return `${this.width * this.height} yuzasi  `;
// };
// Employee.prototype.getPerimetr = function () {
//   return ` ${2 * (this.width + this.height)} yuzasi  `;
// };
// let employee = Employee(2, 3);
// let res = [employee];
// console.log(employee);
// console.log(res);
// let result = employee.getArea();
// let result1 = employee.getPerimetr();
// console.log(result);
// console.log(result1);
