class IndecisionApp extends React.Component{
    render(){
        const title = 'What ToDo?';
        const subtitle = 'Put your life in the hands of a computer'
        const option = ['Item One', 'Item Two', 'Item Three']

        return(
            <div>
                {/* title, subtitle - props */}
                <Header title={title} subtitle={subtitle}/> 
                <Action />
                <Options option={option} />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
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
                {
                    this.props.option.map((option) => <p>{option}</p>)
                }
                <Option />
            </div>
        )
    }
}

class Option extends React.Component{
    render(){
        return(
            <div>
                Option component here 
            </div>
        )
    }
}

class AddOption extends React.Component{
    render(){
        return(
            <div>
                AddOption component here
            </div>
        )
    }
}

// Options ->  Options component here
// AddOption -> AddOption componend here

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));