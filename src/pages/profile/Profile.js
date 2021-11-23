import "../../index.css";
import '../../Styles/Form.css';
import Sidebar from '../../Compnenets/sidebar/Sidebar';
import Product from '../../Compnenets/Product/Product';
import Navbar from '../../Compnenets/navbar/Navbar';
import { lazy, useEffect } from 'react';
import { selectCurrentUser, selectId, selectTheme } from '../../redux/user_redux/User-selector';
import {fetchProductsStart} from '../../redux/product-redux/Product-Action';
import { setProductCount } from '../../redux/user_redux/User-Action';
import { selectLoading } from "../../redux/product-redux/Product-selector";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Suspense } from "react";
import { ContentBox, MainBox, ProductContainer, SidebarContainer } from "./Profile.style";
import { HeaderContainer,ProfileContainer } from "./Profile.style";
const Popup=lazy(()=>import('../../Compnenets/popup/Popup'));

const Profile=()=>{

     const theme=useSelector(selectTheme);
     const currentUser=useSelector(selectCurrentUser);
     const loading=useSelector(selectLoading);

     const dispatch=useDispatch();
      
     useEffect(()=>{
        dispatch(setProductCount());
     },[currentUser])


    useEffect(()=>{

      dispatch(fetchProductsStart());

    },[])

    return(
        <ProfileContainer>
            <Suspense fallback={<div>...Loading</div>}>
                <Popup/>
            </Suspense>
            <MainBox theme={theme}>
                <HeaderContainer>
                    <Navbar></Navbar>
                </HeaderContainer>

                <ContentBox>
                    <SidebarContainer>
                         <Sidebar></Sidebar>
                    </SidebarContainer>
                    <ProductContainer>
                      {loading?<h1>isLoading....</h1>:<Product/>}
                    </ProductContainer>
                </ContentBox>
            </MainBox>
        </ProfileContainer>
    )
}


export default Profile;