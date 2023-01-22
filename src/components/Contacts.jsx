import React  from 'react';

const Contacts = ({ contacts, onDeleteContact }) => {
//   console.log(contacts);
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>Name: {name}</p>
          <p>Phone number: {number} </p>
          <button type="button" onClick={() => onDeleteContact(id)}>
            
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
