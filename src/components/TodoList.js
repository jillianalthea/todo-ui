import React from 'react';
import TodoItem from './TodoItem';

const TodoList = props => {
    const list = props.todoList.map(item => {
        return <TodoItem todoItem={item} key={item.id} />
    });

    return <div className='grid-container'>
                <div className='grid-item'>Completed</div>
                <div className='grid-item'>Task</div>
                <div className='grid-item'>Added On</div>
                <div className='grid-item'>Completed On</div>
                {list}
            </div>;
};

export default TodoList;