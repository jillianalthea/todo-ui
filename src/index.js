import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import './style/index.css';
import App from './components/App';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import getTodosReducer from './redux/reducers/getTodosReducer';
import reloadTodoMiddleware from './redux/middleware/reloadTodo-middleware';

const rootReducer = combineReducers({
    todos: getTodosReducer
});
const middleware = composeWithDevTools(applyMiddleware(thunk, reloadTodoMiddleware));
const store = createStore(rootReducer, [''], middleware);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);