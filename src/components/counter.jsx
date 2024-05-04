import React, { useState } from "react";

const Counter = (props) => {
  console.log("prosy przekazane do komponentu", props);

  const [count, setCount] = useState(0);

  const formatCount = () => (count === 0 ? <span>Zero</span> : count);

  let classes = "badge m-2 badge-";
  classes += count === 0 ? "warning" : "primary";

  const handleIncrement = (incrementor) => {
    setCount(count + incrementor);
  };

  return (
    <>
      <span className={classes}>{formatCount()}</span>
      <button onClick={() => handleIncrement(10)} className="btn btn-secondary">
        increment
      </button>
    </>
  );
};

export default Counter;
