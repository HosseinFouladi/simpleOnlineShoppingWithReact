import './../../Styles/Form.css';
import './../../index.css'
import { useFilteredProducts, useUser } from '../../State_Manager/ContextProvider';
import { Goto, pagination } from '../General/Helper';
import { useState ,useRef, useEffect} from 'react';
import { PAGE_SIZE, PRODUCT_ID } from '../General/Constants';

const Sidebar=()=>{

    const find_index=(id)=>{
        console.log(`id:${id}`,products)
        return  products.findIndex(item=>item.id==id);
    }
    const products=useFilteredProducts();
    const [num,setNum]=useState(0);
    const [number,setNumber]=useState(1);
    console.log(number,num)
    const pages=+products.length/PAGE_SIZE;
    const user=useUser();


    useEffect(()=>{
        const index=find_index(PRODUCT_ID)+2;
        const nums=(Math.round((index/PAGE_SIZE)));
        if(PRODUCT_ID){
            setNumber(nums);
            console.log(nums,num,index)
        }
          
    },[products])



    const handlePageNumber=e=>{

        e.preventDefault();
        const {name}=e.target;
        setNumber(+name);
    }

    const product=pagination(products,number);

    return(
        
        <div className="w-full h-full  flex flex-col items-center ">
           <div className='flex-grow w-full  '>
                <ul className="w-full h-full  flex flex-col items-center justify-between ">
                    {product.map((item)=>{
                        return <li  className={item.id==PRODUCT_ID?" w-full h-full transition-all  border-b-2 border-gray-300 flex hover:bg-gray-200 bg-gray-200":" w-full h-full transition-all bg-gray-100 border-b-2 border-gray-300 flex hover:bg-gray-200"}  key={item.id}>
                                <a className="w-full h-full  flex  items-center pl-2 pr-1 sm:pr-0 sm:pl-0"  href={`/user/profile/${user.id}/${item.id}`} >
                                <figure class="preview__fig h-full w-1/3 flex items-center">
                                   <img className=" lg:w-16 lg:h-16 md:w-12 md:h-12 sm:w-8 sm:h-8 rounded-full" src={item.image_url} alt="Test" />
                                </figure>
                                <div class="preview__data w-2/3 h-full flex justify-center items-start flex-col ">
                                    <h4 className="preview__title lg:text-md md:text-sm sm:text-xs uppercase font-bold sm:font-md  font-serif text-yellow-500">{item.title}</h4>
                                    <p className="preview__publisher font-sanse lg:text-md md:text-sm sm:text-sm text-blue-600"><span className="text-red-700">{item.price}</span> تومان</p>
                                </div >
                                </a>
                            </li>
                    })}
                </ul>
           </div>
           <div  className="h-1/6 bg-gray-100 w-full  flex items-center justify-center">
               {number===1?<div className="flex justify-center items-center text-blue-500 hover:text-white">
                   <button className="border-2 border-gray-300 font-bold hover:bg-green-500  lg:text-md md:text-sm sm:text-xs rounded-lg text-left shadow-lg bg-gray-300 lg:pr-5 lg:pl-1 lg:py-1 md:pr-3 md:pl-1 md:py-1 sm:pr-2 sm:pl-1 sm:py-1" name={number+1} onClick={handlePageNumber}>page{number+1}</button>
                   <svg class=" lg:w-5 lg:-ml-5 md:-ml-3 sm:-ml-2 lg:h-5 md:w-3 md:h-3 sm:w-2 sm:h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                   </div>:number<pages?
               <div className="flex justify-around w-full">
                  <div className="flex justify-center items-center text-blue-500 hover:text-white">
                     <svg class=" lg:w-5 lg:-mr-5 z-10 md:-mr-3 sm:-mr-2 lg:h-5 md:w-3 md:h-3 sm:w-2 sm:h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                     <button className="border-2 border-gray-300 font-bold hover:bg-green-500  lg:text-md md:text-sm sm:text-xs rounded-lg text-left shadow-lg bg-gray-300 lg:pl-5 lg:pl-1 lg:py-1 md:pl-3 md:pl-1 md:py-1 sm:pl-2 sm:pl-1 sm:py-1" name={number-1} onClick={handlePageNumber}>page{number-1}</button>
                   </div>
                   <div className="flex justify-center items-center text-blue-500 hover:text-white">
                     <button className="border-2 border-gray-300 font-bold hover:bg-green-500  lg:text-md md:text-sm sm:text-xs rounded-lg text-left shadow-lg bg-gray-300 lg:pr-5 lg:pl-1 lg:py-1 md:pr-3 md:pl-1 md:py-1 sm:pr-2 sm:pl-1 sm:py-1" name={number+1} onClick={handlePageNumber}>page{number+1}</button>
                     <svg class=" lg:w-5 lg:-ml-5 md:-ml-3 sm:-ml-2 lg:h-5 md:w-3 md:h-3 sm:w-2 sm:h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                   </div>
                </div>
                    :<div className="flex justify-center items-center text-blue-500 hover:text-white">
                        <svg class=" lg:w-5 lg:-mr-5 z-10 md:-mr-3 sm:-mr-2 lg:h-5 md:w-3 md:h-3 sm:w-2 sm:h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                        <button className="border-2 border-gray-300 font-bold hover:bg-green-500  lg:text-md md:text-sm sm:text-xs rounded-lg text-left shadow-lg bg-gray-300 lg:pl-5 lg:pl-1 lg:py-1 md:pl-3 md:pl-1 md:py-1 sm:pl-2 sm:pl-1 sm:py-1" name={number-1} onClick={handlePageNumber}>page{number-1}</button>
                    </div>}
           </div>
        </div>
        
    )
}
export default Sidebar;