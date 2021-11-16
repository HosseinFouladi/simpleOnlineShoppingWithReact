import "./../../index.css";
import './../../Styles/Form.css';
import { FormGroup, Input, InputSpan } from "../../pages/login/Login.style";
const InputForm=({theme,error,inputClass,spanClass,...otherProps})=>(
    <FormGroup>
        <Input theme={theme}{...otherProps}></Input>
        <InputSpan>{error}</InputSpan>
    </FormGroup>
)
export default InputForm;