import React, { useState } from "react";

const Counter = ({ id, value: passedValue, onDelete }) => {
  const [value, setValue] = useState(passedValue);

  const formatCount = () => (value === 0 ? <span>Zero</span> : value);

  let classes = "badge m-2 badge-";
  classes += value === 0 ? "warning" : "primary";

  const handleIncrement = (incrementor) => {
    setValue(value + incrementor);
  };

  return (
    <>
      <span className={classes}>{formatCount()}</span>
      <button onClick={() => handleIncrement(1)} className="btn btn-secondary">
        +
      </button>
      <button
        onClick={() => onDelete(id)}
        className="btn btn-danger btn-sm m-2"
      >
        Delete
      </button>
    </>
  );
};

export default Counter;
