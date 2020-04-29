import React from 'react';
import {NavLink} from "react-router-dom";
import c from './DrawerNavbarClose.module.css';

class DrawerNavbarClose extends React.Component {

    render = (props) => {
        return (
            <div className={c.drawerNavbar}>
                <button onClick={this.props.onClick} className={c.drawerNavbarButton} >
                    <div className={c.buttonDot}></div>
                    <div className={c.buttonDot}></div>
                    <div className={c.buttonDot}></div>
                </button>

            </div>
        );
    }
}

export default DrawerNavbarClose;
