
const page = {
    title: "Visibility Toggle",
    details: "Hey. These are some details you can now see!",
    counter: 0
};

const toggle = () => {
    if(page.counter%2 === 0){
        return true;
    } else {
        return false;
    }
}

const click = () => {
    page.counter++;
    renderBuildIt();

}

const appRoot = document.getElementById("app");

const renderBuildIt = () => {
    const template = (
        <div>
            <h1>{page.title}</h1>
            <button onClick={click}>{toggle() ? "Show Details" : "Hide Details"}</button>
            {!toggle() && <p>{page.details}</p>}
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderBuildIt();
