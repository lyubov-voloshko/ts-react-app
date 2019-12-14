export interface Todo {
    text: string;
    completed: boolean;
};
  
export interface State {
    currentValue: string;
    todos: Todo[];
};