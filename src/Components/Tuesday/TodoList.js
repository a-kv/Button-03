import React from 'react';
import c from './Tuesday.module.css';
import TodoListTasks from "./Components/TodoListTasks/TodoListTasks";
import TodoListFooter from "./Components/Footer/Footer";
import TodoListTitle from "./Components/Header/TodoListTitle";
import AddNewItemForm from "./Components/Header/AddNewItemForm";
import {saveState, restoreStore} from "./stateTodoList";



class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.addTask = this.addTask.bind(this)
    }

    nextTaskId = 0;

    state = {
        tasks: [
            // {id: 0, title: "JS", isDone: true, priority: "low"},
            // {id: 1, title: "CSS", isDone: true, priority: "low"},
            // {id: 2, title: "jQuery", isDone: false, priority: "high"},
            // {id: 3, title: "ReactJs", isDone: false, priority: "med"}

        ],
        filterValue: 'All',
    };

    saveStateOurState = () => {
        saveState('our-state-' + this.props.id, this.state)
    }
    restoreStoreOurState = () => {
        let newState = restoreStore('our-state-' + this.props.id)
        this.setState(newState, () => {
            this.state.tasks.forEach(t => {
                if (t.id >= this.nextTaskId) {
                    this.nextTaskId = t.id + 1
                }
            })
        });
    }


    componentDidMount() {
        this.restoreStoreOurState(); // удобно запускать сет таймауты и тд
    }
    deleteTask = (taskId) => {
        this.setState({tasks: this.state.tasks.filter(t => t.id !== taskId)},
            this.saveStateOurState);
    };
    changeTask = (taskId, obj) => {
        let newTasks = this.state.tasks.map(t => {
            if (t.id === taskId) {
                return {...t, ...obj};
            }
            return t;

        });
        this.setState({
            tasks: newTasks
        }, this.saveStateOurState)
    }

    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, {isDone: isDone})
    }

    changeTitle = (taskId, title) => {
        this.changeTask(taskId, {title: title})

    }
    changePriority = (taskId, priority) => {
        this.changeTask(taskId, {priority: priority})
    }

    addTask = (newTitle, newPriority) => {
        let newTask = {
            id: this.nextTaskId,
            title: newTitle,
            isDone: false,
            priority: newPriority
        };
        this.nextTaskId++;
        let newTasks = [...this.state.tasks, newTask];
        this.setState({tasks: newTasks}, this.saveStateOurState);
    };

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        });
    }
    // changePriority = (e) => {
    //     this.setState({
    //         priority: e.target.value
    //     }, this.saveStates);
    // }

  // changePriorityValue = (newPriority) => {
  //       this.setState({
  //           priority: newPriority
  //       };
  //   }


    render = () => {

        let filteredTasks = this.state.tasks.filter(t => {
            switch (this.state.filterValue) {
                case 'Active':
                    return !t.isDone;
                case 'Completed':
                    return t.isDone;
                default:
                    return true;
            }
        })

        return (

                <div className={c.todoList}>
                    <TodoListTitle title={this.props.title}/>
                    <AddNewItemForm addItem={this.addTask}/>
                    <TodoListTasks id={this.state.tasks.id}
                                   priority={this.state.priority}
                                   tasks={filteredTasks}
                                   deleteTask={this.deleteTask}
                                   changeTitle={this.changeTitle}
                                   changeStatus={this.changeStatus}
                                   changePriority={this.changePriority}


                    />
                    <TodoListFooter filterValue={this.state.filterValue}
                                    changeFilter={this.changeFilter} />
                </div>

        );
    }
}

export default TodoList;
