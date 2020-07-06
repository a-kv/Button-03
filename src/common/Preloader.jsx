import React from 'react';
import c from '../Components/Tuesday/Tuesday.module.css';
import loading from "../assets/150x150.gif";


class Preloader extends React.Component {
    render = () => {
        return <img className={c.loading} src={loading} alt=""/>;
    }
}
export default Preloader;
