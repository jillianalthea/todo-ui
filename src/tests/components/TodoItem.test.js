import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import TodoItem from '../../components/TodoItem';


Enzyme.configure({ adapter: new Adapter() });


describe('Todo Item test', () => {
    const props = {
        todoItem: {
            text: "buy dog",
            complete: true,
            id: "123456",
            creationDate: "2019-01-01",
            completeDate: "2019-02-15",
            priority: 1
        }
    }
    it('renders checkbox with completed status', () => {
        const wrapper = shallow(<TodoItem {...props} />);
        const checkbox = wrapper.find({type: 'checkbox'});
        expect(checkbox.props().checked).toEqual(true);
    });

    it('renders checkbox with not completed status', () => {
        props.todoItem.complete = false;
        const wrapper = shallow(<TodoItem {...props} />);
        const checkbox = wrapper.find({type: 'checkbox'});
        expect(checkbox.props().checked).toEqual(false);
    });

    it('renders a label with the todo text', () => {
        const wrapper = shallow(<TodoItem {...props} />);
        
        const todoText = wrapper.find({type: 'text'});
        expect(todoText.props().value).toEqual('buy dog');
    });

    it('renders a label with date created', () => {
        const wrapper = shallow(<TodoItem {...props} />);
        const dateLabel = wrapper.find(`#createDate_${props.todoItem.id}`);
        expect(dateLabel.props().children).toEqual('2019-01-01');
    });

    it('renders a label with date completed', () => {
        const wrapper = shallow(<TodoItem {...props} />);
        const dateLabel = wrapper.find(`#completeDate_${props.todoItem.id}`);
        expect(dateLabel.props().children).toEqual('2019-02-15');
    });

    it('renders a label with \'\' when not completed', () => {
        const newProp = {
            todoItem: {
                text: "buy dog",
                isComplete: false,
                id: "123456",
                creationDate: "2019-01-01",
                priority: 1
            }
        }
        const wrapper = shallow(<TodoItem {...newProp} />);
        const dateLabel = wrapper.find(`#completeDate_${newProp.todoItem.id}`);
        expect(dateLabel.props().children).toEqual('');
    });

});