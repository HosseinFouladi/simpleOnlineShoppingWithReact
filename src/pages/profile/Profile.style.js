import styled from 'styled-components';
import { device } from '../../Styles/GlobalStyles';

export const MainBox=styled.div` 
 background-color:${({theme})=>theme==='light'?'rgba(255, 255, 255, 0.877)':'#000033'};
 box-shadow: 2px 2px 2px 2px ;
 border-radius: 1%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 font-family: sans-serif;
 
 @media ${device.mobileM}{
     width: 90%;
     height: 95%;
 }
 @media ${device.tablet}{
     width: 85%;
     height: 90%;
 }
 @media ${device.laptop}{
     width: 80%;
     height: 90%;
 }
 @media ${device.laptopL}{
     width: 75%;
     height: 90%;
 }
`
export const HeaderContainer=styled.div` 
 height:10% !important;
`
export const ProfileContainer=styled.div` 
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
 height: 100%;
 position: relative;

`
//content flex flex-shrink w-full"
export const ContentBox=styled.div` 
 height: 90%;
 display: flex;
 width: 100%;
`
export const SidebarContainer=styled.div` 
 width: 28%;
`
export const ProductContainer=styled.div` 
 width: 72%;
 flex-shrink: 1;
`