import React from 'react';
import './App.css';
import Button from "./Components/Button/Button";
import Input from "./Components/input/Input";
import Text from "./Components/Text/Text";


class App extends React.Component {
    constructor() {
        super();
        this.newTextRef= React.createRef();
        this.state = {
            number: 0,
            names: [
                {name: 'someName'}
            ]
        }

    }

    onClickUp = () => {
        this.setState((preNum) => {
            return {
                number: preNum.number + 1,
            };  })
        let newTitle = this.newTextRef.current.value;
        alert('Hey, ' + this.newTextRef.current.value + '!');

        this.newTextRef.current.value = '';
        let newText = {
            name: newTitle
        };
        let newNames = [...this.state.names, newText];
        this.setState({names: newNames});

    };

    render = () => {
        return (
            <div className="App">
                <Text constructor={this.state.number} />
                <Input constructor={this.newTextRef} />
                <Button constructor={this.constructor} onClickUp={this.onClickUp} />
            </div>
        );
    }
}
export default App;
