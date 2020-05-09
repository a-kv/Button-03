import React from 'react';
import c from './Button.module.css';

class Button extends React.Component {


    render = () => {
        return (
            <div className={c.buttonClick}>
                <button onClick={this.props.onClickUp}>Click me!</button>
            </div>
        )
    };
}

export default Button;



