import React from 'react';
import c from './TodoListTask.module.css';

class TodoListTask extends React.Component {
    state = {
        isEditMode: false
    }

    activatedEditMode = () => {
        this.setState({isEditMode: true})
    };
    deactivatedEditMode = () => {
        this.setState({isEditMode: false})
    };
    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked);
    };
    onTitleChanged = (e) => {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value)
    }

    render = () => {
        let isDoneClasses = this.props.task.isDone ? "todoList-task done" : "todoList-task";
        return (
            <div className={c.todoListTask}>
            <div className={isDoneClasses}>
                <input type="checkbox"
                       checked={this.props.task.isDone}
                       onChange={this.onIsDoneChanged}
                />
                {this.state.isEditMode
                    ? <input onChange={this.onTitleChanged}
                             value={this.props.task.title}
                             autoFocus={true}
                             onBlur={this.deactivatedEditMode}/>
                    : <span onClick={this.activatedEditMode}>{this.props.task.id} : {this.props.task.title}</span>
                }
                    <span>- priority:
                        <select>
                    <option>{this.props.task.priority}</option>
                    <option>med</option>
                    <option>high</option>
                </select>
                    </span>
                   <button className={c.deleteTaskButton} onClick={this.props.deleteTask}>X</button>


            </div>
            </div>

        );
    }
}

export default TodoListTask;

