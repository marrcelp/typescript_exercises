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

interface Person {
    name: string,

}

interface DogOwner extends Person {
    dogName: string,
}

interface Manager extends Person {
    managePeople(): void,
    delegateTasks():void
}

function getEmployee(): Person | DogOwner | Manager {
    const randomNumber = Math.random();
    console.log(randomNumber);

    if (randomNumber < 0.33) {
        return {
            name: 'John'
        }

    } else if (randomNumber > 0.33 && randomNumber < 0.66){
        return  {
            name: 'Tomek',
            dogName: 'Azor'
        }
    } else {
        return {
            name: 'Janusz',
            managePeople() {
                console.log('Janusz zarzadza')
            },
            delegateTasks() {
                console.log('Janusz deleguje')
            }
        }

    }
}

const employee: Person | DogOwner | Manager = getEmployee();

function isManager (myObject: Person | DogOwner | Manager): myObject is Manager {
    return 'managePeople' in myObject;
}

if (isManager(employee)) {
    employee.delegateTasks();
    employee.managePeople();
}

console.log(employee);