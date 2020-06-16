import React from 'react';
import c from './Wednesday.css';
import {connect} from "react-redux";
import {changeThemeAC} from "../../redux/wednesdayReducer";

class Wednesday extends React.Component {

    onChangeTheme = (e) => {
            return this.props.changeTheme(e.target.value);
    }


    render() {
      let chuseTheme = this.props.style === 'dark'
          ? 'darkActive'
          : this.props.style === 'light' ? 'lightActive' : 'blueActive';

        return (
            <div className={this.props.style} onChange={this.onChangeTheme}>
                <div>DARK<input
                    onClick={this.onChangeTheme}
                    type="radio"
                    value="dark"
                    name="theme"
                /></div>
                <div>LIGHT<input
                    onClick={this.onChangeTheme}
                    type="radio"
                    value="light"

                    name="theme"
                /></div>
                <div>BLUE<input
                    onClick={this.onChangeTheme}
                    type="radio"
                    value="blue"
                    name="theme"/></div>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        style: state.wednesdayPage.style
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeTheme: (style) => {
            dispatch(changeThemeAC(style));
        },

    }
}
const WednesdayContainer = connect(mapStateToProps, mapDispatchToProps)(Wednesday);
export default WednesdayContainer;


