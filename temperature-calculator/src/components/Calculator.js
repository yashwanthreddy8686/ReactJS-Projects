import { useState } from "react";
import TemperatureInput from "./TemperatureInput";

const Calculator = (props) => {
  const [enteredTemperature, setEnteredTemperature] = useState("");
  const [scale, setScale] = useState("c");

  const celsius = scale === 'f' ? tryConvert(enteredTemperature,toCelsius) : enteredTemperature;
  const fahrenheit = scale === 'c' ? tryConvert(enteredTemperature, toFahrenheit): enteredTemperature;

  function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  const handleCelsiusInput = (temp) => {
    setEnteredTemperature(temp);
    setScale('c');
  };

  const handleFahrenheitInput = (temp) => {
    setEnteredTemperature(temp);
    setScale('f');
  };

  return (
    <div>
      <TemperatureInput
        temperature={celsius}
        scale="c"
        onTemperatureChange={handleCelsiusInput}
      />
      <TemperatureInput
        temperature={fahrenheit}
        scale="f"
        onTemperatureChange={handleFahrenheitInput}
      />
    </div>
  );
};

export default Calculator;
