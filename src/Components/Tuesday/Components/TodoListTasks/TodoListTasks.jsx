import React from 'react';
import TodoListTask from "./TodoListTask/TodoListTask";
import c from './Tasks.module.css';


class TodoListTasks extends React.Component {

    render = () => {
           let myFn = (t) =>{
            return  <TodoListTask
                    id={t.id}
                    task={t}
                    del={this.props.del}
                    changeStatus={this.props.changeStatus}
                    changeTitle={this.props.changeTitle}
                    deleteTask={this.props.deleteTask}
                    changePriority={this.props.changePriority}
            />
           }
                let tasksElements = this.props.tasks.map(myFn);


        return (
            <div className={c.tasksElements}>
                {tasksElements}
            </div>
        );
    }
}

export default TodoListTasks;

