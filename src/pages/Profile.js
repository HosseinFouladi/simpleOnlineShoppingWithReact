import "../index.css";
import '../Styles/Form.css';
import Sidebar from '../Compnenets/Product/Sidebar';
import Product from '../Compnenets/Product/Product';
import Navbar from '../Compnenets/Product/Navbar';
import { lazy, useEffect } from 'react';
import { selectCurrentUser, selectId } from '../redux/user_redux/User-selector';
import {fetchProductsStart} from '../redux/product-redux/Product-Action';
import { setProductCount } from '../redux/user_redux/User-Action';
import { selectLoading } from "../redux/product-redux/Product-selector";
import WithSpinner from "../Compnenets/Product/WithSpinner";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Suspense } from "react";
const Popup=lazy(()=>import('../Compnenets/Product/Popup'));

const Profile=()=>{

     const id=useSelector(selectId);
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
        <div className="relative w-full h-full main flex justify-center items-center" >
            <Suspense fallback={<div>...Loading</div>}>
                <Popup/>
            </Suspense>
            <div className='main_box w-3/4  shadow-lg z-10 rounded-md flex flex-col justify-start '>
                <div className="menu ">
                    <Navbar></Navbar>
                </div>

                <div className=" content flex flex-shrink w-full">
                    <div className="sidebar ">
                         <Sidebar></Sidebar>
                    </div>
                    <div className=" product flex-shrink ">
                      {loading?<h1>isLoading....</h1>:<Product/>}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Profile;