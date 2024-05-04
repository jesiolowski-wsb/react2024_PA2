import React, { useState } from "react";
import Counter from "./counter";

const Counters = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 4 },
    { id: 3, value: 8 },
    { id: 4, value: 12 },
  ]);

  return (
    <>
      {counters.map((counter) => (
        <Counter key={counter.id} value={counter.value} />
      ))}
    </>
  );
};

export default Counters;
