import React from "react";
import Person from "./Person/Person";

const Persons = (props) => {
    return props.persons.map((person, index) =>
      <Person
        key={person.code}
        onDeletePerson={() => props.onDeletePerson(index)}
        name={person.name}
        age={person.age}
        onNamechanged={(event) => props.onNamechanged(event, index)}
      />
  );
}

export default Persons;