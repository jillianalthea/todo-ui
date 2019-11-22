import { getAllTodoItems } from "../actions/todoActions";
import {TODO_ACTIONS} from '../actions/types';

export default store => next => action => {
    console.log('in middleware', action);
    switch (action.type) {
        case TODO_ACTIONS.UPDATE.SUCCESS:
            console.log('middleware success')
            getAllTodoItems(store.dispatch);
            return next(action);
        default :
            return next(action);
    }
}
