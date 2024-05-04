import React, { useState } from "react";
import Counter from "./counter";

const Counters = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 4 },
    { id: 3, value: 8 },
    { id: 4, value: 12 },
  ]);

  const handleDelete = (counterId) => {
    setCounters(counters.filter((c) => c.id !== counterId));
  };

  return (
    <>
      {counters.map((counter) => (
        <Counter
          id={counter.id}
          key={counter.id}
          value={counter.value}
          onDelete={handleDelete}
        />
      ))}
    </>
  );
};

export default Counters;
