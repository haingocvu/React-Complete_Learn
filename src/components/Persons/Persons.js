import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {

  // call when creating component
  // once time
  constructor(props) {
    super(props);
    this.state = {
      example: ''
    }
    console.log('[Persons] construct. call once when creating')
  }

  // call when creating component
  // once time
  componentDidMount() {
    console.log('[Persons] componentDidMount. call once when creating')
  }

  // call before render method
  static getDerivedStateFromProps(nextProps, nextState) {
    console.log('[Persons] getDerivedStateFromProps');
    return nextState;
  }

  // updating prop or state will fire this hook
  componentDidUpdate() {
    console.log('[Persons] componentDidUpdate');
  }

  // call once when destroy component
  componentWillUnmount() {
    console.log('[Person] componentWillUnmoun');
  }

  // call when init and update props or state
  render() {
    console.log('[Persons] render')
    return this.props.persons.map((person, index) =>
      <Person
        key={person.code}
        onDeletePerson={() => this.props.onDeletePerson(index)}
        name={person.name}
        age={person.age}
        onNamechanged={(event) => this.props.onNamechanged(event, index)}
      />
    );
  }
}

export default Persons;