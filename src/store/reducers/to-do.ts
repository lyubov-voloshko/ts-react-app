import { Dictionary } from '../../types/to-do';
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

const mapDict = <T, S>(
    dict: Dictionary<T>,
    fn: (arg: T, index: number) => S
    ): Dictionary<S> => {
    const result: Dictionary<S> = {};

    Object.keys(dict).forEach((value, index) => {
        const currentItem = dict[value];
        if (currentItem) {
            result[value] = fn(currentItem, index);
        }
    });

    return result;
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


            console.log(mapDict({
                a: 'a',
                b: 'b'
            }, (str) => ({ val: str })));

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