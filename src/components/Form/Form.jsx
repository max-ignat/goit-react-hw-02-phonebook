import React, { Component } from 'react';
import shortid from 'shortid';
class Form extends Component {
  state = {
    name: '',
    number: '',
    contacts: [
      {
        id: 'id-1',
        name: 'Maks',
        number: '111-22-33',
      },
      {
        id: 'id-2',
        name: 'Anna',
        number: '222-11-33',
      },
      {
        id: 'id-3',
        name: 'Shon',
        number: '333-22-11',
      },
      {
        id: 'id-4',
        name: 'Derek',
        number: '444-33-22',
      },
    ],
  };

  handleInputChange = event => {
    // console.log(event.currentTarget.value);

    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleSubmit = event => {
    event.preventDefault();

    this.props.submitProp(this.state);

    this.reset();
  };

  

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
      return (
          <div>
            <h2>Phone Book</h2>  
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          NAME
          <input
            onChange={this.handleInputChange}
            type="text"
            name="name"
            placeholder="type name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            id={this.nameInputId}
            required
          />
        </label>

        <label htmlFor={this.numberInputId}>
          NUMBER
          <input
            onChange={this.handleInputChange}
            type="tel"
            name="number"
            placeholder="type digits"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            id={this.numberInputId}
            required
          />
        </label>

        <button type="submit">Add contact</button>
              </form>
              </div>
    );
  }
}

export default Form;
