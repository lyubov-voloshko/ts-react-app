import { State } from '../../types/to-do';
import { TodoActionTypes } from '../../types/actions';
import { act } from '@testing-library/react';

export const initialState: State = {
    currentValue: '',
    todos: []
  }

const todoReducer = (state = initialState, action: TodoActionTypes): State => {
    switch(action.type) {
        case "TODO_SET_CURRENT_VALUE":
            return {...state, currentValue: action.value}
        case "TODO_ADD": {
            let currentTodos = state.todos;
            if (currentTodos.length === 0) {
                currentTodos = []
            }
            currentTodos.push({ text: action.todo.text, completed: action.todo.completed });
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