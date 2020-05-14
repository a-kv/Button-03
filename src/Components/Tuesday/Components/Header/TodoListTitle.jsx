import React from 'react';

class TodoListTitle extends React.Component {


    render = (props) => {

        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">
                    {this.props.title}
                    {/*What to Learn*/}
                </h3>
            </div>
        );
    }
}
    export default TodoListTitle;
