import React, { Component } from 'react';
import {connect} from 'react-redux';
import {markTodo} from '../redux/actions/todoActions';

class TodoItem extends Component {

    applyStrikeThrough() {
        console.log('applying strike through')
        if(this.props.todoItem.complete){
            console.log('to be struck through --', `todoItem_${this.props.todoItem.itemId}`)
            document.getElementById(`todoItem_${this.props.todoItem.itemId}`).style.textDecoration = 'line-through';
        } else {
            document.getElementById(`todoItem_${this.props.todoItem.itemId}`).style.textDecoration = 'none';
        }
    }

    componentDidUpdate() {
        this.applyStrikeThrough();
    }

    componentDidMount() {
        this.applyStrikeThrough();
    }

    onCheckboxClick(todoItem, isChecked) {
        todoItem.complete = isChecked;
        console.log('todoItem', todoItem);
        this.props.markTodo(todoItem)
    }

    render () {
        return (
            <>
                <div className='grid-item'>
                    <input type='checkbox' checked={this.props.todoItem.complete}  
                    onChange= {(event) => {     
                        console.log("checking event", event.target.checked);
                        this.onCheckboxClick(this.props.todoItem, event.target.checked)}
                    }/>
                </div>
                <div className='grid-item'>
                    <input type='text' readOnly={true} value={this.props.todoItem.text} id={`todoItem_${this.props.todoItem.itemId}`}/>
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


 
  const mapDispatchToProps = (dispatch) => {
    return {
      markTodo: (todoItem) => markTodo(dispatch, todoItem)
    }
  }
  
export default connect(null, mapDispatchToProps)(TodoItem);