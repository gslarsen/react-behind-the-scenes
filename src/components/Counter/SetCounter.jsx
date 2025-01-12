import { useRef } from "react";

import { log } from "../../log.js";

const SetCounter = ({ setCount }) => {
  log("<SetCounter /> rendered", 1);
  const countInputRef = useRef();

  function handleSetClick() {
    setCount(parseInt(countInputRef.current.value || 0));
  }

  return (
    <section id="configure-counter">
      <h2>Set Counter</h2>
      <input ref={countInputRef} type="number" placeholder={0} />
      <button onClick={handleSetClick}>Set</button>
    </section>
  );
};

export default SetCounter;
