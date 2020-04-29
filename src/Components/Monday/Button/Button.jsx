import React from 'react';


class Button extends React.Component {


    render = () => {
        return (
            <div>
                <button onClick={this.props.onClickUp}>Click me!</button>

            </div>
        )
    };
}

export default Button;
