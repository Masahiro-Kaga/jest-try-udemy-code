import { useState } from "react";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [isBlue, setIsBlue] = useState(true);
  const colorCHangeHandler = () => {
    setIsBlue(!isBlue);
  };
  const [disabled, setDisabled] = useState(false);
  const bgChangeHandler = () => {
    setDisabled(!disabled);
  };

  // const niceButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  console.log(disabled);

  return (
    <div>
      <p>learn react</p>
      <a href="http://reactjs.org">click here</a>
      {/* <button style={{backgroundColor:'blue'}}></button> */}
      <button
        style={
          isBlue ? { backgroundColor: "blue" } : { backgroundColor: "red" }
        }
        onClick={colorCHangeHandler}
        disabled={disabled}
      >
        {isBlue ? "Change to Red" : "Change to Blue"}
      </button>
      <p>checkme</p>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      ></input>
      <label htmlFor="disable-button-checkbox">Disable button</label>
      <button
        disabled={!disabled}
        style={
          disabled ? { backgroundColor: "gray" } : { backgroundColor: "red" }
        }
        onClick={bgChangeHandler}
      >
        Just button
      </button>
    </div>
  );
}

export default App;
