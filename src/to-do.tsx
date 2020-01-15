import './styles/to-do.css';

import { Dispatch, bindActionCreators } from "redux";
import { addTodo, changePersoneValue, changeTaskValue, completeTodo, removeTodo, requestAddTodo } from './store/actions/to-do'

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
  taskValue: state.todoState.taskValue,
  personeValue: state.todoState.personeValue,
  todos: state.todoState.todos
});

const mapDispatchToProps = {
    changePersoneValue,
    changeTaskValue,
    addTodo,
    removeTodo,
    completeTodo,
    //@ts-ignore
    requestAddTodo
};

type Props = TodoListProps & typeof mapDispatchToProps & ReturnType<typeof mapStateToProps>;

export class TodoComponent extends React.Component<Props, TodoListState> {
  render () {
    const { taskValue, personeValue, todos, changePersoneValue, changeTaskValue, requestAddTodo, completeTodo, removeTodo } = this.props;
    return (
      <div className="toDo">
        <div className="addForm">
          <h1>Add todo</h1>
          <TextField id="todo" label="Your task:" value={taskValue} onChange={(e: any) => changeTaskValue(e.target.value)} />
          <TextField id="involved-persone" label="Involved persone:" value={personeValue} onChange={(e: any) => changePersoneValue(e.target.value)} />
          <button onClick={() => requestAddTodo({ task: taskValue, completed: false, involvedPersone: personeValue ? {name: { full: personeValue }} : undefined })}>
            +
          </button>
        </div>
        <div>
          <h4>The List</h4>
          <ul>
            {todos ? todos.map ((todo, index) => {
              return<li key={index}>
                <span>You are going to</span>
                <span>&nbsp;{todo.task}</span>
                {todo.involvedPersone ? <span>&nbsp;with {todo.involvedPersone.name.first}</span> : null}
                {todo.involvedPersone ? <p>Remind Mr(s).{todo.involvedPersone.name.last || todo.involvedPersone.name.first}</p> : null}
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