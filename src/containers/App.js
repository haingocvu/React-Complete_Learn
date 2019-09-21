import React, { Component } from 'react';
import classes from './App.module.scss';
import Persons from "./../components/Persons/Persons";
import Cockpit from "./../components/Cockpit/Cockpit";

class App extends Component {

  state = {
    persons: [
      { code: 'p01', name: 'nhi', age: 20 },
      { code: 'p02', name: 'Linh', age: 22 },
      { code: 'p03', name: 'Nga', age: 24 }
    ],
    otherState: 'anything',
    isShowPerson: false
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

  render() {
    return (
      <div className={classes.App}>
        <Cockpit 
          onToggle={this.togglePersonHandler}
          personLength={this.state.persons.length}/>
        { this.renderPerson() }
      </div>
    );
  }
}

export default App;
