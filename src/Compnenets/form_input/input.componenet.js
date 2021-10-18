import "./../../index.css";
import './../../Styles/Form.css';
import { FormGroup } from "@mui/material";
const InputForm=({error,inputClass,spanClass,...otherProps})=>(
    <FormGroup>
        <input className="input lg:text-lg md:text-md sm:text-sm  text-blue-400 w-full border-b-2 p-2 border-gray-400" {...otherProps}></input>
        <span className="text-red-500 lg:text-md md:text-sm sm:text-xs">{error}</span>
    </FormGroup>
)
export default InputForm;