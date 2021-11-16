import './../../Styles/Form.css';
import './../../index.css'
import { useState , useEffect, useCallback} from 'react';
import { PAGE_SIZE, PRODUCT_ID } from '../../helpers/Constants';
import{connect}from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentProduct, selectFilteredProduct, selectPageCount, selectPageNumber, selectProducts, selectSearchedProducts } from '../../redux/product-redux/Product-selector';
import { selectId, selectTheme } from '../../redux/user_redux/User-selector';
import { setCurrentProduct, setFilteredProducts, setPageCount, setPageNumber } from '../../redux/product-redux/Product-Action';
import { PaginationContainer, ProductListItem, ProductTitle } from './Sidebar.style';

const Sidebar=(props)=>{

    const{theme,searchedProducts,choosedProduct,pageNumber,filteredProducts,product_list,pages,setFilteredProducts,setPageCount,setNumber,setProduct}=props;

    useEffect(()=>{
        setFilteredProducts(pageNumber);
    },[pageNumber,product_list])

    useEffect(()=>{
        setPageCount();
    },[])

    const handlePageNumber=useCallback(e=>{
        e.preventDefault();
        const {name}=e.target;
        setNumber(+name);
    },[setNumber]);

    const loadProduct=useCallback((e,item)=>{
        e.preventDefault();
        setProduct(item);
    },[setProduct]);

    return(
        <div className="w-full h-full  flex flex-col items-center ">
           <div className='flex-grow w-full  '>
                <ul className="w-full h-full  flex flex-col items-center justify-between ">
                    {!searchedProducts.length>0? filteredProducts.map((item)=>{
                        return <ProductListItem theme={theme} itemid={item.id} currentid={choosedProduct.id} key={item.id}>
                                <a className="w-full h-full  flex  items-center pl-2 pr-1 sm:pr-0 sm:pl-0"  onClick={(e)=>loadProduct(e,item)} >
                                <figure class="preview__fig h-full w-1/3 flex items-center">
                                   <img className=" lg:w-16 lg:h-16 md:w-12 md:h-12 sm:w-8 sm:h-8 rounded-full" src={item.image_url} alt="Test" />
                                </figure>
                                <div class="preview__data w-2/3 h-full flex justify-center items-start flex-col ">
                                    <ProductTitle>{item.title}</ProductTitle>
                                    <p className="preview__publisher font-sanse lg:text-lg md:text-md sm:text-md text-blue-600"><span className="text-red-700">{item.price}</span> تومان</p>
                                </div >
                                </a>
                            </ProductListItem>
                    }):
                    searchedProducts.map((item)=>{
                        return <ProductListItem theme={theme} itemid={item.id} currentid={choosedProduct.id}  key={item.id}>
                                <a className="w-full h-full  flex  items-center pl-2 pr-1 sm:pr-0 sm:pl-0"  onClick={(e)=>loadProduct(e,item)} >
                                <figure class="preview__fig h-full w-1/3 flex items-center">
                                   <img className=" lg:w-16 lg:h-16 md:w-12 md:h-12 sm:w-8 sm:h-8 rounded-full" src={item.image_url} alt="Test" />
                                </figure>
                                <div class="preview__data w-2/3 h-full flex justify-center items-start flex-col ">
                                    <ProductTitle >{item.title}</ProductTitle>
                                    <p className="preview__publisher font-sanse lg:text-md md:text-sm sm:text-sm text-blue-600"><span className="text-red-700">{item.price}</span> تومان</p>
                                </div >
                                </a>
                            </ProductListItem>
                    })}
                </ul>
           </div>
           <PaginationContainer theme={theme}>
               {pageNumber==0?'':pageNumber===1?<div className="flex justify-center items-center text-blue-500 hover:text-white">
                   <button className="border-2 border-gray-300 font-bold hover:bg-green-500  lg:text-md md:text-sm sm:text-xs rounded-lg text-left shadow-lg bg-gray-300 lg:pr-5 lg:pl-1 lg:py-1 md:pr-3 md:pl-1 md:py-1 sm:pr-2 sm:pl-1 sm:py-1" name={pageNumber+1} onClick={handlePageNumber}>page{pageNumber+1}</button>
                   <svg class=" lg:w-5 lg:-ml-5 md:-ml-3 sm:-ml-2 lg:h-5 md:w-3 md:h-3 sm:w-2 sm:h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                   </div>:pageNumber<pages?
               <div className="flex justify-around w-full">
                  <div className="flex justify-center items-center text-blue-500 hover:text-white">
                     <svg class=" lg:w-5 lg:-mr-5 z-10 md:-mr-3 sm:-mr-2 lg:h-5 md:w-3 md:h-3 sm:w-2 sm:h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                     <button className="border-2 border-gray-300 font-bold hover:bg-green-500  lg:text-md md:text-sm sm:text-xs rounded-lg text-left shadow-lg bg-gray-300 lg:pl-5 lg:pl-1 lg:py-1 md:pl-3 md:pl-1 md:py-1 sm:pl-2 sm:pl-1 sm:py-1" name={pageNumber-1} onClick={handlePageNumber}>page{pageNumber-1}</button>
                   </div>
                   <div className="flex justify-center items-center text-blue-500 hover:text-white">
                     <button className="border-2 border-gray-300 font-bold hover:bg-green-500  lg:text-md md:text-sm sm:text-xs rounded-lg text-left shadow-lg bg-gray-300 lg:pr-5 lg:pl-1 lg:py-1 md:pr-3 md:pl-1 md:py-1 sm:pr-2 sm:pl-1 sm:py-1" name={pageNumber+1} onClick={handlePageNumber}>page{pageNumber+1}</button>
                     <svg class=" lg:w-5 lg:-ml-5 md:-ml-3 sm:-ml-2 lg:h-5 md:w-3 md:h-3 sm:w-2 sm:h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                   </div>
                </div>
                    :<div className="flex justify-center items-center text-blue-500 hover:text-white">
                        <svg class=" lg:w-5 lg:-mr-5 z-10 md:-mr-3 sm:-mr-2 lg:h-5 md:w-3 md:h-3 sm:w-2 sm:h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                        <button className="border-2 border-gray-300 font-bold hover:bg-green-500  lg:text-md md:text-sm sm:text-xs rounded-lg text-left shadow-lg bg-gray-300 lg:pl-5 lg:pl-1 lg:py-1 md:pl-3 md:pl-1 md:py-1 sm:pl-2 sm:pl-1 sm:py-1" name={pageNumber-1} onClick={handlePageNumber}>page{pageNumber-1}</button>
                    </div>}
           </PaginationContainer>
        </div>
        
    )
}

const mapStateToProps=createStructuredSelector({
    product_list:selectProducts,
    userId:selectId,
    pageNumber:selectPageNumber,
    filteredProducts:selectFilteredProduct,
    pages:selectPageCount,
    searchedProducts:selectSearchedProducts,
    theme:selectTheme,
    choosedProduct:selectCurrentProduct
})

const mapDispatchToProps=dispatch=>({

    setNumber:number=>dispatch(setPageNumber(number)),
    setFilteredProducts:pageNum=>dispatch(setFilteredProducts(pageNum)),
    setPageCount:()=>dispatch(setPageCount()),
    setProduct:product=>dispatch(setCurrentProduct(product))
})
export default connect(mapStateToProps,mapDispatchToProps)(Sidebar);