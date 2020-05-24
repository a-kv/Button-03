import React from 'react';
import c from './TodoListTask.module.css';


class TodoListTask extends React.Component {
    state = {
        isEditMode: false,

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
    onPriorityChanged = (e) => {
        this.props.changePriority(this.props.task.id, e.currentTarget.value)
    }


    render = () => {
        let isDoneClasses = this.props.task.isDone ? "todoList-task done" : "todoList-task";
        return (
            <div className={c.todoListTask} title={`created: ${this.props.task.created}, updated: ${this.props.task.updated}, finished: ${this.props.task.finished}`}>

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
                        : <span onClick={this.activatedEditMode}>{this.props.task.id} : {this.props.task.title} </span>
                    }
                    <span>
                        <select onChange={this.onPriorityChanged}>
                            <option>low</option>
                            <option>med</option>
                            <option>high</option>
                </select> {this.props.task.priority} </span>
                    <button className={c.deleteTaskButton}
                            onClick={() => this.props.deleteTask(this.props.id)}
                    >X
                    </button>


                </div>
            </div>

        );
    }

}
export default TodoListTask;

