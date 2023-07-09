import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );

  function Counter() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);
    const date = new Date("june 21 2023");
    date.setDate(date.getDate() + count);
    return (
      <>
        <div>
          <button onClick={() => setStep((s) => s - 1)}>
            <strong>-</strong>
          </button>
          <p>Step: {step}</p>
          <button onClick={() => setStep((s) => s + 1)}>
            <strong>+</strong>
          </button>
        </div>
        <div>
          <button onClick={() => setCount((s) => s - step)}>
            <strong>-</strong>
          </button>
          <p>Count: {count}</p>
          <button onClick={() => setCount((s) => s + step)}>
            <strong>+</strong>
          </button>
          <div>
            <p>
              {count} days from today is {date.toDateString()}.
            </p>
          </div>
        </div>
      </>
    );
  }
}
