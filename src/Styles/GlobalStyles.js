import{styled,createGlobalStyle}from 'styled-components';

export const colorprimary='#55c57a';
export const colorprimarylight='#7ed56f';
export const colorprimarydark='#28b485';
export const colorsecondarylight='#ffb900';
export const colorsecondarydark='#ff7730';
export const colortertiarylight='#2998ff';
export const colortertiarydark='#5643fa';
export const colorgraylight='#f7f7f7';
export const colorOrange='#FFA500';
export const ColorLightBlue='#ADD8E6';
export const DarkTextColor='#000033';

export const Container=createGlobalStyle`
body{
    color:${({theme})=>theme.color};
    background:${({theme})=>theme.background} !important;
    font-family:ChrustyRock-ORLA;
    font-size: 62.5%;
    
}
`
export const lightTheme={
    color:'#000000',
    background:'#EEEEEE'
}
export const darkTheme={
    color:'	#EEEEEE',
    background:'#000000'
}

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }

export const device = {
    mobileM: `(min-width: ${size.mobileM})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
  };
