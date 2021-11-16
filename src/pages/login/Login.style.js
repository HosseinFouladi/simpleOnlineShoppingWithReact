
import styled,{css} from "styled-components";
import { device } from "../../Styles/GlobalStyles";
import img from '../../images/Online-Marketing.jpg';

const test=css`
position: relative;
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const flexCenter=css`
 display: flex;
 justify-content: center;
`
export const LoginContainer=styled.div`
  ${test};
`
export const ThemeContainer=styled.div` 
 position: absolute;
 display: flex;
 justify-content: center;
 top:1rem;
 right: 1rem;
`
export const LoginBox=styled.div`
  ${flexCenter};
  margin: 0 auto;
  height: 80%;
  width: 80%;
`

export const LoginNested=styled.div`
 display: flex;
 width:100% ;
 height: 100%;
 box-shadow: 0 1rem 1rem 0;
 z-index: 2;
 border: 20%;

 @media ${device.mobileM}{
   box-shadow: 0 .5rem .5rem 0 transparent;
 }
 @media ${device.tablet}{
  box-shadow: 0 .7rem .7rem 0 transparent;
 }
 @media ${device.laptop}{
   box-shadow: 0 .1rem .1rem 0 transparent;
 }
 @media ${device.laptopL}{
  box-shadow: 0 1.2rem 1.2rem 0 transparent;
 }
`
export const LoginFormBox=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding:0 2rem;
  background-color:${({theme})=>theme==='light'?'#FFFFF0':'#000033'} ;
  width: 50%;
  height: 100%;

  @media ${device.mobileM}{
   padding: 0 1rem;
   width:100%;
 }
 @media ${device.tablet}{
  padding: 0 2rem;
  width: 50%;
 }
 @media ${device.laptop}{
   padding: 0 3rem;
   width: 50%;
 }
 @media ${device.laptopL}{
  padding: 0 4rem;
  width: 50%;
 }
`
export const HeaderContainer=styled.div`
 ${flexCenter};
 flex-direction: column;
 align-items: center;
 height: 30%;
`
export const LogoContainer=styled.div` 
  @media ${device.mobileM}{
   margin-top:.5rem
 }
 @media ${device.tablet}{
  margin-top: 1rem
 }
 @media ${device.laptop}{
   margin-top: 1.5rem
 }
 @media ${device.laptopL}{
  margin-top: 2rem
 }
`

export const Logo=styled.svg` 
  @media ${device.mobileM}{
    width: 1rem;
    height: 1rem;
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
    height: 4rem;
 }

 fill:${({theme})=>theme==='light'?'#BDB76B':'blue'};
`
export const AppName=styled.h2`
 text-transform: uppercase;
 font-family: sanse;
 font-weight: 500;
 background-image: linear-gradient(to right,rgb(8, 241, 190),rgb(8, 140, 201));
    -webkit-background-clip: text;
    color: transparent;

  @media ${device.mobileM}{
    font-size: .5rem;
 }
 @media ${device.tablet}{
  font-size: 1rem;
 }
 @media ${device.laptop}{
  font-size: 1.5rem;
 }
 @media ${device.laptopL}{
  font-size: 2rem;
 }  
`
//mt-2 text-gray-500
export const Title=styled.h4`
  @media ${device.mobileM}{
   font-size: large.5rem;
   margin-top: .2rem;
 }
 @media ${device.tablet}{
  font-size: 1rem;
  
 }
 @media ${device.laptop}{
  font-size: 1.2rem;
 }
 @media ${device.laptopL}{
  font-size: 2rem;
 } 
 color:${({theme})=>theme==='light'?'black':'white'};
`
export const FormContainer=styled.div` 
 ${flexCenter};
 width: 80%;
 height: 55%;
 flex-shrink: 1;
 align-items: center;
`
export const Form=styled.div` 
 height: 100%;
 width:80%;
 text-align: center;
 display: flex;
 justify-content: space-between;
 flex-direction: column;
 align-items: center;
 border-radius: 2px;
 

 @media ${device.mobileM}{
  border: .1rem solid blue;
  box-shadow: .5px .5px .5px .5px gray;
 }
 @media ${device.tablet}{
  border: .1rem solid blue;
  box-shadow: .5px .5px .5px .5px gray;
 }
 @media ${device.laptop}{
  border: .1rem solid blue;
  box-shadow: 1px 1px 1px 1px gray;
 }
 @media ${device.laptopL}{
  border: 1.2px solid blue;
  box-shadow: 1px 1px 1px 1px gray;
 } 
`
//"bg-blue-700 w-full h-12 text-white pt-2"
export const FormTitle=styled.div`

@media ${device.mobileM}{
  padding-top: .2rem;
  font-size: .6rem;
  height: 1rem;
 }
 @media ${device.tablet}{
  padding-top: .4rem;
  font-size: .7rem;
  height: 1.5rem;
 }
 @media ${device.laptop}{
  padding-top: .3rem;
  font-size: .8rem;
  height: 1.8rem;
 }
 @media ${device.laptopL}{
  padding-top: .4rem;
  font-size: 1rem;
  height: 2.2rem;
 } 
 width: 100%;
 color: white;
 background-color: blue;
`

export const Input=styled.input` 
 font-family: sans-serif;
 width: 100%;
 background-color: ${({theme})=>theme==='light'?'	#87CEFA':'#7B68EE'};
 border-radius: 5px;
    &:focus{
       outline: none;
    }
 @media ${device.mobileM}{
   font-size: .8rem;
   border-bottom: 1px solid gray;
   padding: 2px;
   &:valid{
       border-bottom: ${({theme})=>theme==='light'?'1px solid green':'1px solid blue'}
    }
 }
 @media ${device.tablet}{
  font-size:1rem;
  border-bottom: 2px solid gray;
   padding: 3px;
   &:valid{
       border-bottom: ${({theme})=>theme==='light'?'2px solid green':'2px solid blue'};
    }
 }
 @media ${device.laptop}{
  font-size: 1.2rem;
  border-bottom: 1px solid gray;
   padding: 4px;
   &:valid{
       border-bottom: ${({theme})=>theme==='light'?'2px solid green':'2px solid blue'}
    }
 }
 @media ${device.laptopL}{
  font-size: 1.4;
  border-bottom: 1px solid gray;
   padding: .5rem;
   &:valid{
       border-bottom: ${({theme})=>theme==='light'?'3px solid green':'3px solid blue'}
    }
 }
`
export const InputSpan=styled.span` 
 color: red;
 font-family: sans-serif;

 @media ${device.mobileM}{
   font-size: .4rem;
 }
 @media ${device.tablet}{
  font-size: .6rem;
 }
 @media ${device.laptop}{
  font-size:.8rem;
 }
 @media ${device.laptopL}{
  font-size: 1rem;
  }
`
  export const FormGroup=styled.div` 
   ${flexCenter}
   flex-direction:column;
   align-items: center;
   width: 70%;
  `  
  export const LoginButton=styled.div` 
  width: 60%;
  transition:all .3s;
  color:${({theme})=>theme==='light'?'blue':'white'};
  background-color: ${({theme})=>theme==='light'?'#87CEFA':'blue'};
  font-weight: 500;
  box-shadow: 0 2px 2px 0 gray;
  
  
  &:hover{
    transform: translateY(-5px);
    cursor: pointer;
  }
  @media ${device.mobileM}{
   padding: 2px 2px;
   margin-bottom: .5rem;
   font-size: .5rem;
   border-radius: 3px;
    }
  @media ${device.tablet}{
    padding: 3px 3px;
    margin-bottom: .5rem;
    font-size: .8rem;
    border-radius: 4px;
    }
   @media ${device.laptop}{
    padding: 5px 5px;
    margin-bottom: .8rem;
    font-size: 1.1rem;
    border-radius: 5px;
    }
  @media ${device.laptopL}{
    padding: 5px 5px;
    margin-bottom: 1rem;
    font-size: 1.4rem;
    border-radius: 5px;
    }
  `
  //lg:text-lg md:text-md sm:text-sm
  export const SignUpSuggestion=styled.p` 
  
  font-family: sans-serif;

  @media ${device.mobileM}{
   font-size: .8rem;
   margin-top: .7rem;
 }
 @media ${device.tablet}{
  font-size: 1rem;
  margin-top: .8rem;
 }
 @media ${device.laptop}{
  font-size:1.2rem;
  margin-top: 1rem;
 }
 @media ${device.laptopL}{
  font-size: 1.4rem;
  margin-top: 1rem;
  }
  `
  //h-1/5 flex flex-col justify-end
  export const GmailContainer=styled.div` 
   display: flex;
   flex-direction: column;
   justify-content: end;
   height: 5%;
  `
  export const GmailAddress=styled.p` 
  @media ${device.mobileM}{
   font-size: .6rem;
   margin-bottom:5px;
  }
  @media ${device.tablet}{
  font-size: .8rem;
  margin-bottom:5px;
  }
  @media ${device.laptop}{
  font-size:1rem;
  margin-bottom:5px;
  }
  @media ${device.laptopL}{
  font-size: 1.2rem;
  margin-bottom:5px;
 }
  `
//picture_box h-full w-1/2 px-8 flex flex-col justify-center
export const PictureBox=styled.div` 
    background-size: cover;
    background-blend-mode: screen;
    background-image: linear-gradient(to right top,rgb(8, 241, 230),rgb(11, 228, 228)),url(${img});
    height: 100%;
    width: 50%;
    padding: 0 4rem;
    ${flexCenter};
    flex-direction: column;
    @media ${device.mobileM}{
    display: none;
  }
  @media ${device.tablet}{
    display: flex;
 }
 @media ${device.laptop}{
  display: flex;
 }
 @media ${device.laptopL}{
  display: flex;
 }
`
export const PictureTitle=styled.p`
  color:'#1E90FF';
  font-family: sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  @media ${device.mobileM}{
   font-size: .9rem;
  }
  @media ${device.tablet}{
  font-size: 1rem;
  }
  @media ${device.laptop}{
  font-size:1.2rem;
  }
  @media ${device.laptopL}{
  font-size: 1.5rem;
 }
`
export const PictureParagraph=styled.p` 
color: gray;
margin-top: .7rem;
@media ${device.mobileM}{
   font-size: .6rem;
  }
  @media ${device.tablet}{
  font-size: .8rem;
  }
  @media ${device.laptop}{
  font-size:.8rem;
  }
  @media ${device.laptopL}{
  font-size: 1rem;
 }
`