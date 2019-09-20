import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";
import Radium, {StyleRoot} from "radium"

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
      <Person 
        onDeletePerson={() => this.deletePersonHandler(index)}
        key={index}
        name={person.name}
        age={person.age}
        onNamechanged={(event) => this.nameChangedHandler(event, index)}
      />
    ) : null;
  }

  buildClass = () => {
    const classes = ['margin-top-bottom'];
    this.state.persons.length <= 2 && classes.push('bold');
    this.state.persons.length <= 1  && classes.push('big-size');
    return classes.join(' ');
  }

  buildStyle = () => {
    const {isShowPerson} = this.state;
    const style = {
      backgroundColor: 'green',
      color: 'white',
      border: '1px solid black',
      padding: '10px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightGreen'
      }
    }
    isShowPerson && (() => {
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: '#FF7F50'
      }
    })();
    return style;
  }

  render() {
    return (
      <StyleRoot>
        <div className="App">
          <div className={this.buildClass()}>React App</div>
          <button 
            style={this.buildStyle()}
            onClick={this.switchShowHidePerson}
            >Click
          </button>
          {this.renderPerson()}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
