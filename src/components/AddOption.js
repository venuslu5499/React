import React from 'react';

export default class AddOption extends React.Component{
    state = {
        error: undefined
    };

    handleAddOption = (e) => {
        e.preventDefault();
        console.log('hi');
        const option = e.target.elements.opt.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error: error}))

        if(!error) {
            e.target.elements.opt.value = '';
        };
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