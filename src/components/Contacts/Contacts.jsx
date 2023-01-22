

const Contacts = ({ contacts, onDeleteContact }) => {
//   console.log(contacts);
    return (<div>
              <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: <span> {number} </span>
          </p>

          <button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
    
  );
};

export default Contacts;
