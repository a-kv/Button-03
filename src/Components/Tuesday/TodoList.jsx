import React from 'react';
import c from './Tuesday.module.css';
import TodoListTasks from "./Components/TodoListTasks/TodoListTasks";
import TodoListFooter from "./Components/Footer/Footer";
import TodoListTitle from "./Components/Header/TodoListTitle";
import AddNewItemForm from "./Components/Header/AddNewItemForm";
import {restoreStore, saveState} from "./stateTodoList";
import {addTaskAC, deleteTaskAC, updateTaskAC} from "../../redux/tuesdayReducer";
import {connect} from "react-redux";


class TodoList extends React.Component {

    nextTaskId = 0;

    state = {
        tasks: [ ],
    filterValue: 'All',
    };

    saveStateOurState = () => {
        saveState('our-state-' + this.props.id, this.props)
    }
    restoreStoreOurState = () => {
        let newState = restoreStore('our-state-' + this.props.id)
        this.setState(newState, () => {
            this.props.tasks.forEach(t => {
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
        this.setState({tasks: this.props.tasks.filter(t => t.id !== taskId)},
            this.saveStateOurState);
    };
    changeTask = (taskId, obj) => {
        let newTasks = this.props.tasks.map(t => {
            if (t.id === taskId) {
                return {...t, ...obj};
            }
            return t;

        });
        this.props.updateTask(taskId, obj, this.props.id);
    }
    getDate = () => {
        return new Date().toLocaleTimeString('ru-RU', {hour: '2-digit', minute: '2-digit'}) + ''
    }

    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, {
            isDone: isDone,
            updated: this.getDate(),
            finished: isDone ? this.getDate() : null
        })
    }

    changeTitle = (taskId, title) => {
        this.changeTask(taskId, {
            title: title,
            updated: this.getDate()
        })

    }
    changePriority = (taskId, priority) => {
        this.changeTask(taskId, {
            priority: priority,
            updated: this.getDate()
        })
    }

    addTask = (newTitle, newPriority) => {
        let newTask = {
            id: this.nextTaskId,
            title: newTitle,
            isDone: false,
            priority: newPriority,
            created: this.getDate(),
            updated: null,
            finished: null
        };
        this.nextTaskId++;
        // let newTasks = [...this.props.tasks, newTask];
        this.props.addTask(newTask, this.props.id);
    };

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        });
    }
    render = () => {

        let filteredTasks = this.props.tasks.filter(t => {
            switch (this.filterValue) {
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
                <TodoListTasks id={this.props.tasks.id}
                               priority={this.props.priority}
                               created={this.props.created}
                               updated={this.props.updated}
                               finished={this.props.finished}
                               tasks={filteredTasks}
                               deleteTask={this.deleteTask}
                               changeTitle={this.changeTitle}
                               changeStatus={this.changeStatus}
                               changePriority={this.changePriority}
                />
                <TodoListFooter filterValue={this.filterValue}
                                changeFilter={this.changeFilter}/>
            </div>

        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask(newTask, todolistId) {
            dispatch(addTaskAC(newTask, todolistId));
        },
        deleteTask: (taskId, obj, todolistId) => {
            const action = deleteTaskAC(taskId, todolistId);
            dispatch(action)
        },
        updateTask(taskId, obj,todolistId) {
            dispatch(updateTaskAC(taskId, obj,todolistId));
        }
    }
}

const ConnectedTodolist = connect(null, mapDispatchToProps)(TodoList);

export default ConnectedTodolist;
