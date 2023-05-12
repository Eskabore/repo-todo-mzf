import React from "react";
import PropTypes from "prop-types"; // Importing PropTypes

function FilterButton({ isPressed, setFilter, name }) {

  return (
    <button
      type='button'
      className='btn toggle-btn'
      aria-pressed={isPressed}
      onClick={() => setFilter(name)}>
      <span className='visually-hidden'>Show </span>
      <span>{name}</span>
      <span className='visually-hidden'> tasks</span>
    </button>
  );
}

FilterButton.propTypes = {
  // Adding PropTypes
  isPressed: PropTypes.bool.isRequired,
  setFilter: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default FilterButton;
