import React from 'react';
import c from './Header.module.css';
import Navbar from "./Navbar/Navbar";
import menu from '../../assets/image/menu.svg';
import cross from '../../assets/image/close.svg';

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
            return <img className={c.navMenu} src={menu} onClick={this.openNavbar}/>;
        }

        return (
            <div className={c.header}>
                <div className={c.headerTitle}>
                    <img className={c.navMenu} src={cross} onClick={this.closeNavbar}/>
                    {sideNavbar}
                </div>
            </div>
        );
    }
}

export default Header;
