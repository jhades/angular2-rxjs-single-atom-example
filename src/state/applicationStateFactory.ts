
import {Observable} from "rxjs/Observable";
import {Action} from "./todoActions";
import {ApplicationState} from "./application-state";
import {dispatcher} from "../di-tokens";
import {calculateTodos} from "./reducers";
import {UiState, initialUiState} from "./ui-state";

export function applicationStateFactory(initialState: ApplicationState, actions: Observable<Action>): Observable<ApplicationState> {

    return actions.scan( (state: ApplicationState, action) => {
        let newState: ApplicationState = {
          todos: calculateTodos(state.todos, action),
            uiState: initialUiState
        };

        console.log(newState);

        return newState;

    } , initialState);

}