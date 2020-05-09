import React from 'react';
import c from './Tuesday.module.css';
import TodoListHeader from "./Components/Header/Header";
import TodoListTasks from "./Components/TodoListTasks/TodoListTasks";
import TodoListFooter from "./Components/Footer/Footer";

class Tuesday extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                // {id: 0, title: "JS", isDone: true, priority: "low"},
                // {id: 1, title: "CSS", isDone: true, priority: "low"},
                // {id: 2, title: "jQuery", isDone: false, priority: "high"},
                // {id: 3, title: "ReactJs", isDone: false, priority: "med"}

            ],
            filterValue: "All",

        };

    }
        nextTaskId = 0;

    saveState = () => {
        let stateAsString = JSON.stringify(this.state)
        localStorage.setItem('state', stateAsString)
    }
    restoreStore = () => {
        let state = {
            tasks: [],
            filterValue: "All",
        };
        let stateAsString = localStorage.getItem('state');
        if (stateAsString) {
            state = JSON.parse(stateAsString);
        }

        this.setState(state, () => {
            this.state.tasks.forEach(t => {
                if (t.id >= this.nextTaskId) {
                    this.nextTaskId = t.id + 1
                }
            })
        });
    }

    componentDidMount() {
        this.restoreStore(); // удобно запускать сет таймауты и тд
    }

    deleteTask = (taskId) => {
        let newTasks = this.state.tasks.splice(taskId,1 );
        this.setState({items: newTasks},this.saveState);
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
        }, this.saveState)
    }

    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, {isDone: isDone})
    }

    changeTitle = (taskId, title) => {
        this.changeTask(taskId, {title: title})
    }

    addTask = (newTitle) => {
        let newTask = {
            id: this.nextTaskId,
            title: newTitle,
            isDone: false, priority: "low"
        };
        this.nextTaskId++;
        let newTasks = [...this.state.tasks, newTask];
        this.setState({tasks: newTasks}, this.saveState);
    };


    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        });
    }

    render = () => {

        let filteredTasks = this.state.tasks.filter((t) => {
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
            <div className={c.container}>
                <TodoListHeader addTask={this.addTask}/>
                <TodoListTasks
                    changeTitle={this.changeTitle}
                    del={this.state.tasks.del}
                    id={this.state.tasks.id}
                    changeStatus={this.changeStatus}
                    tasks={filteredTasks}
                    deleteTask={this.deleteTask}
                />
                <TodoListFooter
                    changeFilter={this.changeFilter}
                    filterValue={this.state.filterValue}/>
            </div>
        );

    }
}

export default Tuesday;

// if (Number(t.id) !== Number(taskId)) {
//     return this.setState({
//         tasks: newTasks
// })}
//     });
// }
// deleteTask (name, i){
//     let state = {
//         tasks: [],
//         filterValue: "All",
//     };
//     let stateAsString = localStorage.getItem('state');
//     if(stateAsString){
//         state = JSON.parse(stateAsString);
//     }
//         let newTasks = this.state.tasks.slice();
//     newTasks.splice(i, 1);
//         this.setState({
//             tasks:newTasks
//         });
//     }

// deleteTask = (taskId) => {
//     let state = {
//         tasks: [],
//     };
//     let stateAsString = localStorage.getItem('state');
//     if (stateAsString) {
//         state = JSON.parse(stateAsString);
//     }
// deleteTask = (taskId) => {
//     let state = {
//         tasks: [],
//         filterValue: "All",
//     };
//     let stateAsString = localStorage.getItem('state');
//     if(stateAsString){
//         state = JSON.parse(stateAsString);
//     }
//     let newTasks = this.state.tasks.filter((t) => {
//         if (Number(t.id) !== Number(taskId) ){
//             return console.log(true)
//         }
//     });
// }
// this.setState({
//     tasks: newTasks
// })
// this.setState(state, () => {
//     this.state.tasks.forEach(t => {
//         if(t.id >= this.nextTaskId){
//             this.nextTaskId = t.id - 1
//         }
//     })
// });

//alert(localStorage.getItem('state'))};


//     let newTasks = this.state.tasks.filter((t) =>{
//         return t !== task
//     });
//     this.setState({
//         tasks: newTasks})
// }
