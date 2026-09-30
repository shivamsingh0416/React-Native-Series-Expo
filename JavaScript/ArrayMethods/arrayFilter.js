/**Filter means what you want */
const txns = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 1200 },
  { id: 3, type: "debit", amount: 6300 },
];

const debit = txns.filter((t) => t.type === "debit");
console.log(debit);

const amount = txns.filter((t) => t.amount >= 2000);
console.log(amount);

/**Let list of array of ages */

const array = [12, 45, 22, 58, 85];
const adults = array.filter((age) => age >= 18);
for (const element of adults) {
  console.log(element);
}

/**Let a case study type */
const laptop = [
  { Brand: "lenevo", Size: "16gb" },
  { Brand: "Acer", Size: "8gb" },
  { Brand: "HP", Size: "16gb" },
  { Brand: "Mac", Size: "16gb" },
];
/**let we wants  16gb filter laptop */
const sizeFilter = laptop.filter((item) => item.Size === "16gb");
for (const item of sizeFilter) {
  for (const key in item) {
    console.log(`${key}:${item[key]}`);
  }
}
