/**const variable  are as a constant variable ,which can't be reassigned new value to it*/
/*Varaible declared with const have block-scope*/
/**it means they are only accessible within the block {} */

if (true) {
  const blockScopVar = "I'm only accessible in blockScope";
  console.log(blockScopVar);
}

// if (false){
//   const blockScopVar = "I'm only accessible in blockScope";
// }

// console.log(blockScopVar);

const person = {
    name:"Shivam",
    age: 23
}
console.log(person.name +" "+ person.age);

