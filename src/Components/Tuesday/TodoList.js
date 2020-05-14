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
        priorityValue: 'low' || 'med' || 'high'
    };

    saveStates = () => {
        saveState('our-state-', this.state)
    }
    restoreStores = () => {
        let newState = restoreStore('state', this.state)
        let stateAsString = localStorage.getItem('our-state-');
        if (stateAsString) {
            newState = JSON.parse(stateAsString);
        }

        this.setState(newState, () => {
            this.state.tasks.forEach(t => {
                if (t.id >= this.nextTaskId) {
                    this.nextTaskId = t.id + 1
                }
            })
        });
    }

    componentDidMount() {
        this.restoreStores(); // удобно запускать сет таймауты и тд
    }
    //
    // deleteTask = (taskId) => {
    //     let newTasks = this.state.tasks.splice(taskId, 1);
    //     this.setState({items: newTasks}, this.saveState);
    // };
        deleteTask = (taskId) => {
        this.setState({tasks: this.state.tasks.filter(t => t.id !== taskId)},
            this.saveStates,);
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
        }, this.saveStates)
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

    addTask = (newTitle) => {
        let newTask = {
            id: this.nextTaskId,
            title: newTitle,
            isDone: false,
            priority: this.state.priorityValue
        };
        this.nextTaskId++;
        let newTasks = [...this.state.tasks, newTask];
        this.setState({tasks: newTasks}, this.saveStates);
    };

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        });
    }
    // changePriorityValue = (newPriority) => {
    //     this.setState({
    //         priorityValue: newPriority
    //     });
    // }

    render = () => {


        // let changePriority = this.state.tasks.map(p => {
        //     switch (this.state.changePriorityValue) {
        //         case 'high':
        //             return 'high';
        //         case 'med':
        //             return 'med';
        //         default:
        //             return 'low';
        //     }
        // })
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
                    <TodoListTasks changeTitle={this.changeTitle}
                                   id={this.state.tasks.id}
                                   changeStatus={this.changeStatus}
                                   tasks={filteredTasks}
                                   deleteTask={this.deleteTask}
                                  // changePriority={changePriority}
                                   // changePriorities={this.changePriorities}
                    />
                    <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>
                </div>

        );
    }
}

export default TodoList;
