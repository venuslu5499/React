// let - updated but not redeclared
// const - cannot be updated nor declared
var nameVar = "Venus";
var nameVar = 'Beans';
console.log('nameVar', nameVar); 

let nameLet = "Jen";
nameLet = "Julie";
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst)

function getPetName(){
    var petName = "Hal";
    return petName;
}
// var - globally scoped or function scope
// let, const - block scope (functions, if statements, etc)
// Block Scoping

const fullName = 'Venus Lu';
let firstName = 'Bean';

console.log(firstName);

if(fullName){
    firstName = fullName.split(" ")[0];
    console.log(firstName);
}

