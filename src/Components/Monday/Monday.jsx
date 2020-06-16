import React from 'react';
import Button from "../Monday/Button/Button";
import Text from "../Monday/Text/Text";
import c from './Mondey.module.css';
import {incCounterAC, onChangeErrorAC, onChangeTitleAC, setNameAC} from "../../redux/mondayReducer";
import {connect} from "react-redux";


class Monday extends React.Component {

    onChangeClick = () => {
        // let counter = this.props.number + 1;
        this.props.onChangeNumber(this.props.number + 1);
        let newTitle = this.props.title;
        this.props.onChangeTitle(''); //проверка на пустую строку
        if (newTitle === "") {
            this.props.onChangeError({error: true});
            alert('error')
        } else {
            this.props.onChangeError({error: false});
            let newName = [...this.props.names, newTitle];
            this.props.setName({names: newName})
            alert('Hey, ' + newTitle + '!');
            this.props.onChangeTitle('');
        }

    };
    onTitleChange = (e) => {
        this.props.onChangeTitle(e.target.value);
    };
    onKeyPress = (e) => {
        if (e.key === 'Enter') {
            return this.onChangeClick()
        }
    }

    render = () => {
        let errorClass = this.props.error ? 'error' : '';
        return (
            <div className={c.container}>
                <Text number={this.props.number}/>
                <input
                    onChange={this.onTitleChange}
                    className={errorClass}
                    type="text"
                    placeholder="New-item-name"
                    onKeyPress={this.onKeyPress}
                    value={this.props.title}
                />
                <Button onClick={this.onChangeClick}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        number: state.mondayPage.number,
        error: state.mondayPage.error,
        names: state.mondayPage.names,
        title: state.mondayPage.title
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onChangeNumber: (number) => {
            dispatch(incCounterAC(number))
        },
        onChangeError: (error) => {
            dispatch(onChangeErrorAC(error))
        },
        onChangeTitle: (title) => {
            dispatch(onChangeTitleAC(title))
        },
        setName: (names) => {
            dispatch(setNameAC(names))
        }
    }

}
const MondayContainer = connect(mapStateToProps, mapDispatchToProps)(Monday);
export default MondayContainer;

