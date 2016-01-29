
import {Observable} from "rxjs/Observable";
import {Action} from "./todoActions";
import {ApplicationState} from "./application-state";

export function applicationStateFactory(initialState: ApplicationState, dispatcher: Observable<Action>): Observable<ApplicationState> {

    return dispatcher.map(() => {
        return initialState;
    });

}