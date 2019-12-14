import { Todo } from './to-do';

export const TODO_SET_TASK_VALUE = "TODO_SET_TASK_VALUE"
export const TODO_SET_PERSONE_VALUE = "TODO_SET_PERSONE_VALUE"
export const TODO_ADD = "TODO_ADD"
export const TODO_REMOVE = "TODO_REMOVE"
export const TODO_COMPLETE = "TODO_COMPLETE"
export const TODO_REQUEST = "TODO_REQUEST"

export interface SetTaskValueAction {
    type: "TODO_SET_TASK_VALUE";
    value: string
}

export interface SetPersoneValueAction {
    type: "TODO_SET_PERSONE_VALUE";
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

export type TodoActionTypes = SetTaskValueAction | SetPersoneValueAction | AddTodoAction | RemoveTodoAction | CompleteTodoAction | RequestTodoAction;