import todoList from '../../data/todoList.json';
import {TODO_ACTIONS} from './types';
import {apiFetch, apiFetchWithBody} from '../../apiUtils';

const host = 'http://localhost:8080';
export const getAllTodoItems = (dispatch) => {
    console.log('getAllTodoItems')
    apiFetch(TODO_ACTIONS.GET_ALL, 'GET', `${host}/items`)
        .then(response => {
            console.log('success getAll', dispatch, response);
            dispatch(response);
        });
};

export const markTodo =  (dispatch, item) => {
    apiFetchWithBody(TODO_ACTIONS.UPDATE, 'POST', `${host}/items/${item.itemId}`, item)
        .then(response => {
            dispatch(response);
        });
};