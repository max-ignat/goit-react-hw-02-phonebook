import React, { Component } from 'react';
import Form from './Form';
import Contacts from './Contacts';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = ({name, number}) => {
    console.log('State from Form','Name', name, 'Number', number);
    const lowerCasedName = name.toLowerCase()
    const { contacts } = this.state;
    let added = contacts.find(contact => contact.name.toLowerCase() === lowerCasedName);

    if (added) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(prevSate => (
      {contacts: [...prevSate.contacts, contact]}))
  };

  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    })

    )

  }

  render() {
  

    return (
      <>
        <Form submitProp={this.formSubmitHandler} />
        <Contacts contacts={this.state.contacts} onDeleteContact={this.deleteContact} />
      </>
    );
  }
}

export default App;
