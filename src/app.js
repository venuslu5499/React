class IndecisionApp extends React.Component{ //class based components
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        }
    }

    handleDeleteOptions(){
        this.setState(() => ({options: []}))
    }

    handleDeleteOption(optionToRemove){
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }

    handlePick(){
        const random = Math.floor(Math.random()*this.state.options.length)
        const opt = this.state.options[random]
        alert(opt)
    }

    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item';
        } else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    }
    
    render(){
        const subtitle = 'Put your life in the hands of a computer'


        return(
            <div>
                {/* title, subtitle - props */}
                <Header  subtitle={subtitle}/> 
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick = {this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'What ToDo?'
}

const Action = (props) =>{
    return (
    <div>
        <button 
            disabled={!props.hasOptions}
            onClick={props.handlePick}>
                What Should I do?
        </button>
    </div>   
    )
}


const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }

        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick = {() => {
                    props.handleDeleteOption(props.optionText)
                }}
            >
                Remove
            </button>
        </div>
    )
}

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.opt.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error: error}))
    }

    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="opt" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));