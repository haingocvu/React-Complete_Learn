import React, { Component } from "react";
import classes from "./Person.module.scss";
import Aux from "../../hoc/Aux";
import { withClass } from "../../hoc/withClass";

class Person extends Component {

    render() {
        return (
            <Aux>
                <span key="1" onClick={this.props.onDeletePerson}>Delete</span>
                <h1 key="2">I'm {this.props.name}. I'm {this.props.age} old</h1>
                <input key="3"
                    onChange={this.props.onNamechanged}
                    value={this.props.name} />
            </Aux>
        )
    }
}

export default withClass(Person, classes.Person)