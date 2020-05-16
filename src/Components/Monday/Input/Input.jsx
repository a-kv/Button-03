import React from 'react';
import c from './Input.module.css';


class Input extends React.Component {
    

    render = (props) => {
        return (
            <div className={c.nameArea}>
                <input
                    className={this.props.style}
                    title={this.props.title}
                    placeholder='Your name...'
                    type="text"
                    onKeyPress={this.props.onKeyPress}
                    onTitleChange={this.props.onTitleChange}
                 />
            </div>)
    }

    };


export default Input;

