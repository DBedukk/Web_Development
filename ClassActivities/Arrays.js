function filterNumbers(numbers, callback) {
    return numbers.filter(callback);
}

// Sample input array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/* 
   Callback function to filter out even numbers 
   (this will return only odd numbers)
*/
const oddNumbers = filterNumbers(numbers, num => num % 2 !== 0);

console.log(oddNumbers);  // Output: [1, 3, 5, 7, 9]
