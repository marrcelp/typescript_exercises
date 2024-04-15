// - Create a new array of names.
// - Write a new function that checks if a name is in your array. This function should take a name as a parameter and return a boolean.
// - Use this function to check if various names are in your array and log the results.

const names: string[] = ['marcel', 'anula', 'zenon', 'janusz'];

function findName(name: string): boolean {
   return names.includes(name);
}

const name = 'anula'

if (findName(name) === true) {
    console.log(`${name} is in the array`);
} else {
        console.log(`${name} is not in the array`)
    }