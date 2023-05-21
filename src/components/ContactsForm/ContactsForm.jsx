// // import React from 'react';
// // import PropTypes from 'prop-types';
// // import css from './ContactsForm.module.css';

// // class ContactsForm extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       name: '',
// //       number: ''
// //     };
// //   }

// //   componentDidMount() {
// //     const storedContacts = localStorage.getItem('contacts');
// //     if (storedContacts) {
// //       this.props.onLoadContacts(JSON.parse(storedContacts));
// //     }
// //   }

// //   componentDidUpdate(prevProps, prevState) {
// //     if (prevProps.contacts !== this.props.contacts) {
// //       localStorage.setItem('contacts', JSON.stringify(this.props.contacts));
// //     }
// //   }

// //   handleSubmit = (event) => {
// //     event.preventDefault();
// //     const { name, number } = this.state;
// //     if (name.trim() === '' || number.trim() === '') {
// //       return;
// //     }
// //     const formattedName = this.formatName(name.trim());
// //     this.props.onAddContact(formattedName, number);
// //     this.setState({ name: '', number: '' });
// //   };

// //   handleChange = (event) => {
// //     this.setState({ [event.target.name]: event.target.value });
// //   };

// //   formatName = (name) => {
// //     const [firstName, ...lastName] = name.split(' ');
// //     const formattedFirstName = this.capitalizeFirstLetter(firstName.toLowerCase());
// //     const formattedLastName = lastName.map((part) => this.capitalizeFirstLetter(part.toLowerCase()));
// //     return [formattedFirstName, ...formattedLastName].join(' ');
// //   };

// //   capitalizeFirstLetter = (str) => {
// //     return str.charAt(0).toUpperCase() + str.slice(1);
// //   };

// //   render() {
// //     const { name, number } = this.state;

// //     return (
// //       <form className={css.contactsForm} onSubmit={this.handleSubmit}>
// //         <label>Name</label>
// //         <input
// //           type="text"
// //           name="name"
// //           placeholder="Enter name"
// //           value={name}
// //           onChange={this.handleChange}
// //         />
// //         <label>Phone Number</label>
// //         <input
// //           type="text"
// //           name="number"
// //           placeholder="Phone Number"
// //           value={number}
// //           onChange={this.handleChange}
// //         />
// //         <button type="submit">Add contact</button>
// //       </form>
// //     );
// //   }
// // }

// // ContactsForm.propTypes = {
// //   contacts: PropTypes.array.isRequired,
// //   onAddContact: PropTypes.func.isRequired,
// //   onLoadContacts: PropTypes.func.isRequired
// // };

// // export default ContactsForm;
// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import css from './ContactsForm.module.css';

// const ContactsForm = ({ contacts, onAddContact, onLoadContacts }) => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   useEffect(() => {
//     const storedContacts = localStorage.getItem('contacts');
//     if (storedContacts) {
//       onLoadContacts(JSON.parse(storedContacts));
//     }
//   }, [onLoadContacts]);

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const trimmedName = name.trim();
//     const trimmedNumber = number.trim();

//     if (trimmedName === '' || trimmedNumber === '') {
//       return;
//     }

//     const formattedName = formatName(trimmedName);

//     onAddContact(formattedName, trimmedNumber);
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
//       <input
//         type="text"
//         name="name"
//         placeholder="Enter name"
//         value={name}
//         onChange={handleChange}
//       />
//       <label>Phone Number</label>
//       <input
//         type="text"
//         name="number"
//         placeholder="Phone Number"
//         value={number}
//         onChange={handleChange}
//       />
//       <button type="submit">Add contact</button>
//     </form>
//   );
// };

// ContactsForm.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onAddContact: PropTypes.func.isRequired,
//   onLoadContacts: PropTypes.func.isRequired,
// };

// export default ContactsForm;
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './ContactsForm.module.css';

const ContactsForm = ({ contacts, onAddContact, onLoadContacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isDuplicateName, setIsDuplicateName] = useState(false);

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      onLoadContacts(JSON.parse(storedContacts));
    }
  }, [onLoadContacts]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedName = name.trim();
    const trimmedNumber = number.trim();

    if (trimmedName === '' || trimmedNumber === '') {
      return;
    }

    const formattedName = formatName(trimmedName);

    if (contacts.some((contact) => contact.name.toLowerCase() === formattedName.toLowerCase())) {
      alert(`${formattedName} is already in contacts.`);
      return;
    }

    onAddContact(formattedName, trimmedNumber);
    setName('');
    setNumber('');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
      setIsDuplicateName(
        contacts.some((contact) => contact.name.toLowerCase() === value.toLowerCase())
      );
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
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={name}
        onChange={handleChange}
      />
      {isDuplicateName && (
        <p className={css.duplicateName}>This name already exists in contacts.</p>
      )}
      <label>Phone Number</label>
      <input
        type="text"
        name="number"
        placeholder="Phone Number"
        value={number}
        onChange={handleChange}
      />
      <button type="submit" disabled={isDuplicateName}>
        Add contact
      </button>
    </form>
  );
};

ContactsForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  onAddContact: PropTypes.func.isRequired,
  onLoadContacts: PropTypes.func.isRequired,
};

export default ContactsForm;
