import React from 'react';
import Button from "../Monday/Button/Button";
import Input from "../Monday/Input/Input";
import Text from "../Monday/Text/Text";
import c from './Mondey.module.css';


class Monday extends React.Component {


    state = {
        number: 0,
        names: [
            {name: 'someName'}
        ],
        style: 'bordred',
        title: ''
    }


    onChange = (event) => {
        if (event.currentTarget.value === '') {
            this.setState({style: 'bordred'})
        } else {
            this.setState({style: 'bord'})
        }
    }
    onClickUp = () => {
        this.setState((preNum) => {
            return {
                number: preNum.number + 1,
            };
        })
        let newTitle = this.state.title;
        if (newTitle === '') {
            return alert('error');
        } else {
            alert('Hey, ' + this.state.title + '!');
        }
        this.state.title = '';
        let newText = {
            name: newTitle
        };
        let newName = [...this.state.names, newText];

        this.setState({names: newName});
    };
    // onTitleChange = (e) => {
    //     this.setState({
    //         title: e.currentTarget.value
    //     });
    // };
    onKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.onClickUp()
        }

    }

    render = () => {
        return (
            <div className={c.container}>
                <Text number={this.state.number}/>
                <Input
                    title={this.state.title}
                    style={this.state.style}
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                    onTitleChange={this.onTitleChange}
                />
                <Button onClickUp={this.onClickUp}/>

            </div>
        );
    }
}

export default Monday;

