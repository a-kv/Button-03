import React from 'react';
import {NavLink} from "react-router-dom";
import c from './Navbar.module.css';
import DrawerNavbarClose from "./DrawerNavbarClose/DrawerNavbarClose";

class Navbar extends React.Component {

    render = () => {
        return (
            <div className={c.navbar}>
                <div className={c.item}>
                    <DrawerNavbarClose onClick={this.props.onClick}/>
                    <NavLink to='/monday' activeClassName={c.activeItem}>Monday</NavLink>
                </div>
                <div className={c.item}>
                    <NavLink to='/tuesday' activeClassName={c.activeItem}>Tuesday</NavLink>
                </div>
            </div>
        );
    }
}

export default Navbar;
