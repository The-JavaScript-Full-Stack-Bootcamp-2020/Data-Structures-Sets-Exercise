//DATA STRUCTURES: SETS//

//////////////////////////////////////////////////////////////////////////

//Examples:

const z5 = new Set([0, 1, 2, 3, 4]);

const z2 = new Set();
z2.add('zero');
z2.add('one');

console.log(z2);

console.log(z2.has('two'));     //returns whether 'two' is in the set z2

console.log(z5.size);           //returns the size of the set z5

z2.delete('zero');
console.log('new Z2:', z2);     //removes the 'zero' element from the set z2

//iterate over the items in a set:
console.log('Listing elements in Z5:');
for (const item of z5) { 
  console.log(item); 
}

z5.clear();                     //removes all the items from the set
console.log('\nnew Z5:', z5);                 
