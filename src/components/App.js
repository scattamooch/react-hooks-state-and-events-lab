import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [background, setBackground] = useState(false);
    console.log(background);
  // 1) Declare state variable and function = useState(condition) --> 2) Add event listener to appropraite button, set to invoke appropriate function --> 3) write function to change useState 
  // 4) make a ternary or some other conditional for comparison/execution
  const appClass = background ? "App dark" : "App light"

  function handleClick() {
    setBackground(!background);
  }
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
