import {handleActions} from 'redux-actions';
import {ADD_TODO, ADD_TODO2} from './types';
import {TodoModel} from './models'

const initialState: TodoModel = {
    completed: true,
    id: 1,
    text: 'Use Redux',
};

const initialState2: TodoModel = {
    completed: true,
    id: 1,
    text: 'test',
};

export const todoReducer = handleActions<TodoModel>({
    [ADD_TODO]: (state: any, action: any) => {
        console.log('reducer->state:', state);
        console.log('reducer->action:', action);
        return {completed: true, text: action.payload.text, id: 2};
    },
}, initialState);

export const todoReducer2 = handleActions<TodoModel>({
    [ADD_TODO2]: (state: any, action: any) => {
        return {completed: true, text: action.payload.text, id: 3};
    },
}, initialState2);