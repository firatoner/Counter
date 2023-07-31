import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const clk = () => {
    if (count < 10) setCount(count + 1);
    else setCount(1303);
  };

  return (
    <div className="app">
      <p>Baby i miss u &lt;3</p>
      <button className="btn" onClick={clk}>
        Click count is {count}
      </button>
    </div>
  );
}

export default App;
