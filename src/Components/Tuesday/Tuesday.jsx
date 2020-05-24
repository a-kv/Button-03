import React from 'react';
import {restoreStore, saveState} from "./stateTodoList";
import c from './Tuesday.module.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./Components/Header/AddNewItemForm";
import loading from '../../assets/150x150.gif';


class Tuesday extends React.Component {

    state = {
        todolists: [
            // {id: 1, title: 'js'},
            // {id: 2, title: 'redux'},
            // {id: 3, title: 'TS'},
            // {id: 4, title: 'react'}
        ],
        loading: true,
        // created: '12:00',
        // updated: '12:15',
        // finished: '17:00'
    }
    nextTodoList = 0;


    saveTodolists = () => {
        saveState('todolists', this.state)
    }
    restoreTodolists = () => {
        let newState = restoreStore('todolists', this.state)
        this.setState(newState, () => {
            this.state.todolists.forEach(t => {
                if (t.id >= this.nextTodoList) {
                    this.nextTodoList = t.id + 1
                }
            })
        });
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({loading: false})
        }, 1000)
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
        if (this.state.loading === true) {
            return <img className={c.loading} src={loading} alt=""/>;
        } else {
            let todolists = this.state.todolists.map(tl => {
                return <TodoList className={c.todoList} key={tl.id} id={tl.id} title={tl.title}/>
            });

            return (
                <div className={c.counter} >
                    {/*<Moment format="YYYY-MM-DD HH:mm" interval={1000}/>*/}
                    <AddNewItemForm addItem={this.addTodoList}/>
                    <div className={c.tuesday}>
                        {todolists}
                    </div>
                </div>

            );
        };
    }
}

export default Tuesday;
