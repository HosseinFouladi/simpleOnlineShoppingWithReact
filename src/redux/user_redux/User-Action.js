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

export const setDeleteProduct=(product,userId)=>{

    return{
        type:USER_TYPES.DELETE_PRODUCT,
        payload:{product,userId}
    }
}

export const setTogglePopup=()=>({
    type:USER_TYPES.SET_POPUP,
    payload:''
})
export const setIsLoading=(loading)=>({
    type:USER_TYPES.IS_LOADING,
    payload:loading
})

export const setLogout=()=>({
    type:USER_TYPES.USER_LOG_OUT
})