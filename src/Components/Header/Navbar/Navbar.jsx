import React from 'react';
import {NavLink} from "react-router-dom";
import c from './Navbar.module.css';
import cross from "../../../assets/image/001-cross.svg";

class Navbar extends React.Component {

    render = () => {
        return (
            <div className={c.navbar}>
                <div className={c.item}>
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
