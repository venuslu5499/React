
class Visibility extends React.Component {
    render(){
        const toggle = true;
        return (
            <div>
                <h1>Visibility</h1>
                <Action />
            </div>
        )
    }
}

class Action extends React.Component{
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this)
        this.state = {
            visible: true
        }
    }
    
    toggle(){
        this.setState((prevState) => {
            console.log(prevState);
            return{
                visible: !prevState.visible
            }  
        })
    }

    render(){
        return (
            <div>
                <button onClick={this.toggle}>{this.state.visible ? "Show Details" : "Hide Details"}</button>
                {!this.state.visible && <p>"Hey. These are some details you can now see!"</p>}
            </div>
        )
    }
}

ReactDOM.render(<Visibility />, document.getElementById("app"));


// const page = {
//     title: "Visibility Toggle",
//     details: "Hey. These are some details you can now see!",
//     counter: 0
// };

// const toggle = () => {
//     if(page.counter%2 === 0){
//         return true;
//     } else {
//         return false;
//     }
// }

// const click = () => {
//     page.counter++;
//     renderBuildIt();

// }

// const appRoot = document.getElementById("app");

// const renderBuildIt = () => {
//     const template = (
//         <div>
//             <h1>{page.title}</h1>
//             <button onClick={click}>{toggle() ? "Show Details" : "Hide Details"}</button>
//             {!toggle() && <p>{page.details}</p>}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };

// renderBuildIt();
