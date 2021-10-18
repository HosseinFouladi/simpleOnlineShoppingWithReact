import "../index.css";
import '../Styles/Form.css';
import Sidebar from '../Compnenets/Product/Sidebar';
import Product from '../Compnenets/Product/Product';
import Navbar from '../Compnenets/Product/Navbar';
import { useEffect, useState } from 'react';
import { API_URL, USER_ID } from '../helpers/Constants';
import { getData } from '../helpers/Helper';
import Popup from '../Compnenets/Product/Popup';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser, selectId } from '../redux/user_redux/User-selector';
import { setProducts } from '../redux/product-redux/Product-Action';
import { setProductCount } from '../redux/user_redux/User-Action';
const Profile=(props)=>{

     const[isLoad,setIsLoad]=useState(false);
     const{setProductCount,currentUser}=props;
  
     useEffect(()=>{
        setProductCount();
     },[currentUser])

    useEffect(()=>{

        const getProducts=async()=>{
            try{
                const product_list=await getData(API_URL.PRODUCT_LIST);
                console.log(product_list)
                props.setProduct(product_list.data);
                setIsLoad(true)
            }catch(err){
                console.log(err)
            }
        }

        getProducts();

    },[])

    return(
        <div className="relative w-full h-full main flex justify-center items-center" >
            <Popup></Popup>
            <div className='main_box w-3/4  shadow-lg z-10 rounded-md flex flex-col justify-start '>
                <div className="menu ">
                    <Navbar></Navbar>
                </div>

                <div className=" content flex flex-shrink w-full">
                    <div className="sidebar ">
                        {isLoad&& <Sidebar></Sidebar>}
                    </div>
                    <div className=" product flex-shrink ">
                      <Product></Product>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps=createStructuredSelector({
    id:selectId,
    currentUser:selectCurrentUser
})

const mapDispatchToProps=dispatch=>({
    setProduct:product=>dispatch(setProducts(product)),
    setProductCount:()=>dispatch(setProductCount())
})

export default connect(mapStateToProps,mapDispatchToProps)(Profile);