import { useState, useEffect, useMemo, useCallback } from "react";

import IconButton from "../UI/IconButton.jsx";
import MinusIcon from "../UI/Icons/MinusIcon.jsx";
import PlusIcon from "../UI/Icons/PlusIcon.jsx";
import CounterOutput from "./CounterOutput.jsx";
import { log } from "../../log.js";

function isPrime(number) {
  log(`Calculating if is ${number} prime number`, 2, "other");
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

export default function Counter({ count }) {
  log("<Counter /> rendered", 1);
  const countIsPrime = isPrime(count);
  const [counter, setCounter] = useState(0);
  // console.log("counter", counter);

  const initialCount = useMemo(() => count, [count]);

  useEffect(() => {
    setCounter(count);
  }, [count]);

  const handleChange = useCallback((event) => {
    const change = event.target.textContent;
    if (change === "Decrement") {
      setCounter((prevCounter) => prevCounter - 1);
    } else {
      setCounter((prevCounter) => prevCounter + 1);
    }
  }, []);

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{" "}
        <strong>is {countIsPrime ? "a" : "not a"}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleChange}>
          Decrement
        </IconButton>
        <CounterOutput value={counter} />
        <IconButton icon={PlusIcon} onClick={handleChange}>
          Increment
        </IconButton>
      </p>
    </section>
  );
}
