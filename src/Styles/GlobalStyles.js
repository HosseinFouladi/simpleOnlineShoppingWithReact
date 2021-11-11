import{styled,createGlobalStyle}from 'styled-components';

export const Container=createGlobalStyle`
body{
    color:${({theme})=>theme.color};
    background:${({theme})=>theme.background} !important;
}
`
export const lightTheme={
    color:'#fff',
    background:'black'
}
export const darkTheme={
    color:'black',
    background:'#fff'
}
