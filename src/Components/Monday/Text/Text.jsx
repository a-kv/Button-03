import React from 'react';
import c from './Text.module.css';

class Text extends React.Component {


    render = () => {
        return (
            <div className={c.text}>
                <span>{this.props.number} </span>
            </div>
        )
    };
}

export default Text;



