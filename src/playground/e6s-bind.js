const obj = {
    name: "Beanie",
    getName(){
        return this.name;
    }
}

const getName = obj.getName.bind(obj); // bind extends this bound 

console.log(getName());