const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};
const TemperatureInput = (props) => {

  const handleChange = (e) => {
    props.onTemperatureChange(e.target.value);
  };

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[props.scale]}</legend>
      <input value={props.temperature} onChange={handleChange} />
    </fieldset>
  );
};

export default TemperatureInput;
