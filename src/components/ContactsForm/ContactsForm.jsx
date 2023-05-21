// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import css from './ContactsForm.module.css';

// const ContactsForm = ({ onAddContact }) => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (name.trim() === '' || number.trim() === '') {
//       return;
//     }
//     const formattedName = formatName(name.trim());
//     onAddContact(formattedName, number);
//     setName('');
//     setNumber('');
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     if (name === 'name') {
//       setName(value);
//     } else if (name === 'number') {
//       setNumber(value);
//     }
//   };

//   const formatName = (name) => {
//     const [firstName, ...lastName] = name.split(' ');
//     const formattedFirstName = capitalizeFirstLetter(firstName.toLowerCase());
//     const formattedLastName = lastName.map((part) => capitalizeFirstLetter(part.toLowerCase()));
//     return [formattedFirstName, ...formattedLastName].join(' ');
//   };

//   const capitalizeFirstLetter = (str) => {
//     return str.charAt(0).toUpperCase() + str.slice(1);
//   };

//   return (
//     <form className={css.contactsForm} onSubmit={handleSubmit}>
//       <label>Name</label>
//       <input type="text" name="name" placeholder="Enter name" value={name} onChange={handleChange} />
//       <label>Phone Number</label>
//       <input type="text" name="number" placeholder="Phone Number" value={number} onChange={handleChange} />
//       <button type="submit">Add contact</button>
//     </form>
//   );
// };

// ContactsForm.propTypes = {
//   onAddContact: PropTypes.func.isRequired,
// };

// export default ContactsForm;
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactsForm.module.css';

const ContactsForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() === '' || number.trim() === '') {
      return;
    }
    const formattedName = formatName(name.trim());
    onAddContact(formattedName, number);
    setName('');
    setNumber('');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const formatName = (name) => {
    const [firstName, ...lastName] = name.split(' ');
    const formattedFirstName = capitalizeFirstLetter(firstName.toLowerCase());
    const formattedLastName = lastName.map((part) => capitalizeFirstLetter(part.toLowerCase()));
    return [formattedFirstName, ...formattedLastName].join(' ');
  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <form className={css.contactsForm} onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" name="name" placeholder="Enter name" value={name} onChange={handleChange} />
      <label>Phone Number</label>
      <input type="text" name="number" placeholder="Phone Number" value={number} onChange={handleChange} />
      <button type="submit">Add contact</button>
    </form>
  );
};

ContactsForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactsForm;
