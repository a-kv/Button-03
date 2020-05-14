import React from 'react';
import {restoreStore, saveState} from "./stateTodoList";
import c from './Tuesday.module.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./Components/Header/AddNewItemForm";


class Tuesday extends React.Component {

    state = {
        todolists: [
            // {id: 1, title: 'js'},
            // {id: 2, title: 'redux'},
            // {id: 3, title: 'TS'},
            // {id: 4, title: 'react'}
        ],
        loading: true
    }
    nextTodoList = 0;


    saveTodolists = () => {
        saveState('todolists', this.state)
    }
    restoreTodolists = () => {
        let newState = restoreStore('todolists', this.state)
        let stateAsString = localStorage.getItem('todolists');
        if (stateAsString) {
            newState = JSON.parse(stateAsString);
        }

        this.setState(newState, () => {
            this.state.todolists.forEach(t => {
                if (t.id >= this.nextTaskId) {
                    this.nextTaskId = t.id + 1
                }
            })
        });
    }

    componentDidMount() {
        // setTimeout(this.setState({loading: false}),3000)
        this.restoreTodolists();

    }

    addTodoList = (newTodoListName) => {
        let newTodoList = {
            id: this.nextTodoList,
            title: newTodoListName
        };
        this.nextTodoList++;
        this.setState({todolists: [...this.state.todolists, newTodoList]}, this.saveTodolists);
    };

    render = () => {
        let todolists = this.state.todolists.map(tl => {
            return <TodoList key={tl.id} id={tl.id} title={tl.title}/>
        });

        return (
            <div className={c.counter}>
                <AddNewItemForm addItem={this.addTodoList}/>
                <div className="Tuesday">
                    {todolists}
                </div>
            </div>

        );
    };
}

export default Tuesday;
