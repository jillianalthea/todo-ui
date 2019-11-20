import React from 'react';

const TodoItem = props => {
    // console.log("the props are ", props)
    return (

        <div>
            <input type='checkbox' checked={props.todoItem.isComplete}/>
            <input type='text' readonly='true'>{props.todoItem.text}</input>
            <label id={`createDate_${props.todoItem.id}`}>{props.todoItem.creationDate}</label>
            <label id={`completeDate_${props.todoItem.id}`}>
                {props.todoItem.completeDate ? props.todoItem.completeDate : ''}
            </label>
        </div>
    )
}

export default TodoItem;