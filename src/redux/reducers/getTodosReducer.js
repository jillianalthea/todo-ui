import {TODO_ACTIONS} from '../actions/types';
const getTodosReducer = (state = [], action = {}) => {
    switch (action.type) {
        case TODO_ACTIONS.GET_ALL.SUCCESS:
            console.log('got todos');
            return {
                data: action.todos
            };
        case TODO_ACTIONS.GET_ALL.FAILURE:
            console.log('error', action);
            return {
                error: action.error
            };
        default:
            return state;
    }
};

export default getTodosReducer;