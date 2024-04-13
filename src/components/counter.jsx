import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(5);
  const [tagsList, setTagsList] = useState(["tag1", "tag2", "tag3"]);

  const formatCount = () => (count === 0 ? <span>Zero</span> : count);

  let classes = "badge m-2 badge-";
  classes += count === 0 ? "warning" : "primary";

  return (
    <>
      <ul>
        {tagsList.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <span className={classes}>{formatCount()}</span>
      <button className="btn btn-secondary">increment</button>
    </>
  );
};

export default Counter;
