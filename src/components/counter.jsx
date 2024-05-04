import React from "react";

const Counter = (props) => {
  const formatCount = () =>
    props.counter.value === 0 ? <span>Zero</span> : props.counter.value;

  let classes = "badge m-2 badge-";
  classes += props.counter.value === 0 ? "warning" : "primary";

  return (
    <>
      <span className={classes}>{formatCount()}</span>
      <button
        onClick={() => props.onIncrement(props.counter)}
        className="btn btn-secondary"
      >
        +
      </button>
      <button
        onClick={() => props.onDelete(props.counter.id)}
        className="btn btn-danger btn-sm m-2"
      >
        Delete
      </button>
    </>
  );
};

export default Counter;
