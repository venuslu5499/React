
// function square (x){
//     return x * x;
// };

// console.log(square(8));

// const  squareArrow = (x) => { //anonymous or unnamed function
//     return x * x;
// };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(4));

// Challenge - use arrow function
// getFirstName('Mike Smith') -> 'Mike'


const getFirstName = (x) => {
    return x.split(" ")[0];
};

const getLastName = (y) => y.split(" ")[1];

const fullName = "Beans Lu";

console.log(getFirstName(fullName));
console.log(getLastName(fullName));