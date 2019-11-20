import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import TodoList from '../TodoList';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('app tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

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

  it('renders TodoList', () => {
    const wrapper = shallow(<App {...props} />);
    expect(wrapper.exists(TodoList)).toBeTruthy();
  });
})

