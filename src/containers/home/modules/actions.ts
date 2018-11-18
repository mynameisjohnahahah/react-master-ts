import {createAction} from 'redux-actions';

import {TodoModel} from './models';

import {ADD_TODO} from './types';

const addTodo = createAction<TodoModel, string>(
    ADD_TODO,
    (text: string) => ({text, completed: false})
);

const addTodo2 = createAction<TodoModel, string>(
    ADD_TODO,
    (text: string) => ({text, completed: false})
);
export {
    addTodo,
    addTodo2
}