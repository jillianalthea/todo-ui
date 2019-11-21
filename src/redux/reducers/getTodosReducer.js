import {TODO_ACTIONS} from '../actions/types';
const getTodosReducer = (state = [], action) => {
    switch (action.type) {
        case TODO_ACTIONS.GET_ALL.SUCCESS:
            return action.todos;
        default:
            return state;
    }
};

export default getTodosReducer;