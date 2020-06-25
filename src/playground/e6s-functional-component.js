// stateless functional component - no state
// functional component - faster than class components
const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
};

ReactDOM.render(<User name="Venus" age={21} />, document.getElementById("app"));