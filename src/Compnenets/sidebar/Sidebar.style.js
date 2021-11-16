import styled from 'styled-components';
import { colorgraylight, ColorLightBlue, colorOrange } from '../../Styles/GlobalStyles';
import { device } from '../../Styles/GlobalStyles';

// w-full h-full transition-all  border-b-2 border-gray-300 flex hover:bg-gray-200 bg-gray-200":" w-full h-full transition-all bg-gray-100 border-b-2 border-gray-300 flex hover:bg-gray-200"
export const ProductListItem=styled.ul` 
 
 background-color: ${({theme,itemid,currentid})=>theme==='light'?itemid===currentid?'#CCCCCC':'#f7f7f7':itemid===currentid?'#330099':'#000033'};
 width: 100%;
 height: 100%;
 transition: all .2s;
 border-bottom: ${({theme})=>theme==='light'?'1.5px solid gray':`1.5px solid ${ColorLightBlue}`};
 border-right: ${({theme})=>theme==='light'?'1.5px solid gray':`1.5px solid ${ColorLightBlue}`};
 display: flex;
 &:hover{
     background-color: ${({theme})=>theme==='light'?'#CCCCCC':'#330099'};
 }
 padding-left: 5px;
`
export const ProductTitle=styled.h4` 
text-transform: uppercase;
font-weight: 700;
color:${colorOrange};
 @media ${device.mobileM}{
    font-size:.7rem;
 }
 @media ${device.tablet}{
    font-size:.8rem;
 }
 @media ${device.laptop}{
    font-size:1rem;
 }
 @media ${device.laptopL}{
    font-size:1.2rem;
 }
`
//h-1/6 bg-gray-100 w-full  flex items-center justify-center"
export const PaginationContainer=styled.div` 
 height: 17%;
 width: 100%;
 background-color: ${({theme})=>theme==='light'?'#f7f7f7':'#000033'};
 border-right: ${({theme})=>theme==='light'?'1.5px solid gray':`1.5px solid ${ColorLightBlue}`};
 display: flex;
 justify-content: center;
 align-items: center;
`