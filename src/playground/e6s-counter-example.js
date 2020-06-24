let count = 0;

const addOne = (x) => {
    count++;
    renderCounterApp();
};

const minusOne = (x) => {
    count--;
    renderCounterApp();
}

const reset = (x) => {
    count = 0;
    renderCounterApp()
}

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
    const templateThree = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(templateThree, appRoot);
};


renderCounterApp();
