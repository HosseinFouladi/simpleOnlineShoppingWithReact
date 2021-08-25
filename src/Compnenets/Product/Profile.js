import './../../Styles/Form.css';
import './../../index.css'
import Sidebar from './Sidebar';
import Product from './Product';
import Navbar from './Navbar';
import { useSetUser} from '../../State_Manager/ContextProvider';
import { useEffect, useState } from 'react';
import { API_URL, USER_ID } from '../General/Constants';
import { getData } from '../General/Helper';
import Popup from './Popup';

const Profile=()=>{

     const[id,setId]=useState(USER_ID);
     const setUser=useSetUser();   
  
    useEffect(async()=>{
      try{
        const data= await getData(`${API_URL.FIND_USER}/${id}`);
        setUser(data.data);
      }catch(err){
          console.log(err)
      }
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
                        <Sidebar></Sidebar>
                    </div>
                    <div className=" product flex-shrink ">
                      <Product></Product>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;