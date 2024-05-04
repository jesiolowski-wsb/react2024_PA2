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

  const handleIncrement = (counter) => {
    const countersUpdated = [...counters];
    const index = countersUpdated.indexOf(counter);
    countersUpdated[index] = { ...counter };
    countersUpdated[index].value++;
    setCounters(countersUpdated);
  };

  const handleReset = () => {
    const countersReset = counters.map((c) => {
      c.value = 0;
      return c;
    });

    setCounters(countersReset);
  };

  const handleDecrement = (counter) => {
    const countersUpdated = [...counters];
    const index = countersUpdated.indexOf(counter);
    countersUpdated[index] = { ...counter };
    countersUpdated[index].value--;
    setCounters(countersUpdated);
  };

  return (
    <>
      <button onClick={handleReset} className="btn btn-sm btn-primary m-2">
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
    </>
  );
};

export default Counters;
