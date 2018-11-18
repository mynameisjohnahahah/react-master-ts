import {combineReducers} from 'redux';
import {todoReducer} from '../containers/home/modules/reducers';
import {todoReducer2} from '../containers/home/modules/reducers';

const rootReducer = combineReducers({
    todo: todoReducer as any,
    todo2: todoReducer2 as any
});

export default rootReducer;