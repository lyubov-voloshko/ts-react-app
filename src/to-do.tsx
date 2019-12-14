import './styles/to-do.css';

import { Dispatch, bindActionCreators } from "redux";
import { addTodo, changeTodoValue, completeTodo, removeTodo, requestAddTodo } from './store/actions/to-do'

import { AppState } from './store/reducers/root';
import React from 'react';
import TextField from './text-field';
import { ThunkDispatch } from "redux-thunk";
import { Todo } from './types/to-do'
import { TodoActionTypes } from './types/actions'
import { connect } from "react-redux";

interface TodoListProps {
  id?: number,
  color?: string
}

interface TodoListState {
  
}

const mapStateToProps = ( state: AppState, ownProps: TodoListProps) => ({
  currentValue: state.todoState.currentValue,
  todos: state.todoState.todos
});

const mapDispatchToProps = {
    changeTodoValue,
    addTodo,
    removeTodo,
    completeTodo,
    //@ts-ignore
    requestAddTodo
};

type Props = TodoListProps & typeof mapDispatchToProps & ReturnType<typeof mapStateToProps>;

export class TodoComponent extends React.Component<Props, TodoListState> {
  render () {
    const { currentValue, todos, changeTodoValue, requestAddTodo, completeTodo, removeTodo } = this.props;
    return (
      <div className="toDo">
        <div className="addForm">

          <TextField value={currentValue} onChange={(e: any) => changeTodoValue(e.target.value)} />
          <TextField value={currentValue} onChange={(e: any) => changeTodoValue(e.target.value)} />
          <button onClick={() => requestAddTodo({ text: currentValue, completed: false })}>
            +
          </button>
        </div>
        <div>
          The List
          <ul>
            {todos ? todos.map ((todo, index) => {
              return<li key={index}>
                <span>{todo.text}</span>
                {todo.completed ? 
                  <span>&nbsp;done</span> : 
                  <button onClick={() => completeTodo(index) }>
                  completed
                </button>
            }    
                <button onClick={() => removeTodo(index) }>
                  remove
                </button>
              </li>
            }) : null }
          </ul>
        </div>
      </div>
    );
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoComponent);