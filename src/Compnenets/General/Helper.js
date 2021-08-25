import Axios from "axios";
import { PAGE_SIZE } from "./Constants";

export const saveUser=async(url,data)=>{
 const user={...data};
  const post_data= Axios({
        method: 'POST',
        url: url,
        headers: {
            'Content-Type': 'application/json',
                },
        data: user,
    }).catch(error=>{
        throw error;
    })
    const uploadedData= await Promise.race([post_data,timeout(10)]);
    return uploadedData;
}

const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };

  export const getData= async(url)=>{
   try{
    const fetched=Axios.get(url);
    const data= await Promise.race([fetched,timeout(10)]);
    return data;
 
   }catch(err){
     throw err;
   }

  }

  export const pagination=(products,page_number)=>{

    const start=(page_number-1)*PAGE_SIZE;
    const end=page_number*PAGE_SIZE;
    const product=products.slice(start,end)?products.slice(start,end):products.slice(start);
    return product;

  }

  export const Goto=(url)=>{
    window.history.replaceState({},"",url);
    window.location.reload();
  }