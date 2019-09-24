import React, { PureComponent } from 'react';
import classes from './App.module.scss';
import Persons from "./../components/Persons/Persons";
import Cockpit from "./../components/Cockpit/Cockpit";
import { withClass } from "../components/hoc/withClass";
import Aux from "../components/hoc/Aux";

class App extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { code: 'p01', name: 'nhi', age: 20 },
        { code: 'p02', name: 'Linh', age: 22 },
        { code: 'p03', name: 'Nga', age: 24 }
      ],
      otherState: 'anything',
      isShowPerson: false,
      isShowCockpit: true
    }
  }

  togglePersonHandler = () => {
    const isShow = !this.state.isShowPerson;
    this.setState({
      isShowPerson: isShow
    })
  }

  deletePersonHandler = (index) => {
    const newPersons = [...this.state.persons];
    newPersons.splice(index, 1);
    this.setState({
      persons: newPersons
    })
  }

  nameChangedHandler = (event, index) => {
    // only set value exactly index
    event.preventDefault();
    const newPersons = [...this.state.persons];
    const newValue = event.target.value;
    newPersons[index].name = newValue;
    this.setState({
      persons: newPersons
    })
  }

  renderPerson = () => {
    return this.state.isShowPerson ? <Persons
      persons={this.state.persons}
      onDeletePerson={this.deletePersonHandler}
      onNamechanged={this.nameChangedHandler}
    /> : null
  }

  removeCockpit = () => {
    this.setState({
      isShowCockpit: !this.state.isShowCockpit
    })
  }

  renderCockpit = () => {
    return this.state.isShowCockpit ? <Cockpit 
    title={this.props.appTitle}
    onToggle={this.togglePersonHandler}
    personsLength={this.state.persons.length}/> : null
  }

  render() {
    return (
      <Aux>
        <button onClick={this.removeCockpit}>toggle cockpit</button>
        { this.renderCockpit() }
        { this.renderPerson() }
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
