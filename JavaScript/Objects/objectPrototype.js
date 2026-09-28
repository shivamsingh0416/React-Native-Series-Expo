function Person(name, course) {
  this.name = name;
  this.course = course;
}

const person1 = new Person("Shivam", "Computer Science Engineering");
const person2 = new Person("Shyam", "Computer Science Engineering");

Person.prototype.detail = function () {
  console.log(`Hey I'm ${this.name}.I'm student of ${this.course}`);
};

person1.detail();
person2.detail();
