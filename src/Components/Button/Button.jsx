import React from 'react';


class Button extends React.Component {
    constructor() {
        super();
        this.state = {
            number: 0,
        };
        this.newTaskTitleRef = React.createRef();
    }

    onClickUp = () => {
        this.setState((preNum) => {
            return {
                number: preNum.number + 1,
            };  })

            let newTitle = this.newTaskTitleRef.current.value;
            alert('Hey, ' + this.newTaskTitleRef.current.value + '!');

            this.newTaskTitleRef.current.value = '';
    };

    render = () => {
        return (
            <div>
                <span>  {this.state.number} </span>
                <input ref={this.newTaskTitleRef} type="text"/>
                <button onClick={this.onClickUp}>Click me!</button>

            </div>
        )
    };
}

export default Button;



