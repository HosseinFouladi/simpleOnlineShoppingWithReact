import { style } from '@mui/system';
import styled from 'styled-components';
import{colorgraylight, ColorLightBlue, colorprimarydark, colorprimarylight, DarkTextColor, device}from '../../Styles/GlobalStyles';
import { colorOrange } from '../../Styles/GlobalStyles';

export const ModeTheme=styled.svg`
fill:${({theme})=>theme==='light'?'#FFCC00':'#003366'};
color:${({theme})=>theme==='light'?'#FFCC00':'#003366'};
@media ${device.mobileM}{
    width: 1.5rem;
    height: 1.5rem;
 }
 @media ${device.tablet}{
    width: 2rem;
    height: 2rem;
 }
 @media ${device.laptop}{
    width: 3rem;
    height: 3rem;
 }
 @media ${device.laptopL}{
     width: 4rem;
     height: 3.5rem;
 }
`
export const ThemeContainer=styled.div` 
 width: 10%;
 display: flex;
 justify-content: center;
 align-items: center;
 
`
export const ThemeBox=styled.div` 
 width: 100%;
`
export const NavbarContainer=styled.div` 
 display: flex;
 justify-content: start;
 width: 100%;
 height: 100%;
 border-bottom: 1px solid rgb(160, 153, 153);
`
export const LoggedUserInfo=styled.div` 
 width: 32%;
 display: flex;
 justify-content: start;
 align-items: center;
 position: relative ;
   
`
export const Logout=styled.div` 
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    visibility: hidden;
    width: 10rem;
    height: 5rem;
    background-color: ${({theme})=>theme==='light'?'#D3D3D3':'	#000099'};
    color: ${({theme})=>theme==='light'?`${colorOrange}`:'red'};
    transition: all .5s;
    border-radius: 5%;
    left: 0;
    ${LoggedUserInfo}:hover & {
       visibility: visible;
    }

    @media ${device.mobileM} {
       top:2rem;
       width: 5rem;
       height: 2rem;
    }
    @media ${device.tablet} {
       top:3rem;
       width: 6rem;
       height: 2rem;
    }
    @media ${device.laptop} {
       top:3rem;
       width: 6.5rem;
       height: 2.5rem;
    }
    @media ${device.laptopL} {
       top:3.5rem;
       width: 7.5rem;
       height: 3rem;
    }
`
// fire lg:w-10 ml-2 lg:h-10 w-6 h-6 mr-1
export const UserProfilePicture=styled.svg` 
margin-right: 5px;
 @media ${device.mobileM}{
    width: 1.5rem;
    height: 1.5rem;
 }
 @media ${device.tablet}{
    width: 2rem;
    height: 2rem;
 }
 @media ${device.laptop}{
    width: 2.5rem;
    height: 2.5rem;
 }
 @media ${device.laptopL}{
     width: 3rem;
     height: 3rem;
 }
`
//lg:text-lg  md:text-md sm:text-sm text-yellow-700
export const LoggedUserName=styled.span` 
  color:#FF6600;
  font-family:ChrustyRock-ORLA;
  @media ${device.mobileM}{
    font-size: .8rem;
 }
 @media ${device.tablet}{
   font-size: 1rem;
 }
 @media ${device.laptop}{
   font-size: 1.1rem;
 }
 @media ${device.laptopL}{
   font-size: 1.2rem;
 }
`

export const LogoutBottun=styled.button` 
     

     width: 100%;

     font-weight: bold;

     @media ${device.mobileM} {
       font-size: .8rem;
    }
    @media ${device.tablet} {
      font-size: 1rem;
    }
    @media ${device.laptop} {
      font-size: 1.2rem;
    }
    @media ${device.laptopL} {
      font-size: 1.4rem;
    }
`
export const SearchContainer=styled.div` 
 display: flex;
 justify-content: center;
 align-items: center;
 flex-shrink: 1;
 flex-grow: 1;
`
//lg:w-6 lg:h-6 lg:-mr-8 z-10 md:-mr-6 md:w-4 md:h-4 sm:w-3 sm:h-3 text-gray-400 sm:-mr-4 stroke-current stroke-0
export const SearchIcon=styled.svg` 

stroke:${({theme})=>theme==='light'?'#666666':`${DarkTextColor}`};
z-index: 10;
   @media ${device.mobileM} {
      width: 1.2rem;
       height: 1.2rem;
       margin-right: -1.3rem;
    }
    @media ${device.tablet} {
      width: 1.5rem;
       height: 1.5rem;
       margin-right: -1.7rem;
    }
    @media ${device.laptop} {
      width: 1.5rem;
       height: 1.5rem;
       margin-right: -2rem;
    }
    @media ${device.laptopL} {
      width: 2rem;
       height: 2rem;
       margin-right: -2.5rem;
    }
 `
 //outline-none font-sanse lg:text-lg lg:py-4 lg:px-10 md:px-8 sm:px-6 md:text-md md:py-2 sm:py-2 sm:text-xs w-4/5 h-3/5 rounded-lg
 export const SearchInput=styled.input` 
  outline: none;
  background-color: ${({theme})=>theme==='light'?`${colorgraylight}`:`${ColorLightBlue}`};
  width: 80%;
  height: 60%;
  border-radius: 5px;
  color:${({theme})=>theme==='light'?'	#666666':`${DarkTextColor}`};

  @media ${device.mobileM} {
      font-size: .8rem;
      padding: 2px 0;
      padding-left: 1.5rem;
    }
    @media ${device.tablet} {
      font-size: 1rem;
      padding: 3px 0;
      padding-left: 2rem;
    }
    @media ${device.laptop} {
      font-size: 1.2rem;
      padding: 4px 0;
      padding-left: 2.5rem;
    }
    @media ${device.laptopL} {
      font-size: 1.4rem;
      padding: 5px 0;
      padding-left: 3rem;
    }
 `
 export const PopupContainer=styled.div` 
  width:17%;
  display: flex;
  justify-content: center;
  align-items: center;
 `
 export const PopupBox=styled.div` 
  width: 25%;
  height: 80%;
  background-color:${({theme})=>theme==='light'?`${colorgraylight}`:`${ColorLightBlue}`};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
 `
 // bg-gray-200 text-blue-800 w-1/5 h-1/5 rounded-full  flex self-start justify-center items-center lg:text-sm md:text-sm sm:text-xs"
 export const ItemCountIcon=styled.div` 
  background-color:${({theme})=>theme==='light'?`${colorgraylight}`:`${ColorLightBlue}`};
  width:25%;
  height: 25%;
  border-radius: 50%;
  color:blue;
  display: flex;
  justify-content: center;
  justify-self: start;
  align-items: center;
  transform: translate(12px,-4px);
  

  @media ${device.mobileM} {
     font-size: .8rem;
     transform: translate(8px,-3px);
    }
    @media ${device.tablet} {
      font-size: .8rem;
      transform: translate(10px,-3px);
    }
    @media ${device.laptop} {
      font-size: .9rem;
      transform: translate(12px,-4px);
    }
    @media ${device.laptopL} {
      font-size: 1rem;
      transform: translate(14px,-4px);
    }
 `
export const PopupLink=styled.a` 
 width: 80%;
 height: 80%;
`
//" w-fullh-full text-green-500 stroke-current stroke-0 flex items-center justify-center"
export const CartIcon=styled.svg` 
  width: 100%;
  height: 100%;
  color:${colorprimarydark};
  stroke: currentColor;
 `