import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(6_000_000_000);
  return (
    <>
      <div >Hello world</div>
      <label>Select a number</label>
      <input className="w-10/12"
        onChange={(e) => setNumber(Number(e.target.value))}
        type="range"
        min={6_000_000_000}
        max={9_999_999_999}
      />
      <div>{number}</div>
    </>
  );
}

export default App;
