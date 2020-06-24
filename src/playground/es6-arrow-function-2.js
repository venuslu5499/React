// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    //console.log(arguments);
    return a + b;
}
console.log(add(55, 1))

// this keyword - no longer bound (opposite of arguments object)
// object property + anonymous function - this is bound
// object property + arrow function - this is not bound
// arrow function - this is bound
// anonymous function - this is not bound

const user = {
    name: 'Andrew',
    cities: ['Manila', 'Quezon', 'Rizal'], //array of strings
    printPlacesLived() { 
        return this.cities.map((city) => this.name +" has lived in " +city); //map returns an array object
        // this.cities.forEach((city) => { //forEach iterates through each object in the array
        //     console.log(this.name +" has lived in " +city);
        // });
    }
};
console.log(user.printPlacesLived());

// Challenge area
    // numbers - array
    // multiplyBy - single number
    // multiply - return a new array where the number have been multiplied

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((num) => num*this.multiplyBy);
    }
};

console.log(multiplier.multiply());

