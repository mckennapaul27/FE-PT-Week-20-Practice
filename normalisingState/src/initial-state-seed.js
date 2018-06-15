import uuid from 'uuid';
import faker from 'faker';
import {random, range} from 'lodash';

export const getInitialState = () => {
    const state = {
        lists: {},
        todos: {}
    }

    const x =  ['Todo', 'In progress', 'Done'];
     x.forEach(title => {        
        const listId = uuid.v4();
        state.lists[listId] = {id: listId, title}
    })

    Object.keys(state.lists).forEach(listId => {       
        range(random(2, 6)).forEach(() => {
            const todoId = uuid.v4();
            state.todos[todoId] = {
                id: todoId,
                task: faker.lorem.words(random(2, 5)),
                completed: false,
                listId
            }
        })
    })

    return state;
}

