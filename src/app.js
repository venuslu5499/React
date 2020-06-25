
class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: ['One', 'Two', 'Three']
        }
    }

    handleDeleteOptions(){
        this.setState(() => {
            return {
                options: []
            }
        })
    }

    handlePick(){
        const random = Math.floor(Math.random()*this.state.options.length)
        const opt = this.state.options[random]
        alert(opt)
    }

    render(){
        const title = 'What ToDo?';
        const subtitle = 'Put your life in the hands of a computer'
        const option = ['Item One', 'Item Two', 'Item Three']

        return(
            <div>
                {/* title, subtitle - props */}
                <Header title={title} subtitle={subtitle}/> 
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick = {this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions = {this.handleDeleteOptions}
                />
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
                <button 
                    disabled={!this.props.hasOptions}
                    onClick={this.props.handlePick}>
                        What Should I do?
                </button>
            </div>
        )
    }
}

class Options extends React.Component{
    render(){
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
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
                {this.props.optionText}
            </div>
        )
    }
}

class AddOption extends React.Component{
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.opt.value.trim();

        if(option){
            alert(option);
        }

    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="opt" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

// Options ->  Options component here
// AddOption -> AddOption componend here

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));