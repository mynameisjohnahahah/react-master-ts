import {handleActions} from 'redux-actions';
import {ADD_TODO} from './types';
import {TodoModel} from './models'

const initialState: TodoModel = {
    completed: true,
    id: 1,
    text: 'Use Redux',
};

export const todoReducer = handleActions<TodoModel>({
    [ADD_TODO]: (state: any, action: any) => {
        console.log('reducer->state:', state);
        console.log('reducer->action:', action);
        return {completed: true, text: action.payload.text, id: 2};
    },
}, initialState);