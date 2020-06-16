import React from 'react';
import {restoreStore, saveState} from "./stateTodoList";
import c from './Tuesday.module.css';
import ConnectedTodolist from "./TodoList";
import AddNewItemForm from "./Components/Header/AddNewItemForm";
import loading from '../../assets/150x150.gif';
import {addTodoListAC, changeLoadingAC} from "../../redux/tuesdayReducer";
import {connect} from "react-redux";


class Tuesday extends React.Component {
    state = this.props.tuesdayPage;
    nextTodoList = 0

    saveTodolists = () => {
        saveState('todolists', this.state)
    }
    componentDidMount() {
        setTimeout(() => {
            this.props.changeLoading(false)
        }, 1000)
        this.restoreTodolists();
    }

    restoreTodolists = () => {
        let newState = restoreStore('todolists', this.state)
        this.setState(newState, () => {
            this.props.todolists.forEach(t => {
                if (t.id >= this.nextTodoList) {
                    this.nextTodoList = t.id + 1
                }
            })
        });
    }



    addTodoList = (newTodoListName) => {
        let newTodolist = {
            id: this.nextTodoList,
            title: newTodoListName,
            tasks: []
        };
        this.nextTodoList++;
        this.props.addTodolist(newTodolist);
        this.setState({
            todolists: newTodolist
        }, this.saveState)
    };

    render = () => {
        if (this.props.loading === true) {
            return <img className={c.loading} src={loading} alt=""/>;
        } else {
            let todolists = this.props.todolists.map(tl => {
                return <ConnectedTodolist key={tl.id} id={tl.id} title={tl.title} tasks={tl.tasks}/>
            });

            return (
                <div className={c.counter}>
                    <AddNewItemForm addItem={this.addTodoList}/>
                    <div className={c.tuesday}>
                        {todolists}
                    </div>
                </div>

            );
        };
    };
}



const mapStateToProps = (state) => {
    return {
        todolists: state.tuesdayPage.todolists,
        loading: state.tuesdayPage.loading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

        addTodolist: (newTodolist) => {
            dispatch(addTodoListAC(newTodolist));
        },
        changeLoading: (loading) => {
            dispatch(changeLoadingAC(loading));
        }
    }
}
const TuesdayContainer = connect(mapStateToProps, mapDispatchToProps)(Tuesday);
export default TuesdayContainer;

