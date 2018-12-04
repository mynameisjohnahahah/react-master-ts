import {createAction} from 'redux-actions'

import {ITodoModel, IGetCookie} from './models'

import {ADD_TODO, GET_COOKIE} from './types'

const addTodo = createAction<ITodoModel, string>(
    ADD_TODO,
    (text: string) => ({text, completed: false})
);

const addTodo2 = createAction<ITodoModel, string>(
    ADD_TODO,
    (text: string) => ({text, completed: false})
);

const getCookie = createAction<IGetCookie, string>(
    GET_COOKIE,
    (text: string) => ({text})
);

export {
    addTodo,
    addTodo2,
    getCookie
}