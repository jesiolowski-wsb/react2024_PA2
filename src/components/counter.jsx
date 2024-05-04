import React from "react";

const Counter = (props) => {
  const formatCount = () =>
    props.counter.value === 0 ? <span>Zero</span> : props.counter.value;

  let classes = "badge m-2 badge-";
  classes += props.counter.value === 0 ? "warning" : "primary";

  return (
    <div>
      <span className={classes}>{formatCount()}</span>
      <button
        onClick={() => props.onIncrement(props.counter)}
        className="btn btn-sm btn-secondary"
      >
        +
      </button>
      <button
        onClick={() => props.onDecrement(props.counter)}
        className="btn btn-secondary m-2 btn-sm"
        disabled={props.counter.value === 0}
      >
        -
      </button>
      <button
        onClick={() => props.onDelete(props.counter.id)}
        className="btn btn-danger btn-sm"
      >
        x
      </button>
    </div>
  );
};

export default Counter;
