import React from 'react';
import c from './Header.module.css';
import Navbar from "./Navbar/Navbar";
import DrawerNavbar from "./DrawerNavbar/DrawerNavbar";

class Header extends React.Component {
    state = {
        navbarOpen: false
    };
    drawerNavbarOnClick = () => {
        this.setState({navbarOpen: true})
    };
    //         return {
    //             navbarOpen: prevState.navbarOpen
    //         };
    //     });
    // };

    backdropClickHandler = () => {
        this.setState({navbarOpen: false})
    };

    render = () => {
        let sideNavbar;
        if (this.state.navbarOpen) {
            sideNavbar = <Navbar onClick={this.backdropClickHandler}/>;
        }

        return (
            <div className={c.header}>
                <DrawerNavbar onClick={this.drawerNavbarOnClick}/>
                {sideNavbar}
                <div className={c.headerTitle}>
                    <span>Homework from Ignat</span>
                    <span className={c.secondHeaderTitle}>only hardcore</span>
                </div>
            </div>
        );
    }
}

export default Header;
