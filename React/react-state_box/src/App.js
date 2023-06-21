import "./styles.css";
import { useState } from "react";

export default function App() {
  // let isActive = false;
  const [active, setActive] = useState(true);

  function handleClick() {
    // Check that the value changes correctly.
    setActive(!active); //because setActive is set as opposite with "!"

    console.log(active);
  }

  return (
    <main>
      <div className={`box ${active ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {active ? "Activate" : "Deactivate"}
      </button>
    </main>
  );
}

const [age,setAge]=useState(0)

function ageing(){
set
}