
import {Observable} from "rxjs/Observable";
import {Action} from "./todoActions";
import {ApplicationState} from "./application-state";
import {dispatcher} from "../di-tokens";
import {calculateTodos, calculateUiState} from "./reducers";
import {UiState, initialUiState} from "./ui-state";

export function applicationStateFactory(initialState: ApplicationState, actions: Observable<Action>): Observable<ApplicationState> {
    return actions.scan( (state: ApplicationState, action) => {

        console.log("Processing action " + action.getName());

        let newState: ApplicationState = {
          todos: calculateTodos(state.todos, action),
            uiState: calculateUiState(state.uiState, action)
        };

        console.log({
            todos: state.todos.toJS(),
            uiState: state.uiState
        });

        return newState;

    } , initialState);

}