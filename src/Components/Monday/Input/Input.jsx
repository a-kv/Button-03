import React from 'react';
import c from './Input.module.css';


class Input extends React.Component {


    render = () => {
        return (
            <div className={c.nameArea}>
                <input
                    onChange={this.props.onTitleChange}
                    className={this.props.className}
                    type="text"
                    placeholder="New-item-name"
                    onKeyPress={this.props.onKeyPress}
                    value={this.props.title}
                />
            </div>)
    }

};


export default Input;

