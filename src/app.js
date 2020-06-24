class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>What ToDo?</h1>
                <h2>Let the machine decide for you.</h2>
            </div>
        )
    }
}

class Action extends React.Component{
    render(){
        return (
            <div>
                <button>What Should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component{
    render(){
        return (
            <div>
                <ol>
                    <li>Item One</li>
                    <li>Item Two</li>
                </ol>
            </div>
        )
    }
}

class AddOption extends React.Component{
    render(){
        return(
            <div>
                <input type="text" />
                <button>Add Option</button>
            </div>
        )
    }
}

// Options ->  Options component here
// AddOption -> AddOption componend here

const jsx = (
  <div>
      <Header />
      <Action />
      <Options />
      <AddOption />
  </div>  
);

ReactDOM.render(jsx, document.getElementById("app"));