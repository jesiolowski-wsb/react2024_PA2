import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(5);

  const formatCount = () => (count === 0 ? <span>Zero</span> : count);

  let classes = "badge m-2 badge-";
  classes += count === 0 ? "warning" : "primary";

  return (
    <>
      <span className={classes}>{formatCount()}</span>
      <button className="btn btn-secondary">increment</button>
    </>
  );
};

export default Counter;
