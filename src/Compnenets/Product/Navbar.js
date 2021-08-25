import './../../Styles/Form.css';
import './../../index.css'
import { useUser,useSetFilteredProducts,useProduct, usePopup, useSetPopup } from '../../State_Manager/ContextProvider';
import { useState } from 'react';
const Navbar=()=>{

    const user=useUser();
    const product=useProduct();
    const setFilteredProducts=useSetFilteredProducts();
    const popup=usePopup();
    const setPopup=useSetPopup();

    const handleSearch=e=>{
       const {value}=e.target;
       const filteredProducts= product.filter(item=>{
            return item.title.includes(value)
        });
       setFilteredProducts(filteredProducts);
       console.log(filteredProducts)
    }

    const handlePopup=(e)=>{
        e.preventDefault();
        popup.current.classList.toggle('popup');
    }

    return(
        <div className="flex flex-start w-full h-full border-b-2 border-gray-300">

            <div className="flex justify-start w-2/6  items-center">
              <svg class="lg:w-10 ml-2 lg:h-10 w-6 h-6 mr-1" fill="none" stroke="gray" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span className="lg:text-lg md:text-md sm:text-sm text-yellow-700">{user.fullName}</span>
            </div>
            <div className=" flex-grow flex-shrink flex justify-center items-center">
                <svg class="lg:w-6 lg:h-6 lg:-mr-8 z-10 md:-mr-6 md:w-4 md:h-4 sm:w-3 sm:h-3 text-gray-400 sm:-mr-4 stroke-current stroke-0" fill="none"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <input type="search" placeholder="Search Product ..." className="outline-none font-sanse lg:text-lg lg:py-4 lg:px-10 md:px-8 sm:px-6 md:text-md md:py-2 sm:py-2 sm:text-xs w-4/5 h-3/5 rounded-lg" onChange={handleSearch}></input>
            </div>
            <div className=" w-1/6  flex justify-center items-center" >
                <div className=" w-1/4 h-4/5 bg-gray-200 rounded-full flex-col  flex items-center">
                <div className=" bg-gray-200 text-blue-800 w-1/5 h-1/5 rounded-full  flex self-start justify-center items-center lg:text-sm md:text-sm sm:text-xs">{+user.products.length}</div>
                <a onClick={handlePopup} className="w-4/5 h-4/5">
                <svg  class=" w-fullh-full text-green-500 stroke-current stroke-0 flex items-center justify-center"  fill="none"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                </a>
                 
                </div>
            </div>
        </div>
        
    )
}
export default Navbar;