import './../../Styles/Form.css';
import './../../index.css'
import{connect, useSelector}from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { selectName, selectProductCount, selectTheme } from '../../redux/user_redux/User-selector';
import { setSearchProduct } from '../../redux/product-redux/Product-Action';
import { setLogout, setTogglePopup } from '../../redux/user_redux/User-Action';
import { useHistory } from 'react-router-dom';
import { useCallback } from 'react';
import Theme from '../theme/Theme';
import { LoggedUserInfo, PopupBox,LoggedUserName, Logout, LogoutBottun, NavbarContainer, PopupContainer, SearchContainer, SearchIcon, SearchInput, ThemeContainer, UserProfilePicture, ItemCountIcon, PopupLink, CartIcon } from './Navbar.style';
const Navbar=(props)=>{

    const {setSearch,productCount,fullName,setPopup,setLogout}=props;
    const history=useHistory();
    const theme=useSelector(selectTheme);

    const handleSearch=useCallback(e=>{
       const {value}=e.target;
       setSearch(value);
    },[setSearch]);

    const handlePopup=useCallback((e)=>{
        e.preventDefault();
        setPopup();
    },[setPopup]);

    const handleLogout=useCallback(e=>{
        e.preventDefault();
        history.push("/");
        setLogout();
    },[setLogout])

    return(
        <NavbarContainer>
             <LoggedUserInfo>
             <Logout theme={theme}>
                  <LogoutBottun onClick={handleLogout}>Logut</LogoutBottun>
              </Logout>
              <UserProfilePicture fill="none" stroke="gray" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></UserProfilePicture>
              <LoggedUserName>{fullName}</LoggedUserName>
           
             </LoggedUserInfo>
            <SearchContainer>
                <SearchIcon fill="none"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></SearchIcon>
                <SearchInput theme={theme} type="search" placeholder="Search Product ..."  onChange={handleSearch}></SearchInput>
            </SearchContainer>
            <PopupContainer >
                <PopupBox theme={theme}>
                <ItemCountIcon theme={theme} >{productCount}</ItemCountIcon>
                <PopupLink onClick={handlePopup} >
                <CartIcon  fill="none"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </CartIcon>
                </PopupLink>
                 
                </PopupBox>
            </PopupContainer>
            <ThemeContainer>
              <Theme></Theme>
            </ThemeContainer>
        </NavbarContainer>
        
    )
}

const mapStateToProps=createStructuredSelector({
    productCount:selectProductCount,
    fullName:selectName,

})

const mapDispatchToProps=dispatch=>({
    setSearch:char=>dispatch(setSearchProduct(char)),
    setPopup:()=>dispatch(setTogglePopup()),
    setLogout:()=>dispatch(setLogout())
})
export default connect(mapStateToProps,mapDispatchToProps) (Navbar);
