import React from 'react';
import classes from "./Cockpit.module.scss";

const Cockpit = (props) => {

    const buildClass = () => {
        const clss = [classes['margin-top-bottom']];
        props.personLength <= 2 && clss.push(classes.bold);
        props.personLength <= 1 && clss.push(classes['big-size']);
        return clss.join(' ');
    }

    return (
        <div className={classes.Cockpit}>
            <div className={buildClass()}>React App</div>
            <button
                onClick={props.onToggle}>
                Click
            </button>
        </div>
    )
}

export default Cockpit;