import React, { useEffect, useRef, memo, useContext } from 'react';
import classes from "./Cockpit.module.scss";
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {

    console.log('[Cockpit] render')

    const btnToggleRef = useRef(null);

    const authContext = useContext(AuthContext);

    // componentDidMount
    useEffect(() => {
        btnToggleRef.current.click();
    }, [])

    const buildClass = () => {
        const clss = [classes['margin-top-bottom']];
        props.personsLength <= 2 && clss.push(classes.bold);
        props.personsLength <= 1 && clss.push(classes['big-size']);
        return clss.join(' ');
    }

    return (
        <div className={classes.Cockpit}>
            <div className={buildClass()}>{props.title}</div>
            <button onClick={authContext.login}>Login</button>
            <button
                ref={btnToggleRef}
                onClick={props.onToggle}>
                Toggle Person
            </button>
        </div>
    )
}

export default memo(Cockpit);