import React from 'react';
import PT from 'prop-types';

class AddToDoForm extends React.Component {
    state = {
        task: ''
    };
    handleTaskChange = event => {
        this.setState({
            task: event.target.value
        });
    };
    handleSubmit = event => {
        this.props.addTodo(this.state.task)
        event.preventDefault()
    };
    render() {
        const {task} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    onChange={this.handleTaskChange}
                    placeholder='Type a new todo task...'
                    value={task}
                />
                <button type='submit'>Add Todo</button>
            </form>
        )
    }
}

AddToDoForm.propTypes = {
    addTodo: PT.func.isRequired
}

export default AddToDoForm;