import React from 'react';


class Input extends React.Component {

    render = () => {
        return (
            <div>
         <input ref={this.props.constructor} type="text"/>

            </div>
        )
    };
}

export default Input;



