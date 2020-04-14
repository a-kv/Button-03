import React from 'react';


class Button extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         number: 0,
    //     };
    //     this.newText= React.createRef();
    // }
    //
    // onClickUp = () => {
    //     this.setState((preNum) => {
    //         return {
    //             number: preNum.number + 1,
    //         };  })
    //
    //         let newTitle = this.newText.current.value;
    //         alert('Hey, ' + this.newText.current.value + '!');
    //
    //         this.newText.current.value = '';
    // };

    render = () => {
        return (
            <div>
                <button onClick={this.props.onClickUp}>Click me!</button>

            </div>
        )
    };
}

export default Button;



