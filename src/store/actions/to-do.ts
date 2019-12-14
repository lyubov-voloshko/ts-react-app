import { TODO_ADD, TODO_COMPLETE, TODO_REMOVE, TODO_REQUEST, TODO_SET_CURRENT_VALUE, TodoActionTypes } from '../../types/actions';

import { AppState } from '../reducers/root';
import { Dispatch } from "redux";
import { ThunkAction } from 'redux-thunk'
import { Todo } from '../../types/to-do';

export const changeTodoValue = (value: string): TodoActionTypes => ({
    type: TODO_SET_CURRENT_VALUE,
    value
});

export const addTodo = (todo: Todo): TodoActionTypes => ({
    type: TODO_ADD,
    todo
});

export const removeTodo = (index: number): TodoActionTypes => ({
    type: TODO_REMOVE,
    index
});

export const completeTodo = (index: number): TodoActionTypes => ({
    type: TODO_COMPLETE,
    index
});

export const requestAddTodo = (todo: Todo): any => {
    return (dispatch: Dispatch<TodoActionTypes>, getState: () => AppState) => {
        setTimeout( function() {
            dispatch(addTodo(todo))
        }, 3000)
    }
};
