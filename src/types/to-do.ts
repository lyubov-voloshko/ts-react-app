export interface Persone {
    name: {
        full: string;
        first?: string;
        middle?: string;
        last?: string;
    }
}

export interface Todo {
    task: string;
    involvedPersone?: Persone;
    completed: boolean;
};
  
export interface State {
    taskValue: string;
    personeValue: string;
    todos: Todo[];
};