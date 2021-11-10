import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ onClick, checked, label, name }) => {
  return (
    <div>
      <input
        type="checkbox"
        id={name}
        onChange={onClick}
        checked={checked}
        name={name}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

Checkbox.propTypes = {
  onClick: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Checkbox;
