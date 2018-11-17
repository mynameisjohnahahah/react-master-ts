import {combineReducers} from 'redux';
import {todoReducer} from '../containers/home/modules/reducers';

const rootReducer = combineReducers({
    todo: todoReducer as any
});

export default rootReducer;