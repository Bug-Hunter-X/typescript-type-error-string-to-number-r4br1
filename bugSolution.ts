function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result1 = addSafe(1, 2); 
console.log(result1); // Output: 3

let result2 = addSafe(1, '2' as unknown as number); //Type assertion, use with caution
console.log(result2); //Output: 3

let result3: number = add(1, 2);
console.log(result3); //Output: 3