import React, { useState } from "react";
import PropTypes from "prop-types"; // Importing PropTypes

function Form({ onAddTask }) {
  // Destructuring props

  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (name.trim()) {
      // Ensure the task is not empty
      onAddTask(name);
      setName("");
    } else {
      alert("Task cannot be empty!");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='label-wrapper'>
        <label htmlFor='new-todo-input' className='label__lg'>
          What needs to be done?
        </label>
      </h2>
      <input
        type='text'
        id='new-todo-input'
        className='input input__lg'
        name='text'
        autoComplete='off'
        value={name}
        onChange={handleChange}
      />
      <button type='submit' className='btn btn__primary btn__lg'>
        Add
      </button>
    </form>
  );
}

Form.propTypes = {
  // Adding PropTypes
  onAddTask: PropTypes.func.isRequired,
};

export default Form;
