import { Persone } from '../../types/to-do';
import { State } from '../../types/to-do';
import { TodoActionTypes } from '../../types/actions';
import { act } from '@testing-library/react';

export const initialState: State = {
    taskValue: '',
    personeValue: '',
    todos: []
  }

const getPersone = (personeName: {full: string}): Persone => {
    const parts = personeName.full.split(/\s/g);
    const name = {
        full: personeName.full,
        first: parts[0],
        middle: parts.length === 2 ? undefined : parts[1],
        last: parts[parts.length - 1]
    }
    return {
        name
    }
}

const todoReducer = (state = initialState, action: TodoActionTypes): State => {
    switch(action.type) {
        case "TODO_SET_TASK_VALUE": {
            const taskValue = action.value;
            return {...state, taskValue}
        }
        case "TODO_SET_PERSONE_VALUE": {
            const personeValue = action.value;
            return {...state, personeValue}
        }    
        case "TODO_ADD": {
            let currentTodos = state.todos;
            let involvedPersone;
            if (currentTodos.length === 0) {
                currentTodos = []
            }
            if (action.todo.involvedPersone) {
                involvedPersone = getPersone(action.todo.involvedPersone.name);
            } else {
                involvedPersone = undefined;
            }
            currentTodos.push({ 
                task: action.todo.task, 
                completed: action.todo.completed, 
                involvedPersone });
            const updatedTodos = [... currentTodos];
            return {...state, todos: updatedTodos };
        }
        case "TODO_REMOVE": {
            let currentTodos = state.todos;
            currentTodos.splice(action.index, 1);
            const updatedTodos = [... currentTodos];            
            return {...state, todos: updatedTodos};
        } 
        case "TODO_COMPLETE": {
            let currentTodos = state.todos;
            currentTodos[action.index].completed = true;
            const updatedTodos = [... currentTodos];            
            return {...state, todos: updatedTodos};
        }
        default:
            return state;
            
    }
}

export default todoReducer