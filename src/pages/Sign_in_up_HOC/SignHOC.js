import InputForm from '../../Compnenets/form_input/input.componenet';
import {useState } from "react";
import '../../Styles/Form.css';
import { Validatin } from "../../helpers/Validation";
import {email_error,password_error}from '../../helpers/Validation'
import {Goto, saveUser}from '../../helpers/Helper';
import Notif from "../../helpers/Notification";
import { setCurrentUser} from '../../redux/user_redux/User-Action';
import { AppName, Form, FormContainer, FormTitle, GmailAddress, GmailContainer, HeaderContainer, LoginBox, LoginButton, LoginContainer, LoginFormBox, LoginNested, Logo, LogoContainer, PictureBox, PictureParagraph, PictureTitle, SignUpSuggestion, ThemeContainer, Title } from '../login/Login.style';
import {  useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectTheme } from '../../redux/user_redux/User-selector';
import Theme from '../../Compnenets/theme/Theme';
import React from 'react';



const SignLog=(props)=>{

  const{type,url}=props;
  const dispatch=useDispatch();
  const theme=useSelector(selectTheme);
    
    const[isValid,setIsValid]=useState(false);
    const[emailError,setEmailError]=useState('');
    const[passwordError,setPasswordError]=useState('');
    const [userInfo,setUserInfo]=useState({
        username:'',
        password:'',
        fullName:''
    })
   
   
       const handleSubmit=(e)=>{
           e.preventDefault();
           const loginOrSugnup=async()=>{
               try{
                 if(type==='login'){
                   const data=isValid?await saveUser(url,{username:userInfo.username,password:userInfo.password}):null;

                  if(data.status===201){
                        dispatch(setCurrentUser(data.data));
                        Goto(`/user/profile/${data.data.id}`,props);
                   }
                 } else{
                   const data=isValid?await saveUser(url,userInfo):null;
                   data.status===200?Notif("Sign Up Message!","You Signed Up Successfully!"):Notif("Sign up","Error in Request")
                   Goto('/',props);
                 }                 
               }catch(err){
                   console.log(err)
                 Notif(`${type}_message`,`User With This Information Not Exist (${err.message})!`,'info');
               }
           }
           loginOrSugnup();
       };
   
       //get input data and save in context after validation:
     const  handleChange=(e)=>{
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
         
           <LoginContainer>
               <ThemeContainer>
                 <Theme/>
               </ThemeContainer>
           <LoginBox>
               <LoginNested>
                   <LoginFormBox theme={theme}>
                       <HeaderContainer>
                         <LogoContainer>
                           <Logo theme={theme} fill="blue" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></Logo>
                         </LogoContainer>
                         <AppName theme={theme}> online marketing</AppName>
                         <Title theme={theme}>{type==='login'? 'Log In Our Site':'Sign Up In Our Site'}</Title>
                       </HeaderContainer>
                       <FormContainer>
                           <Form >
                               <FormTitle>{type==='lgin'?'LOG IN':'SIGN UP'}</FormTitle>
                               {type==='signup'&&<InputForm theme={theme}  type="text"placeholder="FullName"onChange={handleChange} name="fullName" inputClass="input_style" spanClass="span_style"/>}
                               <InputForm theme={theme}  error={emailError} type="email"placeholder="Email"onChange={handleChange} name="username" inputClass="input_style" spanClass="span_style"/>
                               <InputForm theme={theme} error={passwordError} type="password"placeholder="Password"onChange={handleChange} name="password" inputClass="input_style" spanClass="span_style"/>
                               <LoginButton theme={theme} onClick={async(e)=>{await handleSubmit(e)}} className="bg-green-500 lg:px-4 lg:py-3 md:px-2 md:py-2  w-3/5 lg:mb-4 md:mb-2 hover:opacity-40 transition-all text-white font-bold lg:text-xl md:text-lg sm:text-md rounded-sm shadow-lg" >{type==='login'?'Login':'Signup'}</LoginButton>
                           </Form>
                       </FormContainer>
               
                           <SignUpSuggestion>{type==='login'?'Dont have an account?':'Already Logged in?'} <a className=" text-green-600 text-xlg border-b-2 border-blue-500" href={type==='signup'?'/':"/SignUp"}>{type==='signup'?'log in':'sign up'}</a></SignUpSuggestion>
                     
                       <GmailContainer>
                         <GmailAddress>hosseinfouladi20@gmail.com</GmailAddress>
                       </GmailContainer>
                   </LoginFormBox>
                   <PictureBox imageUrl={'./../images/Online-Marketing.jpg'}>
                       <PictureTitle>online shopping with online marketing </PictureTitle>
                       <PictureParagraph>with online marketing u can easily buy your needs for example luxery smart phone,car and .... just sign up and click to add product to your cart.</PictureParagraph>
                   </PictureBox>
               </LoginNested>
            
           </LoginBox>
          
       </LoginContainer>
     
       )
       }
    



export default SignLog;

//<LoginButton theme={theme} onClick={async(e)=>{await handleSubmit(e)}} className="bg-green-500 lg:px-4 lg:py-3 md:px-2 md:py-2  w-3/5 lg:mb-4 md:mb-2 hover:opacity-40 transition-all text-white font-bold lg:text-xl md:text-lg sm:text-md rounded-sm shadow-lg" >{type==='login'?'Login':'Signup'}</LoginButton>