
import {List} from 'immutable';
import {Todo} from "../Todo";

export const LOAD_TODOS = "LOAD_TODOS";
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const BACKEND_ACTION_STARTED="BACKEND_ACTION_STARTED";
export const BACKEND_ACTION_FINISHED="BACKEND_ACTION_FINISHED";


export class LoadTodosAction {

    constructor(public todos: List<Todo>) {

    }
}

export class AddTodoAction {

    constructor(public newTodo: Todo) {

    }

}

export class ToggleTodoAction {
    constructor(public todo: Todo) {

    }
}

export class DeleteTodoAction {

    constructor(public todo: Todo) {

    }
}

export class StartBackendAction {

    constructor(public message:string) {

    }

}

export class EndBackendAction {

    constructor(public message: string) {

    }
}

export type Action = LoadTodosAction | AddTodoAction | ToggleTodoAction | DeleteTodoAction | StartBackendAction | EndBackendAction;
