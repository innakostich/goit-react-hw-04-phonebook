// import React, { useState, useEffect } from 'react';
// import shortid from 'shortid';
// import ContactsForm from './ContactsForm/ContactsForm';
// import ContactsList from './ContactsList/ContactsList';
// import Filter from './Filter/Filter';
// import css from './App.module.css';

// const App = () => {
//   const [contacts, setContacts] = useState([]);
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     const storedContacts = localStorage.getItem('contacts');
//     if (storedContacts) {
//       setContacts(JSON.parse(storedContacts));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const handleAddContact = (name, number) => {
//     const existingContact = contacts.find((contact) => contact.name === name);

//     if (existingContact) {
//       alert(`${name} is already in contacts.`);
//       return;
//     }

//     const newContact = {
//       id: shortid.generate(),
//       name,
//       number,
//     };

//     setContacts((prevContacts) => [...prevContacts, newContact]);
//   };

//   const handleDeleteContact = (id) => {
//     setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
//   };

//   const handleFilterChange = (event) => {
//     setFilter(event.target.value);
//   };

//   const filteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <div>
//       <h1 className={css.phonebookTitle}>Phonebook</h1>
//       <ContactsForm onAddContact={handleAddContact} />
//       <h2 className={css.contactsTitle}>Contacts</h2>
//       <p className={css.contactsLabel}>Find contacts by name</p>
//       <Filter value={filter} onChange={handleFilterChange} />
//       <ContactsList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
//     </div>
//   );
// };

// export default App;
import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import css from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (name, number) => {
    const existingContact = contacts.find((contact) => contact.name === name);

    if (existingContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const handleDeleteContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1 className={css.phonebookTitle}>Phonebook</h1>
      <ContactsForm onAddContact={handleAddContact} />
      <h2 className={css.contactsTitle}>Contacts</h2>
      <p className={css.contactsLabel}>Find contacts by name</p>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactsList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
};

export default App;
