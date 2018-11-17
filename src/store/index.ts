import {Store, createStore, applyMiddleware} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducer';
import {RootState} from './initState';
import {History} from 'history';

export function configureStore(history: History, initialState?: RootState): Store<RootState> {

    const middleware = applyMiddleware(
        thunkMiddleware,
        routerMiddleware(history));

    return createStore(
        rootReducer as any,
        initialState as any,
        middleware
    ) as Store<RootState>;
}