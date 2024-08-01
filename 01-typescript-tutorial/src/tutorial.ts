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


// function processData(input: string | number, config: {reverse: boolean} = {reverse: false}): string | number {
//
//     if (typeof input === 'number') {
//         return input*input;
//
//     } else {
//         return config.reverse? input.toUpperCase().split('').reverse().join('') : input.toUpperCase()
//     }
//
// }
//
// console.log(processData('dupa', {reverse: true}));
// console.log(processData('dupa'));
// console.log(processData(4));



// type User = { id: number; name: string; isActive: boolean }
//
// const john: User = {
//     id: 1,
//     name: 'john',
//     isActive: true,
// };
// const susan: User = {
//     id: 1,
//     name: 'susan',
//     isActive: false,
// };
//
// function createUser(user: User): User {
//     console.log(`Hello there ${user.name.toUpperCase()} !!!`);
//
//     return user;
// }


// # Challenge 4
//
// - Define the Employee type: Create a type Employee with properties id (number), name (string), and department (string).
//
// - Define the Manager type: Create a type Manager with properties id (number), name (string), and employees (an array of Employee).
//
// - Create a Union Type: Define a type Staff that is a union of Employee and Manager.
//
// - Create the printStaffDetails function: This function should accept a parameter of type Staff. Inside the function, use a type guard to check if the 'employees' property exists in the passed object. If it does, print a message indicating that the person is a manager and the number of employees they manage. If it doesn't, print a message indicating that the person is an employee and the department they belong to.
//
// - Create Employee and Manager objects: Create two Employee objects. One named alice and second named steve. Also create a Manager object named bob who manages alice and steve.
//
// - Test the function: Call the printStaffDetails function with alice and bob as arguments and verify the output.

//
// type Employee = { id: number; name: string; department: string };
// type Manager = { id: number; name: string; employess: Employee[] };
//
// type Staff = Employee | Manager;
//
//
//
// function printStaffDetails(person: Staff) {
//     if ('employess' in person) {
//         return `This person is Manager, he manage ${person.employess.length}`
//     } else {
//         return `This person is standard Employee, he belongs to ${person.department} department.`
//     }
// }
//
// const roman: Employee = {
//     id: 1,
//     name: 'Roman',
//     department: 'Cleaning'
// }
//
// const bozena: Employee = {
//     id: 2,
//     name: 'Bozena',
//     department: 'Cleaning'
// }
//
// const edward: Manager = {
//     id: 11,
//     name: 'Edward',
//     employess: [roman, bozena]
// }
//
//
// console.log(printStaffDetails(roman));
// console.log(printStaffDetails(edward));

// ## Challenge 5
//
// - Start by defining an interface Computer using the interface keyword. This will serve as a blueprint for objects that will be of this type.
// - Inside the interface, define the properties that the object should have. In this case, we have id, brand, ram, and storage.
// - Use the readonly keyword before the id property to indicate that it cannot be changed once it's set.
// - Use the ? after the storage property to indicate that this property is optional and may not exist on all objects of this type.
// - Also inside the interface, define any methods that the object should have. In this case, we have upgradeRam, which is a function that takes a number and returns a number.
// - Now that we have our interface, we can create an object that adheres to this interface. This object should have all the properties defined in the interface (except for optional ones, which are... optional), and the methods should be implemented.
// - Finally, we can use our object. We can call its upgradeRam method to increase its RAM.

//
// interface Computer {
//     readonly id: number,
//     brand: string,
//     ram: number,
//     storage?: number | string
//
//     upgradeRam(ram: number): number
// }
//
// const dell: Computer = {
//     id: 123,
//     brand: 'Dell',
//     ram: 8,
//     storage: '256 gb',
//
//     upgradeRam(number) {
//         this.ram = number;
//         return this.ram
//     }
// }
//
// console.log(dell.id);
// console.log(dell.brand);
// console.log(dell.ram);
// console.log(dell.storage);
//
// const increaseRam = dell.upgradeRam(16);
// console.log(dell.ram);
// console.log(increaseRam);
//
// console.log(dell);

//
// ## Challenge 6 - Part 1
//
// - Define the Person interface Start by defining a Person interface with a name property of type string.
// - Define the DogOwner interface Next, define a DogOwner interface that extends Person and adds a dogName property of type string.
// - Define the Manager interface Then, define a Manager interface that extends Person and adds two methods: managePeople and delegateTasks. Both methods should have a return type of void.
// - Define the getEmployee function Now, define a function called getEmployee that returns a Person, DogOwner, or Manager. Inside this function, generate a random number and use it to decide which type of object to return. If the number is less than 0.33, return a Person. If it's less than 0.66, return a DogOwner. Otherwise, return a Manager.
// - Finally, create a variable called employee that can be a Person, DogOwner, or Manager, and assign it the return value of getEmployee. Then, log employee to the console.
//
// interface Person {
//     name: string,
//
// }
//
// interface DogOwner extends Person {
//     dogName: string,
// }
//
// interface Manager extends Person {
//     managePeople(): void,
//     delegateTasks():void
// }
//
// function getEmployee(): Person | DogOwner | Manager {
//     const randomNumber = Math.random();
//     console.log(randomNumber);
//
//     if (randomNumber < 0.33) {
//         return {
//             name: 'John'
//         }
//
//     } else if (randomNumber > 0.33 && randomNumber < 0.66){
//         return  {
//             name: 'Tomek',
//             dogName: 'Azor'
//         }
//     } else {
//         return {
//             name: 'Janusz',
//             managePeople() {
//                 console.log('Janusz zarzadza')
//             },
//             delegateTasks() {
//                 console.log('Janusz deleguje')
//             }
//         }
//
//     }
// }
//
// const employee: Person | DogOwner | Manager = getEmployee();
//
// function isManager (myObject: Person | DogOwner | Manager): myObject is Manager {
//     return 'managePeople' in myObject;
// }
//
// if (isManager(employee)) {
//     employee.delegateTasks();
//     employee.managePeople();
// }
//
// console.log(employee);

// ------------------
// TOPIC: TUPLE & ENUMS
// ##Challenge 7
// Define an enum named UserRole with members Admin, Manager, and Employee.
//     Define a type alias named User with properties id (number), name (string), role (UserRole), and contact (a tuple with two elements: email as string and phone as string).
// Define a function named createUser that takes a User object as its parameter and returns a User object.
//     Call the createUser function with an object that matches the User type, store the result in a variable, and log the variable to the console.

// enum UserRole {
//     Admin,
//     Manager,
//     Employee,
// }
//
// type User = {
//     id: number,
//     name: string,
//     role: UserRole,
//     contact: [string, string],
// };
//
// function createUser(user: User): User {
//     return user;
// }
//
// const user11: User = {
//     id: 11,
//     name: 'Bogdan',
//     role: UserRole.Employee,
//     contact: ['bogdan@email.com', '606111555']
// }
//
// const result = createUser(user11);
// console.log(result);



// ## Challenge 8 - "typeof" guard
//
// - starter code
//
//     ```ts
// type ValueType = string | number | boolean;
//
// let value: ValueType;
// const random = Math.random();
// value = random < 0.33 ? 'Hello' : random < 0.66 ? 123.456 : true;
// ```
//
// - Define the function checkValue that takes one parameter value of type ValueType.
// - Inside the function, use an if statement to check if value is of type string. If it is, log value converted to lowercase and then return from the function.
// - If value is not a string, use another if statement to check if value is of type number. If it is, log value formatted to two decimal places and then return from the function.
// - If value is neither a string nor a number, it must be a boolean. Log the string "boolean: " followed by the boolean value.
// - Finally, call the checkValue function with value as the argument.


// type ValueType = string | number | boolean;
//
// let value: ValueType;
// const random = Math.random();
// value = random < 0.33 ? 'Hello' : random < 0.66 ? 123.456 : true;
//
// function checkValue (value: ValueType): string | number | void {
//     if (typeof value === 'string') {
//         console.log(value.toLowerCase());
//         return;
//     }
//     else if (typeof value === 'number') {
//         console.log(value.toFixed(2));
//         return;
//     }
//     else {
//         console.log(`boolean: ${value}`);
//     }
// }
//
// checkValue(value);

// ## Challenge 9 - Equality Narrowing
//
// In TypeScript, equality narrowing is a form of type narrowing that occurs when you use equality checks like === or !== in your code
//
// - starter code
//
//     ```ts
// type Dog = { type: 'dog'; name: string; bark: () => void };
// type Cat = { type: 'cat'; name: string; meow: () => void };
// type Animal = Dog | Cat;
// ```
//
// - Define a function named makeSound that takes one parameter animal of type Animal.
// - Inside the function, use an if statement to check if animal.type is 'dog'.
// - If animal.type is 'dog', TypeScript knows that animal is a Dog in this block. In this case, call the bark method of animal.
// - If animal.type is not 'dog', TypeScript knows that animal is a Cat in the else block. In this case, call the meow method of animal.
// - Now you can call the makeSound function with an Animal as the argument. The function will call the appropriate method (bark or meow) depending on the type of the animal.


// type Dog = { type: 'dog'; name: string; bark: () => void };
// type Cat = { type: 'cat'; name: string; meow: () => void };
// type Animal = Dog | Cat;

// function makeSound( animal:Animal ): void {
//     if (animal.type === 'dog') {
//         animal.bark();
//     }
//     else {
//         animal.meow();
//     }
// }

// ## Challenge 10 - check for property
//
//     The "in" operator in TypeScript is used to narrow down the type of a variable when used in a conditional statement.It checks if a property or method exists on an object. If it exists, TypeScript will narrow the type to the one that has this property.
//
// - starter code
//
//     ```ts
// type Dog = { type: 'dog'; name: string; bark: () => void };
// type Cat = { type: 'cat'; name: string; meow: () => void };
// type Animal = Dog | Cat;
// ```
//
// - Define a function named makeSound that takes one parameter animal of type Animal.
// - Inside the function, use an if statement with the in operator to check if the bark method exists on the animal object.
// - If the bark method exists on animal, TypeScript knows that animal is a Dog in this block. In this case, call the bark method of animal.
// - If the bark method does not exist on animal, TypeScript knows that animal is a Cat in the else block. In this case, call the meow method of animal.
// - Now you can call the makeSound function with an Animal as the argument. The function will call the appropriate method (bark or meow) depending on the type of the animal.

// type Dog = { type: 'dog'; name: string; bark: () => void };
// type Cat = { type: 'cat'; name: string; meow: () => void };
// type Animal = Dog | Cat;
//
// function makeSound (animal: Animal) {
//     if ('bark' in animal) {
//         animal.bark();
//     }
//     else {
//         animal.meow();
//     }
// }


// ## Challenge 11 - "Truthy"/"Falsy" guard
//
// In TypeScript, "Truthy"/"Falsy" guard is a simple check for a truthy or falsy value
//
// - Define a function named printLength that takes one parameter str which can be of type string, null, or undefined.
// - Inside the function, use an if statement to check if str is truthy. In JavaScript and TypeScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy (i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN).
// - If str is truthy, it means it's a string (since null and undefined are falsy). In this case, log the length of str using the length property of the string.
// - If str is not truthy (i.e., it's either null or undefined), log the string 'No string provided'.
//
// - Now you can call the printLength function with a string, null, or undefined as the argument. The function will print the length of the string if a string is provided, or 'No string provided' otherwise.


// function printLength(str : string | null | undefined) {
//     if (typeof str === 'string') {
//         console.log(str.length)
//     } else {
//         console.log('No string provided')
//     }
// }
//
// printLength('dupa');
// printLength(null);
// printLength(undefined);


// ## Challenge 12 - "instanceof" type guard
//
// The instanceof type guard is a way in TypeScript to check the specific class or constructor function of an object at runtime. It returns true if the object is an instance of the class or created by the constructor function, and false otherwise.
//
//     ```ts
// try {
//   // Some code that may throw an error
//   throw new Error('This is an error');
// } catch (error) {
//   if (error instanceof Error) {
//     console.log('Caught an Error object: ' + error.message);
//   } else {
//     console.log('Caught an unknown error');
//   }
// }
// ```
//
// - Start by defining the function using the function keyword followed by the function name, in this case checkInput.
// - Define the function's parameter. The function takes one parameter, input, which can be of type Date or string. This is denoted by input: Date | string.
// - Inside the function, use an if statement to check if the input is an instance of Date. This is done using the instanceof operator.
// - If the input is an instance of Date, return the year part of the date as a string. This is done by calling the getFullYear method on the input and then converting it to a string using the toString method.
// - If the input is not an instance of Date (which means it must be a string), return the input as it is.
// - After defining the function, you can use it by calling it with either a Date or a string as the argument. The function will return the year part of the date if a Date is passed, or the original string if a string is passed.
// - You can store the return value of the function in a variable and then log it to the console to see the result.

try {
  // Some code that may throw an error
  throw new Error('This is an error');
} catch (error) {
  if (error instanceof Error) {
    console.log('Caught an Error object: ' + error.message);
  } else {
    console.log('Caught an unknown error');
  }
}

function checkInput(input : Date | string){
    if (input instanceof Date) {
        return input.getFullYear().toString();
    }
    else {
        return input;
    }
}

const data = checkInput(new Date());
const random = checkInput('01-08-2024');

console.log(data);
console.log(random);