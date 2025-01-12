import { useState } from "react";

import SetCounter from "./components/Counter/SetCounter.jsx";
import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";

function App() {
  const [chosenCount, setChosenCount] = useState(0);
  log("<App /> rendered");

  const setCounter = (count) => {
    setChosenCount(count);
  };

  return (
    <>
      <Header />
      <main>
        <SetCounter setCount={setCounter} />
        <Counter count={chosenCount} />
      </main>
    </>
  );
}

export default App;
