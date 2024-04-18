// - Create a new array of names.
// - Write a new function that checks if a name is in your array. This function should take a name as a parameter and return a boolean.
// - Use this function to check if various names are in your array and log the results.

// const names: string[] = ['marcel', 'anula', 'zenon', 'janusz'];
//
// function findName(name: string): boolean {
//    return names.includes(name);
// }
//
// const name = 'anula'
//
// if (findName(name) === true) {
//     console.log(`${name} is in the array`);
// } else {
//         console.log(`${name} is not in the array`)
//     }

// function calculateScore (initialScore: number, penaltyPoints: number = 0): number {
//     return initialScore - penaltyPoints;
// }
//
// let myScore = calculateScore(100, 20);
// console.log(myScore);


// ### Challenge
//
// Your task is to create a function named processInput that accepts a parameter of a union type string | number. The function should behave as follows:
//
// - If the input is of type number, the function should multiply the number by 2 and log the result to the console.
// - If the input is of type string, the function should convert the string to uppercase and log the result to the console.


// function processInput(data: number | string) {
//
//
//     if (typeof data === 'number') {
//         return data * 2
//
//     } else if (typeof data === 'string') {
//         return data.toUpperCase();
//     }
// }
//
// const result = processInput(505);
// console.log(result);


//  function createObject({id}: {id: number}): {
//         id: number,
//         isActive: boolean
//  } {
//     return {
//         id,
//         isActive: id % 2 === 0
//     }
//  }
//
//  const person1 = createObject({id: 4});
//
// console.log(person1);


// ## Challenge 3
//
// Your task is to create a function named processData that accepts two parameters:
//
//     - The first parameter, input, should be a union type that can be either a string or a number.
// - The second parameter, config, should be an object with a reverse property of type boolean, by default it "reverse" should be false
//
// The function should behave as follows:
//
// - If input is of type number, the function should return the square of the number.
// - If input is of type string, the function should return the string in uppercase.
// - If the reverse property on the config object is true, and input is a string, the function should return the reversed string in uppercase.


function processData(input: string | number, config: {reverse: boolean} = {reverse: false}): string | number {

    if (typeof input === 'number') {
        return input*input;

    } else {
        return config.reverse? input.toUpperCase().split('').reverse().join('') : input.toUpperCase()
    }

}

console.log(processData('dupa', {reverse: true}));
console.log(processData('dupa'));
console.log(processData(4));
