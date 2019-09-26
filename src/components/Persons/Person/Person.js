import React, { Component } from "react";
import classes from "./Person.module.scss";
import Aux from "../../hoc/Aux";
import { withClass } from "../../hoc/withClass";
import PropTypes from "prop-types";
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    static contextType = AuthContext;

    render() {
        return (
            <Aux>
                {this.context.authenticated ? <div>Authenticated</div> : <div>Please Login</div>}
                <span key="1" onClick={this.props.onDeletePerson}>Delete</span>
                <h1 key="2">I'm {this.props.name}. I'm {this.props.age} old</h1>
                <input key="3"
                    onChange={this.props.onNamechanged}
                    value={this.props.name} />
            </Aux>
        )
    }
}

Person.propTypes = {
    onDeletePerson: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    onNamechanged: PropTypes.func
}

export default withClass(Person, classes.Person)