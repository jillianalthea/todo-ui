import {getAllTodoItems} from '../../../redux/actions/todoActions';
import todoList from '../../../data/todoList.json';
import {TODO_ACTIONS} from '../../../redux/actions/types';

jest.mock('../../../apiUtils');

describe('Todo action tests', () => {
   
    it('getAllTodoItems action returns items', (done) => {
        const dispatchMock = jest.fn();

        const expected = {
            type: TODO_ACTIONS.GET_ALL.SUCCESS,
            todos: todoList
        };

        getAllTodoItems(dispatchMock);

        setImmediate(() => {
            expect(dispatchMock).toBeCalled();
            expect(dispatchMock).toBeCalledWith(expected);
            done();
        });
        
    });
});