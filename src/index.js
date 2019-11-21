import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './components/App';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import getTodosReducer from './redux/reducers/getTodosReducer';

const rootReducer = combineReducers({
    todos: getTodosReducer
});
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);