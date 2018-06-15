const getTodosForList = (state, listId) => {
    return Object.values(state.todos).filter(todo => {
        return todo.listId === listId;
    })
}