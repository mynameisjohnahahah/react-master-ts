import {handleActions} from 'redux-actions';
import {ADD_TODO, ADD_TODO2, GET_COOKIE} from './types';
import {ITodoModel, IGetCookie} from './models'

const initialState: ITodoModel = {
    completed: true,
    id: 1,
    text: 'Use Redux',
};

const initialState2: ITodoModel = {
    completed: true,
    id: 1,
    text: 'test222',
};

const initialState3: IGetCookie = {
    text: '',
};

export const todoReducer = handleActions<ITodoModel>({
    [ADD_TODO]: (state: any, action: any) => {
        console.log('reducer->state:', state);
        console.log('reducer->action:', action);
        return {completed: true, text: action.payload.text, id: 2};
    },
}, initialState);

export const todoReducer2 = handleActions<ITodoModel>({
    [ADD_TODO2]: (state: any, action: any) => {
        return {completed: true, text: action.payload.text, id: 3};
    },
}, initialState2);

export const todoReducer3 = handleActions<IGetCookie>({
    [GET_COOKIE]: (state: any, action: any) => {
        console.log('reducer->action:', action);
        return {completed: true, text: action.payload.text, id: 3};
    },
}, initialState3);