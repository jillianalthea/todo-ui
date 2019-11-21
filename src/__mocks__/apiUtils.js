import {TODO_ACTIONS} from '../redux/actions/types';
import todoList from '../data/todoList.json';

export const apiFetch = (type, verb, url) => {
    console.log('got to mocks')
    return Promise.resolve({
        type: type.SUCCESS,
        todos: todoList
    });
}
