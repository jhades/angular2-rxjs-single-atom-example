
import {Todo} from "../Todo";
import {List} from "immutable";
import {UiState} from "./todoReducers";

export interface ApplicationState {
    todos: List<Todo>,
    uiState: UiState
}