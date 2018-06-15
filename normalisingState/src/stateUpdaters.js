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

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// {
//     "lists": [
//         {
//             "title": "To Do",
//             "todos": [
//                 {"task": "Task #1", "completed": "true"},
//                 {"task": "Task #2", "completed": "false"},
//                 {"task": "Task #3", "completed": "false"}
//             ]
//         },
//         {
//             "title": "In Progress",
//             "todos": [
//                 {"task": "Task #4", "completed": "true"},
//                 {"task": "Task #5", "completed": "false"},
//                 {"task": "Task #6", "completed": "false"}
//             ]
//         }
//     ]
// }

// Below is the function with data organised in array's like above

// const moveToDo = (lists, srcIndex, destIndex, todoIndex) => {
//     const todo = lists[srcIndex].todos[todoIndex]
//     return lists.map((list, listIndex) => {
//         if(listIndex === srcIndex) {
//             // remove the todo
//             return Object.assign({},list, {
//                 todos: list.todos.slice(0, todoIndex).concat(list.todos.slice(todoIndex +1))
//             })
//         }
//         else if(listIndex === destIndex) {
//             // add the todo
//             return Object.assign({}, list, {
//                 todos: list.todos.concat(todo)
//             })
//         }
//         else {
//             return list;
//         }
//     })
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// {
//     "lists": {
//         "1": {
//             "title": "To Do"
//         },
//         "2": {
//             "title": "In Progress"
//         }
//     },
//     "todos": {
//         "1": {"task": "Task #1", "completed": "true", "listId": 1},
//         "2": {"task": "Task #2", "completed": "false", "listId": 1},
//         "3": {"task": "Task #3", "completed": "false", "listId": 1},
//         "4": {"task": "Task #4", "completed": "true", "listId": 2},
//         "5": {"task": "Task #5", "completed": "false", "listId": 2},
//         "6": {"task": "Task #6", "completed": "false", "listId": 2}
//     }
// }

// Below is the function with data organised in objects like above data

const moveToDo = (state, destList, taskId) => {
   return Object.assign({}, state, {
       todos: Object.assign({}, state.todos, {
           [taskId]: Object.assign({}, state.todos[taskId], {
               listId: destList
           })
       })
   })
}

module.exports = {
    toggleTodo,
    addToDo
}