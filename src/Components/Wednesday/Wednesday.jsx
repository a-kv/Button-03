import React from 'react';
import c from './Wednesday.css';
import {connect} from "react-redux";
import {changeNotificationAC, changeThemeAC, postCheckAC, toggleIsFetching} from "../../redux/wednesdayReducer";
import {api, tryCatch} from "../../dal/api";
import Preloader from "../../common/Preloader";


class Wednesday extends React.Component {

    onChangeTheme = (e) => {
        return this.props.changeTheme(e.target.value);
    }
    onChangeChecked = () => {
        return this.props.changeCheck(!this.props.success);
    }

    f = () => {
        this.props.toggleIsFetching(true);
        api.fun(this.props.success)
            .then(res => {
                console.log(res)
                debugger
                this.props.toggleIsFetching(false);
                this.props.changeNotification('ok');

            })
            .catch(e => {
                debugger
                this.props.changeNotification('error');
                console.log(e)
            });
    }

    render() {

        let dis = this.props.isFetching ? 'disabled' : '';
        return (<>
                {this.props.isFetching ? <Preloader/> : null}

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
                        name="theme"
                    /></div>
                    <div>
                        <button onClick={() => tryCatch(this.f)} disabled={dis}>SEND</button>
                        <input onClick={this.onChangeChecked}
                               checked={this.props.success}
                               type="radio"
                        /></div>
                    <span>{this.props.notification}</span>
                </div>
            </>
        )

    }

}

const mapStateToProps = (state) => {

    return {
        style: state.wednesdayPage.style,
        success: state.wednesdayPage.success,
        isFetching: state.wednesdayPage.isFetching,
        notification: state.wednesdayPage.notification,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeTheme: (style) => {
            dispatch(changeThemeAC(style));
        },
        changeCheck: (success) => {
            dispatch(postCheckAC(success));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetching(isFetching));
        },
        changeNotification: (notification) => {
            debugger
            dispatch(changeNotificationAC(notification));
        },

    }
}
const WednesdayContainer = connect(mapStateToProps, mapDispatchToProps)(Wednesday);
export default WednesdayContainer;


