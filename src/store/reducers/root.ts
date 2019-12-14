import { Store, applyMiddleware, compose, createStore } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import { TodoActionTypes } from '../../types/actions'
import { combineReducers } from 'redux';
import todoReducer from './to-do';

const rootReducer = combineReducers({
    todoState: todoReducer
})

export type AppState = ReturnType<typeof rootReducer>

//const store = createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware<AppState, TodoActionTypes>))

/*export const store = compose<Store<AppState, TodoActionTypes>>(
    rootReducer,
    applyMiddleware(thunk as ThunkMiddleware<AppState, TodoActionTypes>),
    //@ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)(createStore)*/


//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
})) : compose;

export const store = createStore(
    rootReducer, 
    composeEnhancers(
        applyMiddleware(
            thunk as ThunkMiddleware<AppState, TodoActionTypes>
        )
    ),
);

export default rootReducer



