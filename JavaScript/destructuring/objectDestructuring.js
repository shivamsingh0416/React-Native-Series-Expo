/**Let we have an object as below */
const person = {
  name: "Shivani",
  age: 20,
  id: "C245G",
};
/**in normal way */
console.log(person.name); //Shivani
/**In destructing way */
const { name, age, id } = person;
console.log(id); //C245G
/**Destructuring means open the object and take  out value directly*/

function studentDetails(name, id, branch,email,marks) {
  this.name = name;
  this.id = id;
  this.branch = branch;
  this.email =email;
  this.marks = marks;
}

const student_1 = new studentDetails("Shivam", 24, "CSE","example.com",{
  Java: 56,
  Python: 74,
});

const student_2 = new studentDetails("Aman", 74, "EEE", "example.com",{
  Electronics: 65,
  Physics: 52,
});

/**Normal way */
console.log(student_1.name); //Shivam
console.log(student_2.marks.Electronics); //65

/**Destructuring way */
const {
  name: student_1Name,
  id: student_1rollNum,
  marks: { Java, Python },
  ...baki
} = student_1;

const {
  name: student_2Name,
  id: student_2rollNum,
  marks: {Electronics,Physics},
} = student_2;

console.log(`Name:${student_1Name}Roll-Number:${student_1rollNum}`);//Name:ShivamRoll-Number:24
console.log(`Name:${student_2Name}ElectronicsMark:${Electronics}`);//Name:AmanElectronicsMark:65
console.log(student_2);/**studentDetails {
  name: 'Aman',
  id: 74,
  branch: 'EEE',
  marks: { Electronics: 65, Physics: 52 }
} */
/**rest operator means bakisab*/
console.log(baki);



