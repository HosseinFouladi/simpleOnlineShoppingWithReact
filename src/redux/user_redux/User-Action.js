import { USER_TYPES } from "./User-type";

export const setCurrentUser=(user)=>{
  
    return{
        type:USER_TYPES.INSERT_USER,
        payload:user    
    }
}

export const setProductToUser=(product)=>({
    type:USER_TYPES.ADD_PRODUCT,
    payload:product
})

export const setProductCount=()=>({

    type:USER_TYPES.PRODUCT_COUNT
})

export const setDeleteProduct=(product)=>({
    type:USER_TYPES.DELETE_PRODUCT,
    payload:product
})

export const setTogglePopup=()=>({
    type:USER_TYPES.SET_POPUP,
    payload:''
})