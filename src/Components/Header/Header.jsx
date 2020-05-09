import React from 'react';
import c from './Header.module.css';
import Navbar from "./Navbar/Navbar";
import menu from '../../assets/image/002-null.svg';
import cross from '../../assets/image/001-cross.svg';

class Header extends React.Component {
    state = {
        navbarOpen: false,
    };
    openNavbar = () => {
        this.setState({navbarOpen: true})
    };
    closeNavbar = () => {
        this.setState({navbarOpen: false})
    };

    render = () => {
        let sideNavbar;
        if (this.state.navbarOpen === true) {
            sideNavbar = <Navbar/>;
        }else{
            return <img src={menu} onClick={this.openNavbar}/>;
        }

        return (
            <div className={c.header}>
                <div className={c.headerTitle}>
                    <img src={cross} onClick={this.closeNavbar}/>
                    {sideNavbar}
                </div>
            </div>
        );
    }
}

export default Header;
