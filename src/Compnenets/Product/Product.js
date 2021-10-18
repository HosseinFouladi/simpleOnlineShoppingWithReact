import './../../Styles/Form.css';
import './../../index.css';
import {  saveUser } from '../../helpers/Helper';
import { API_URL } from '../../helpers/Constants';
import Notif from '../../helpers/Notification';
import {connect}from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentProduct } from '../../redux/product-redux/Product-selector';
import { selectId } from '../../redux/user_redux/User-selector';
import { setProductToUser } from '../../redux/user_redux/User-Action';
const Product=(props)=>{

    const{product,userId,setProduct}=props;
    //add to cart
     const handleAddtoCart=async(e)=>{
        try{
           const data= await saveUser(`${API_URL.ADD_TO_CART}${userId}`,product);
           Notif("Adding To Cart","Product Successfully Added To Your Cart","success");
           console.log(data)
           setProduct(product);
        }catch(err){
            console.log(err)
            Notif("Error Occured!","This Product Already Added to Your Shopping Cart!","info")
        }
     }

    return(
        <div className="w-full h-full overflow-hidden ">

            {product.id?<div className="flex flex-col w-full h-full ">
                        <div className="w-full h-2/5 rounded-lg flex flex-col items-center bg-white">
                            <img className="w-2/3 h-full bg-cover  rounded-lg animate_product " src={product.image_url}></img>
                            <span className=" lg:text-xl lg:px-4 lg:py-2 title text-white uppercase font-bold lg:-mt-28 md:-mt-20 sm:-mt-16 ">{product.title}</span>
                        </div>
                        <div className=" w-full flex-grow flex flex-col items-center">
                            <div className="w-full h-1/6 flex justify-center items-center">
                              <h2 className="font-bold text-red-400 lg:text-xl md:text-lg sm:text-md">DETAILS</h2>
                            </div>
                            <div className="w-full h-3/6 flex ">
                                  <ul className="h-full w-1/2 flex flex-col items-center">
                                      <li className="flex items-center p-2 lg:text-xl md:text-lg sm:text-md text-green-600 animate_product">
                                          <span className="lg:w-4 lg:h-4 md:w-3 md:h-3 rounded-full bg-yellow-600"></span>
                                          <p className="ml-2">Memory: {product.memory} </p>
                                      </li>
                                      <li className="flex items-center p-2 lg:text-xl md:text-lg sm:text-md text-green-600 animate_product">
                                          <span className="lg:w-4 lg:h-4 md:w-3 md:h-3 rounded-full bg-yellow-600"></span>
                                          <p className="ml-2">Camera_Count: {product.cameraCount} </p>
                                      </li>
                                  </ul>
                                  <ul className="h-full w-1/2 flex flex-col items-center">
                                      <li className="flex items-center p-2 lg:text-xl md:text-lg sm:text-md text-green-600 animate_product">
                                          <span className="lg:w-4 lg:h-4 md:w-3 md:h-3 rounded-full bg-yellow-600"></span>
                                          <p className="ml-2">ROM: {product.rom} </p>
                                      </li>
                                      <li className="flex items-center p-2 lg:text-xl md:text-lg sm:text-md text-green-600 animate_product">
                                          <span className="lg:w-4 lg:h-4 md:w-3 md:h-3 rounded-full bg-yellow-600"></span>
                                          <p className="ml-2 ">Price: <span className="text-red-600 text-shadow border-b-2 b border-red-400">{product.price}</span> تومان  </p>
                                      </li>
                                  </ul>
                            </div>
                            <div className=" h-2/6  flex flex-col ">
                                    <a className=" animate_product cursor-pointer lg:text-xl md:text-lg sm:text-md bg-green-600 text-white font-md transition duration-500  transform hover:-translate-y-1 hover:scale-110 shadow-sm hover:shadow-lg  lg:py-2 lg:px-4 md:py-2 md:px-2 sm:py-2 sm:px-2 rounded-xl" onClick={handleAddtoCart}> افزودن به سبد خرید</a>
                            </div>                           
                        </div>
           </div>:<p className="lg:text-lg md:text-md sm:text-md text-yellow-500 mt-4 lg:ml-64 md:ml-28 sm:ml-12">No Product has been choosed yet:)</p>}
        </div>
        
    )
}

const mapStateToProps=createStructuredSelector({
    product:selectCurrentProduct,
    userId:selectId
})

const mapDispatchToProps=dispatch=>({
    setProduct:product=>dispatch(setProductToUser(product))
})
export default connect(mapStateToProps,mapDispatchToProps)(Product);