import React from 'react';
import c from './Wednesday.css';
import axios from 'axios';
import {connect} from "react-redux";
import {changeThemeAC, postCheckAC} from "../../redux/wednesdayReducer";


const tryCatch = async ( f ) => {
    try {
        const response = await f();
        console.log('answer: ', response.data);
        return response;
    } catch (e) {
        console.log('error: ', {...e});
        return 'error';
    }
    ;
}

class Wednesday extends React.Component {

    onChangeTheme = (e) => {
            return this.props.changeTheme(e.target.value);
    }
    onChangeChecked= () => {
            return this.props.changeCheck(!this.props.success);
    }
    f = () => {
        return  axios.post(
            'https://neko-cafe-back.herokuapp.com/auth/test',
            {success: true},
            {
                // success: true,
                headers: {"API-KEY": "d13010db-d825-4b89-b5a1-3acdd313b6bb"}
            }
        )
            .then(res => {
                console.log(res)
            })
            // .catch(e => { console.log(e)});
    }

    render() {
        return (
            <div className={this.props.style}>
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
                <div><button onClick={() => tryCatch(this.f)}>SEND</button><input onClick={this.onChangeChecked}
                    checked={this.props.success}
                    type="radio"
                /></div>
            </div>

        )

    }
}

const mapStateToProps = (state) => {
    return {
        style: state.wednesdayPage.style,
        success: state.wednesdayPage.success
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeTheme: (style) => {
            dispatch(changeThemeAC(style));
        },
        changeCheck: (checked) => {
            dispatch(postCheckAC(checked));
        },

    }
}
const WednesdayContainer = connect(mapStateToProps, mapDispatchToProps)(Wednesday);
export default WednesdayContainer;


