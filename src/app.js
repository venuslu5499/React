const obj = {
    name: "Beanie",
    getName(){
        return this.name;
    }
}

const getName = obj.getName.bind(obj); // bind extends this bound 

console.log(getName());

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
    handlePick(){
        alert('handlePick');
    }

    render(){
        return (
            <div>
                <button onClick={this.handlePick}>What Should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component{
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this); 
    }

    handleRemoveAll(){
        {
            console.log(this.props.option)
            // alert("handleRemoveAll");
        }
    }

    render(){
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {
                    this.props.option.map((option) => <Option key={option} optionText={option}/>)
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