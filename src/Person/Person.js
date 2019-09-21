import React from "react";
import classes from "./Person.module.css";

const person = (props) => {

    const random = Math.random();

    if (random > 0.5) throw new Error('Cant render Person');

    return (
        <div className={classes.cart}>
            <span onClick={props.onDeletePerson}>Delete</span>
            <h1>I'm {props.name}. I'm {props.age} old</h1>
            <input 
                onChange={props.onNamechanged} 
                value={props.name}/>
        </div>
    )
}

export default person