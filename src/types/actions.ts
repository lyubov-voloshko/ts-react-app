import { Todo } from './to-do';

export const TODO_SET_CURRENT_VALUE = "TODO_SET_CURRENT_VALUE"
export const TODO_ADD = "TODO_ADD"
export const TODO_REMOVE = "TODO_REMOVE"
export const TODO_COMPLETE = "TODO_COMPLETE"
export const TODO_REQUEST = "TODO_REQUEST"

export interface SetCurrentValueAction {
    type: "TODO_SET_CURRENT_VALUE";
    value: string
}

export interface AddTodoAction {
    type: "TODO_ADD";
    todo: Todo
}

export interface RemoveTodoAction {
    type: "TODO_REMOVE";
    index: number
}

export interface CompleteTodoAction {
    type: "TODO_COMPLETE";
    index: number
}

export interface RequestTodoAction {
    type: "TODO_REQUEST";
    todo: Todo
}

export type TodoActionTypes = SetCurrentValueAction | AddTodoAction | RemoveTodoAction | CompleteTodoAction | RequestTodoAction;