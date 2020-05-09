import React from 'react';
import c from './Input.module.css';


class Input extends React.Component {
    

    render = (props) => {
        return (
            <div className={c.nameArea}>
                <input
                    className={this.props.style}
                    value={this.props.value}
                    placeholder='Your name...'
                    type="text"
                    onChange={this.props.onChange}
                    onKeyPress={this.props.onKeyPress}
                 />
            </div>)
    }

    };


export default Input;

