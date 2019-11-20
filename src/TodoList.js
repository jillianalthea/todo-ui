import React from 'react';
import TodoItem from './TodoItem';

const TodoList = props => {
    const list = props.todoList.map(item => {
        return <TodoItem todoItem={item} key={item.id} />
    });

    return <div>{list}</div>;
};

export default TodoList;