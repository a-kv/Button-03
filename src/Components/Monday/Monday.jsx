import React from 'react';
import Button from "../Monday/Button/Button";
import Input from "../Monday/Input/Input";
import Text from "../Monday/Text/Text";
import c from './Mondey.module.css';


class Monday extends React.Component {
    state = {
        number: 0,
        error: true,
        names: ['some name'],
        title: ''
    }
    onChangeClick = () => {
        this.setState((preNum) => {
            return {
                number: preNum.number + 1,
            };
        })
        let newTitle = this.state.title.trim();
        this.state.title = ""; //проверка на пустую строку
        if (newTitle === "") {
            this.setState({error: true});
            alert('error')
        } else {

            this.setState({error: false});
            let newName = [...this.state.names, newTitle];
            this.setState({names: newName})
            alert('Hey, ' + newTitle + '!');
            this.state.title = '';
        }

    };
    onTitleChange = (e) => {
        this.setState({
            error: false,
            title: e.currentTarget.value
        });
    };
    onKeyPress = (e) => {
        if (e.key === 'Enter') {
            return this.onChangeClick()
        }
    }

    render = (props) => {
        let errorClass = this.state.error ? 'error' : '';
        return (
            <div className={c.container}>
                <Text number={this.state.number}/>
                <input
                    onChange={this.onTitleChange}
                    className={errorClass}
                    type="text"
                    placeholder="New-item-name"
                    onKeyPress={this.onKeyPress}
                    value={this.state.title}
                />
                <Button onClick={this.onChangeClick}/>

            </div>
        );
    }
}


export default Monday;

