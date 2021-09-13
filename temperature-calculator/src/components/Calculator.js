import {useState} from 'react';
import BoilingVerdict from "./BoilingVerdict";

const Calculator = props => {

    const [temperature, setTemperature] = useState('');

    const handleChange = e =>{
        setTemperature(e.target.value);
    }

    return <fieldset>
        <legend>Enter temperature in celsius:</legend>
        <input value={temperature} onChange={handleChange}/>
        <BoilingVerdict celsius={parseFloat(temperature)}></BoilingVerdict>
    </fieldset>
}

export default Calculator;