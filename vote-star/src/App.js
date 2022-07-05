import "./App.css";
import Card from "./Card";
import Message from "./Message";
import { useState } from "react";

function App() {
  const [active, setActive] = useState(-1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleActive(e) {
    setActive(Number(e.target.innerText));
  }

  function handleSubmit() {
    if (active !== -1) setIsSubmitted(true);
  }

  return (
    <div className="container">
      {!isSubmitted && (
        <Card
          active={active}
          onActiveChange={handleActive}
          doSubmit={handleSubmit}
        />
      )}
      {isSubmitted && <Message active={active} />}
      <div className="last">
        Clone by
        <a
          href="https://www.frontendmentor.io/solutions/interactive-rating-component-P0k6BhHXi4"
          target="_blank"
        >
          frontendmentor
        </a>
        Talha Eroglu
      </div>
    </div>
  );
}

export default App;
