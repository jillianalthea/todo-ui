import todoList from '../../data/todoList.json';
import {TODO_ACTIONS} from './types';
import {apiFetch} from '../../apiUtils';

const host = 'http://localhost:8080';
export const getAllTodoItems = (dispatch) => {
    apiFetch(TODO_ACTIONS.GET_ALL, 'GET', `${host}/items`)
        .then(response => {
            dispatch(response);
        });
};