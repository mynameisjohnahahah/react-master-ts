import {combineReducers} from 'redux';
import {todoReducer, todoReducer2, todoReducer3} from '../containers/home/modules/reducers';

const rootReducer = combineReducers({
    todo: todoReducer as any,
    todo2: todoReducer2 as any,
    cookie: todoReducer3
});

export default rootReducer;