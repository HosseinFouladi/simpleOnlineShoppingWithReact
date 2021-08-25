import './../../Styles/Form.css';
import './../../index.css'
import { useEffect, useRef } from 'react';
import { useSetPopup, useSetUser, useUser } from '../../State_Manager/ContextProvider';
import { saveUser } from '../General/Helper';
import { API_URL, USER_ID } from '../General/Constants';


const Popup=()=>{
    const pop=useRef();
    const setPopup=useSetPopup();
    const setUser=useSetUser();
    const user=useUser();

    useEffect(()=>{
        setPopup(pop);
    },[])

    const removePop=(e)=>{
        e.preventDefault();
        pop.current.classList.add('popup');
    }

    const deleteProduct=async(e,id)=>{
        e.preventDefault();
        const deleted=await saveUser(`${API_URL.DELETE_PRODUCT}${USER_ID}/${id}`);
        const deletedUser=user.products.filter(val=>val.id!=id);
        setUser({...user,products:[...deletedUser]});
    }

    return(

        <div ref={pop} className="popup absolute right-0 top-0 z-50 background">
              <button className="absolute right-2 top-2" onClick={removePop}>
              <svg class="w-10 h-10" fill="blue-600" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
             <div className=" popup_box absolute  lg:top-16 lg:right-60  md:top-16 md:right-36 sm:top-16 sm:right-32 bg-red-200 z-60 flex justify-center items-center ">
                 <table className="w-4/5 flex flex-col  h-3/5 overflow-auto bg-gray-100 z-60 rounded-lg border-2 ">
                     <th className="flex justify-around items-center bg-gray-400  h-1/6 lg:text-lg font-serif">
                       
                        <td >عملیات</td>
                         <td>قیمت(تومان)</td>
                         <td>نام محصول</td>
                         <td>ردیف</td>
                       
                     </th>
                     <tbody className="flex flex-col justify-around flex-grow">
                     {user.products.map((val,index)=>{
                            return <tr className=" flex justify-around  items-center ">
                                <td className=" flex justify-center flex w-1/4 cursor-pointer"><svg onClick={e=> deleteProduct(e,val.id)}  class="w-6 h-6 lg:w-8 lg:h-8" fill="none" stroke="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></td>
                                <td className="w-1/4 flex justify-center text-green-600  font-sanse">{val.price}</td>
                                <td className="w-1/4 flex justify-center product_title text-sm">{val.title}</td>
                                <td className="w-1/4 flex justify-center text-red-700">{index}<span className="text-blue-600"> #</span></td>
                            </tr>
                        })}
                     </tbody>
                 </table>
             </div>
        </div>
       
    )
}
export default Popup;