import React from "react";
import classes from "./Person.module.scss";

const person = (props) => {
    return (
        <div className={classes.Person}>
            <span onClick={props.onDeletePerson}>Delete</span>
            <h1>I'm {props.name}. I'm {props.age} old</h1>
            <input 
                onChange={props.onNamechanged} 
                value={props.name}/>
        </div>
    )
}

export default person