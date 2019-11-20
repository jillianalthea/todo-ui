import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import TodoItem from '../TodoItem';
import TodoList from '../TodoList';

Enzyme.configure({ adapter: new Adapter() });


describe('Todo List test', () => { 
    const props = {
        todoList: [
            {
                text: "buy dog",
                isComplete: true,
                id: "123456",
                creationDate: "2019-01-01",
                completeDate: "2019-02-15",
                priority: 1
            },
            {
                text: "sell house",
                isComplete: false,
                id: "654321",
                creationDate: "2019-01-01",
                priority: 2
            }
        ]
    }
    it('renders two todo items ', () => {
        const wrapper = shallow(<TodoList {...props} />);
        
        expect(wrapper.find(TodoItem)).toHaveLength(2);
    });
});