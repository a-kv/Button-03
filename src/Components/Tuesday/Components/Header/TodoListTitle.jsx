import React from 'react';
import c from './Header.module.css';

class TodoListTitle extends React.Component {


    render = (props) => {

        return (
            <div className="todoList-header">
                <h3 className={c.todoListHeaderTitle}>
                    {this.props.title}
                    {/*What to Learn*/}
                </h3>
            </div>
        );
    }
}
    export default TodoListTitle;
