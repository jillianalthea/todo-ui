import React, { Component } from 'react';


class TodoItem extends Component {

    onCheckboxClick(id, isClicked) {
        this.props.dispatch({type: 'UPDATE', id: id, onSale: isClicked})
    }

    render () {
        return (
            <>
                <div className='grid-item'>
                    <input type='checkbox' checked={this.props.todoItem.complete}  
                    onChange= {(event) => {     
                        console.log("checking event", event.target.checked);
                        
                        this.onCheckboxClick(this.props.todo.id, event.target.checked)}
                    }/>
                </div>
                <div className='grid-item'>
                    <input type='text' readOnly={true} value={this.props.todoItem.text} />
                </div>
                <div className='grid-item'>
                    <label id={`createDate_${this.props.todoItem.id}`} >{this.props.todoItem.creationDate}</label>
                </div>
                <div className='grid-item'>
                    <label id={`completeDate_${this.props.todoItem.id}`} >
                        {this.props.todoItem.completeDate ? this.props.todoItem.completeDate : ''}
                    </label>
                </div>
            </>
        )
    }
}



export default TodoItem;