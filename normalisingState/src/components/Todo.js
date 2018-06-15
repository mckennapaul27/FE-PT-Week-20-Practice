import React from 'react';
import PT from 'prop-types';

const Todo = (props) => {
    return (
        <li
            onClick={() => props.toggleTodo(props.index)}
            style={{textDecoration: props.completed ? 'line-through': 'none'}}
        >
        {props.task}
        </li>
    )
}

Todo.propTypes = {
    index: PT.number.isRequired,
    task: PT.string.isRequired,
    completed: PT.bool.isRequired,
    toggleTodo: PT.func.isRequired
}

export default Todo;