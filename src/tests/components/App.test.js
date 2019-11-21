import React from 'react';
import App from '../../components/App';
import TodoList from '../../components/TodoList';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import todoList from '../../data/todoList.json';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore([]);

describe('app tests', () => {
  let store;
  let component;

  beforeEach(() => {
      store = mockStore({form:{}});

      store.dispatch = jest.fn();

      component = 
          <Provider store={store}>
              <App {...todoList} />
          </Provider>
  })

  it('renders TodoList', () => {
    const wrapper = shallow(component);
    const app = wrapper.find(App);
    expect(app.find(TodoList)).toBeTruthy();
  });
})

