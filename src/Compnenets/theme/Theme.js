import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setTheme } from "../../redux/user_redux/User-Action";
import {selectTheme}from '../../redux/user_redux/User-selector';
import { ModeTheme, ThemeBox } from "../navbar/Navbar.style";


const Theme=()=>{

    const mode=useSelector(selectTheme);
    const dispatch=useDispatch();

    const toggleTheme=useCallback(e=>{
        e.preventDefault();
        mode==='light'?dispatch(setTheme('dark')):dispatch(setTheme('light'));
    },[mode])

    return(

        <ThemeBox onClick={toggleTheme}>
        { mode!=='light'?
         <ModeTheme theme={mode} class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></ModeTheme>
        :<ModeTheme theme={mode}class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></ModeTheme>}
        </ThemeBox>
       
    )
}

export default Theme;