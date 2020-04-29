import React from 'react';
import {NavLink} from "react-router-dom";
import c from './Navbar.module.css';
import DrawerNavbarClose from "./DrawerNavbarClose/DrawerNavbarClose";

class Navbar extends React.Component {

    render = () => {
        return (
            <div className={c.navbar}>
                <div className={c.navbarItem}>
                    <DrawerNavbarClose onClick={this.props.onClick}/>
                    <NavLink to='/monday'>Monday</NavLink>
                </div>
                <div className={c.navbarItem}>
                    <NavLink to='/tuesday'>Tuesday</NavLink>
                </div>
            </div>
        );
    }
}

export default Navbar;
