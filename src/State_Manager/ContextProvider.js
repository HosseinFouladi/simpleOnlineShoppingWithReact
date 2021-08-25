import { getData } from '../Compnenets/General/Helper';
import { API_URL } from '../Compnenets/General/Constants';
import {createContext,useState,useContext, useEffect}from 'react';

const userContext=createContext();
const setUserContext=createContext();
const productContext=createContext();
const setProductContext=createContext();
const currentContext=createContext();
const setCurrentContext=createContext();
const filteredProd=createContext();
const setFiltered=createContext();
const popups=createContext();
const setPopups=createContext();

export const useUser=(()=>useContext(userContext));
export const useSetUser=(()=>useContext(setUserContext));
export const useProduct=(()=>useContext(productContext));
export const useSetProduct=(()=>useContext(setProductContext));
export const useCurrentUser=(()=>useContext(currentContext));
export const useSetCurrentUser=(()=>useContext(setCurrentContext));
export const useFilteredProducts=(()=>useContext(filteredProd));
export const useSetFilteredProducts=(()=>useContext(setFiltered));
export const usePopup=(()=>useContext(popups));
export const useSetPopup=(()=>useContext(setPopups));

function ContextProvider ({children}) {

    const [user,setUser]=useState(
       
               {
                id:'',
                fullName:'',
                username:'',
                password:'',
                products:[{
                    id:'',
                    title:'',
                    cameraCount:'',
                    rom:'',
                    memory:'',
                    price:''
                }]
            },
        
    );
    const[product,setProduct]=useState(
         [{
            id:'',
            title:'',
            cameraCount:'',
            rom:'',
            memory:'',
            price:''
        }],
    )

    const[currentUser,setCurrentUser]=useState(
        {
            fullName:'',
            username:'',
            password:''
        }
    )
    const [filteredProducts,setFilteredProducts]=useState([]);
    const[popup,setPopup]=useState();

    useEffect(async()=>{
 
        try{

            const product_list=await getData(API_URL.PRODUCT_LIST);
            setProduct(product_list.data);
            setFilteredProducts(product_list.data)
            console.log(filteredProducts,product);
        }catch(err){
            console.log(err);
        }

    },[])

        return (
            <userContext.Provider value={user}>
                <setUserContext.Provider value={setUser}>
                    <productContext.Provider value={product}>
                       <setProductContext.Provider value={setProduct}>
                           <currentContext.Provider value={currentUser}>
                               <setCurrentContext.Provider value={setCurrentUser}>
                                  <filteredProd.Provider value={filteredProducts}>
                                      <setFiltered.Provider value={setFilteredProducts}>
                                          <popups.Provider value={popup}>
                                              <setPopups.Provider value={setPopup}>
                                                 {children}
                                              </setPopups.Provider>
                                          </popups.Provider>
                                      </setFiltered.Provider>
                                  </filteredProd.Provider>
                               </setCurrentContext.Provider>
                           </currentContext.Provider>
                       </setProductContext.Provider>
                    </productContext.Provider>
                </setUserContext.Provider>
            </userContext.Provider>
          );
    
}
 
export default ContextProvider;
