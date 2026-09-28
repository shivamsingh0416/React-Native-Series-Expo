/**Creating object using the new onject() constructor-- singleton object */
const personObject = new Object();
personObject.name = "Shivam Singh";
personObject.branch = "Computer Science Engineering";
personObject.age = 21;
console.log(`
    ${personObject.name}
    ${personObject.branch}
    ${personObject.age}
    `);

/**Creating multiple object with constructor */
function Person(Name, Age, Email) {
  this.Name = Name;
  this.Age = Age;
  this.Email = Email;
}
/** Now creating multiple objects */
const person1 = new Person("Shivam", 21, "example@.com");
const person2 = new Person("Ritika", 20, "example@.com");
for (const key in person1) {
  console.log(`${key}:${person1[key]}`);
}
for (const key in person2) {
  console.log(`${key}:${person2[key]}`);
}

/**Here a Object Prototype are mention for good practice of javascript */
/**Let You want brief intro of an objects then this will help you */
/**MSG:I'm Shivam.My age is 21 and my email is exmple.com */

Person.prototype.intro = function () {
  console.log(
    `I'm ${this.Name}.My age is ${this.Age} and my email is ${this.Email}`
  );
};
/**Now call the funtion with object name  */
person1.intro();
person2.intro();