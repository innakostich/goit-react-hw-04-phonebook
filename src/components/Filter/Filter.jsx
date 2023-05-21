// import React from 'react';
// import PropTypes from 'prop-types';
// import css from './Filter.module.css';

// class Filter extends React.Component {
//   handleChange = (event) => {
//     this.props.onChange(event.target.value);
//   };

//   render() {
//     const { value } = this.props;

//     return (
//       <input
//         type="text"
//         placeholder="Search contacts"
//         value={value}
//         onChange={this.handleChange}
//         className={css.input}
//       />
//     );
//   }
// }

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired
// };

// export default Filter;
import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search contacts"
      value={value}
      onChange={handleChange}
      className={css.input}
    />
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
