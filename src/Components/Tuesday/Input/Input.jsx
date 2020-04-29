import React from 'react';
import c from './Input.module.css';
class Input extends React.Component {
    

    render = () => {
        return (
            <div className={c.nameArea}>
                <input
                    className={this.props.style}
                    ref={this.props.value}
                    placeholder='Your name...'
                    type="text"
                    onChange={this.props.onChange}
                    onKeyPress={this.props.onKeyPress}
                 />
            </div>)
    }

    };


export default Input;

// handleKeyDown = (e) => {
//     if (e.key === 'Enter') {
//         console.log('do validate');
//     }
// }

// className = "form-inside-Input"
// onSubmit = {this.onSubmit()}