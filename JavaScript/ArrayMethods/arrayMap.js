/**Map gives new array type data */
//example
const nums = [1, 2, 3, 4];
const doubled = nums.map(n => n * 2);
console.log(doubled);

/**Let here array with multiple objects */

const txns = [
    {id:1,type:'credit',amount:5000},
    {id:2,type:'debit',amount:1200},
    {id:3,type:'debit',amount:6300}
]

const amount = txns.map(t => t.amount);
console.log(amount);

const Amount=txns.map(t => `txn${t.id}:${t.amount}`);
console.log(Amount);

/**Let age filter example */
const ages = [12,18,49,85,41];
const adults = ages.map(age => age>=18);
console.log(adults);
