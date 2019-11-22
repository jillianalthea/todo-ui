import {TODO_ACTIONS} from '../actions/types';

const updateTodoReducer = (state = [], action = {}) => {
    switch (action.type) {
        case TODO_ACTIONS.UPDATE.FAILURE:
            console.log('error', action);
            return {
                error: action.error
            };
        default:
            return state;
    }
};

export default getTodosReducer;