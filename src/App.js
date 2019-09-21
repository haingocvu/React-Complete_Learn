import React, { Component } from 'react';
import classes from './App.module.css';
import Person from "./Person/Person";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

class App extends Component {

  state = {
    persons: [
      { name: 'nhi', age: 20 },
      { name: 'Linh', age: 22 },
      { name: 'Nga', age: 24 }
    ],
    otherState: 'anything',
    isShowPerson: false
  }

  switchShowHidePerson = () => {
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
    return this.state.isShowPerson ? this.state.persons.map((person, index) =>
      <ErrorBoundary key={index}>
        <Person
          onDeletePerson={() => this.deletePersonHandler(index)}
          name={person.name}
          age={person.age}
          onNamechanged={(event) => this.nameChangedHandler(event, index)}
        />
      </ErrorBoundary>
    ) : null;
  }

  buildClass = () => {
    const clss = [classes['margin-top-bottom']];
    this.state.persons.length <= 2 && clss.push(classes.bold);
    this.state.persons.length <= 1 && clss.push(classes['big-size']);
    return clss.join(' ');
  }

  render() {
    return (
      <div className={classes.App}>
        <div className={this.buildClass()}>React App</div>
        <button
          onClick={this.switchShowHidePerson}>
          Click
        </button>
        {this.renderPerson()}
      </div>
    );
  }
}

export default App;
