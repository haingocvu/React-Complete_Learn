import React, { useEffect, useRef, memo } from 'react';
import classes from "./Cockpit.module.scss";

const Cockpit = (props) => {

    console.log('[Cockpit] render')

    // with below config
    // this hook will only execute when persons get update
    // and not execute when initialize
    // we clean up promise by using isSubscribed variable
    const isFirstInit = useRef(true);
    useEffect(() => {
        let isSubscribed = true;
        if (isFirstInit.current) {
            isFirstInit.current = false
        } else {
            setTimeout(() => {
                if (isSubscribed) {
                    console.log('Cockpit saved data to cloud')
                }
            }, 500);
        }
        return () => {
            console.log('on destroy cockpit')
            isSubscribed = false;
        };
    }, [props.persons])

    const buildClass = () => {
        const clss = [classes['margin-top-bottom']];
        props.personsLength <= 2 && clss.push(classes.bold);
        props.personsLength <= 1 && clss.push(classes['big-size']);
        return clss.join(' ');
    }

    return (
        <div className={classes.Cockpit}>
            <div className={buildClass()}>{props.title}</div>
            <button
                onClick={props.onToggle}>
                Toggle Person
            </button>
        </div>
    )
}

export default memo(Cockpit);