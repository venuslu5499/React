//use classes to reuse codes

// Setup construction to take name and age (default to 0)
// getDescription - Andrew Mead is 26 years(s) old.

// this - reference to the current instance of the class

class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return `Hi. I am ${this.name}.`;
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person  { //extends an existing class
    constructor(name, age, major){
        super(name, age); // call the parent constructor function 
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    } 

    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveller extends Person {
    constructor(name, age, location){
        super(name, age);
        this.location = location;
    }

    hasLocation(){
        return !!this.location;
    }

    getGreeting(){
        let description = super.getGreeting();
        if(this.hasLocation()){
            description += ` I'm visiting from ${this.location}.`
        }
        return description;
    }
}

const me = new Traveller('Venus Lu', 21, 'Manila');
console.log(me.getGreeting());

const other = new Traveller('James Pe', 20);
console.log(other.getGreeting());


