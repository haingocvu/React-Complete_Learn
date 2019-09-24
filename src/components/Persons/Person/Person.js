import React, { Component } from "react";
import classes from "./Person.module.scss";

class Person extends Component {

    render() {
        return (
            <div className={classes.Person}>
                <span onClick={this.props.onDeletePerson}>Delete</span>
                <h1>I'm {this.props.name}. I'm {this.props.age} old</h1>
                <input 
                    onChange={this.props.onNamechanged} 
                    value={this.props.name}/>
            </div>
        )
    }
}

export default Person