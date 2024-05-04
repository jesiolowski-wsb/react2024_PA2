import React, { useState } from "react";

const Counter = ({ value: passedValue, children }) => {
  const [value, setValue] = useState(passedValue);

  const formatCount = () => (value === 0 ? <span>Zero</span> : value);

  let classes = "badge m-2 badge-";
  classes += value === 0 ? "warning" : "primary";

  const handleIncrement = (incrementor) => {
    setValue(value + incrementor);
  };

  return (
    <>
      {children}
      <span className={classes}>{formatCount()}</span>
      <button onClick={() => handleIncrement(1)} className="btn btn-secondary">
        increment
      </button>
    </>
  );
};

export default Counter;
