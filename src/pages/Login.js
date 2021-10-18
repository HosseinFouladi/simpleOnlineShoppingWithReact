import InputForm from '../Compnenets/form_input/input.componenet';
import { useState } from "react";
import "../index.css";
import '../Styles/Form.css';
import { Validatin } from "../helpers/Validation";
import {email_error,password_error}from '../helpers/Validation'
import {Goto, saveUser}from '../helpers/Helper';
import {API_URL} from '../helpers/Constants';
import Notif from "../helpers/Notification";
import { Switch,FormControlLabel,ToggleButton,ToggleButtonGroup} from '@mui/material';
import{connect}from 'react-redux';
import { setCurrentUser } from '../redux/user_redux/User-Action';


const Login =(props)=>{

    const[isValid,setIsValid]=useState(false);
    const[emailError,setEmailError]=useState('');
    const[passwordError,setPasswordError]=useState('');
    const [userInfo,setUserInfo]=useState({
        username:'',
        password:''
    })


    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const data=isValid?await saveUser(API_URL.LOGIN,userInfo):null;
            console.log(data);
            if(data.status===201){
                console.log(data.data)
                 props.setCurrentUser(data.data)
                 Goto(`/user/profile/${data.data.id}`,props);
                
            }
               
            
        }catch(err){
            console.log(err)
          Notif('Login_message',`User With This Information Not Exist (${err.message})!`,'info');
        }
     
    }

    //get input data and save in context after validation:
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setIsValid(Validatin(name,value));
        setEmailError(email_error);
        setPasswordError(password_error);
        setUserInfo({
            ...userInfo,
            [name]:value
        })
    }
 
    return(
        <div className="w-full h-full main  flex flex-col items-center justify-center">

        <div className="flex justify-center  center_parent w-4/5  ">
            <div className="w-full h-full mt-4 shadow-lg z-2 border-lg  flex ">
                <div className="bg-white w-1/2 h-full flex  flex-col items-center justify-between px-2">
                    <div className="flex flex-col justify-center items-center h-1/5">
                      <div className="mt-4 ">
                        <svg class="md:w-12 h-12 sm:w-10 h-10 lg:w-14 h-14 text-blue-400 color-red" fill="blue" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                      </div>
                      <h2 className="  uppercase font-sanse font-bold header tracking-wide lg:text-2xl md:text-lg sm:text-md">online marketing</h2>
                      <h4 className=" mt-2 text-gray-500">Log In Our Site</h4>
                    </div>
                    <div className="w-4/5 flex  justify-center h-3/5 flex-shrink items-center">
                        <form className=" flex flex-grow flex-col border-2 items-center border-blue-200 rounded-sm h-full w-4/5 text-center justify-between" onSubmit={async(e)=>{await handleSubmit(e)}} >
                            <div className="bg-blue-700 w-full h-12 text-white pt-2">LOG IN</div>
                            <InputForm className="w-3/4" error={emailError} type="text"placeholder="Email"onChange={handleChange} name="username" inputClass="input_style" spanClass="span_style"/>
                            <InputForm className="w-3/4" error={passwordError} type="password"placeholder="Password"onChange={handleChange} name="password" inputClass="input_style" spanClass="span_style"/>
                            <button  className="bg-green-500 lg:px-4 lg:py-3 md:px-2 md:py-2  w-3/5 lg:mb-4 md:mb-2 hover:opacity-40 transition-all text-white font-bold lg:text-xl md:text-lg sm:text-md rounded-sm shadow-lg" >Login</button>
                            <FormControlLabel control={<Switch defaultChecked />} label="Remember Me" />
                           
                        </form>
                    </div>
                    <div className="">
                        <p className="lg:text-lg md:text-md sm:text-sm">Dont have an account? <a className=" text-green-600 text-xlg border-b-2 border-blue-500" href="/SignUp">sign up</a></p>
                    </div>
                    <div className="h-1/5 flex flex-col justify-end ">
                      <p className="mb-2">hosseinfouladi20@gmail.com</p>
                    </div>
                </div>
                <div className="picture_box h-full w-1/2 px-8 flex flex-col justify-center">
                    <p className="lg:text-2xl md:text-lg sm:text-sm text-gray-500 skew-y-12 font-serif font-bold uppercase  ">online shopping with online marketing </p>
                    <p className="text-gray-500 mt-2">with online marketing u can easily buy your needs for example luxery smart phone,car and .... just sign up and click to add product to your cart.</p>
                </div>
            </div>
        </div>
    </div>
    )
}
const mapDispatchToProps=dispatch=>({
    setCurrentUser:user=>dispatch(setCurrentUser(user))
})
export default connect(null,mapDispatchToProps)(Login);

/*      <div className=" w-3/4">
                                <input  className="input lg:text-lg md:text-md sm:text-sm  text-blue-400 w-full border-b-2 p-2 border-gray-400" stype="email"placeholder="Username"onChange={handleChange} name="username"></input>
                                <span className="text-red-500 lg:text-md md:text-sm sm:text-xs">{emailError}</span>
                            </div>*/ 