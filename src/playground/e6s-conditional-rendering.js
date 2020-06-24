const user = { //object
    name: "Venus",
    age: 21,
    location: 'Philippines'
};

function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    } else {
        return undefined; //similar as to removing else
    }
}

// ? - if condition passes, use the value before colon and vice versa
// && - do one thing or do nothing at all (logical and)
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1> 
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
