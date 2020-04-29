

import React from 'react';
import c from './Input.module.css';

class Input extends React.Component {

    render = () => {
        return (
            <div>
                <input className={c.counter} ref={this.props.value} type="text"/>

            </div>
        )
    };
}

export default Input;


// handleKeyDown = (e) => {
//     if (e.key === 'Enter') {
//         console.log('do validate');
//     }
// }

// className = "form-inside-Input"
// onSubmit = {this.onSubmit()}