const toggleTodo = (todos, index) => {
    return todos.map((todo, i) => {
        if (i === index) {
            return Object.assign({}, todo, {
                completed: !todo.completed,
                key: i
            })
        } else {
            return todo;
        }
    })
}

const addToDo = (todos, task) => {
    const newTodo = {
        task,
        completed: false
    }
    return todos.concat(newTodo);
    //  could use return [...todos, newTodo]
}

module.exports = {
    toggleTodo,
    addToDo
}