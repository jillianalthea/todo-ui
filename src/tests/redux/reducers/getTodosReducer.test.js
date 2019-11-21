import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import todoList from '../../../data/todoList.json';
import getTodosReducer from '../../../redux/reducers/getTodosReducer';
import {TODO_ACTIONS} from '../../../redux/actions/types';

Enzyme.configure({ adapter: new Adapter() });

describe('todo reducer tests', () => {
    it('returns list in state', () => {
        const state = getTodosReducer(
            [], {type: TODO_ACTIONS.GET_ALL.SUCCESS, todos: todoList});
        expect(state).toEqual(todoList);
    });
});