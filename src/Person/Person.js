import React from "react";
import "./Person.css";
import Radium from "radium";

const person = (props) => {

    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }

    return (
        <div className="Person" style={style}>
            <span onClick={props.onDeletePerson}>Delete</span>
            <h1>I'm {props.name}. I'm {props.age} old</h1>
            <input 
                onChange={props.onNamechanged} 
                value={props.name}/>
        </div>
    )
}

export default Radium(person)