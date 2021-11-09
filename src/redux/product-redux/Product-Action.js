import { PRODUCT_TYPES } from "./Product-type";
import { getData } from "../../helpers/Helper";
import { API_URL } from "../../helpers/Constants";

export const setProducts=(products)=>({
    type:PRODUCT_TYPES.GET_ALL_PRODUCTS,
    payload:products
})

export const setFilteredProducts=(pageNumber)=>({
    type:PRODUCT_TYPES.FILTER_PRODUCTS,
    payload:pageNumber
})

export const setPageCount=()=>({
    type:PRODUCT_TYPES.TOTALPAGES
})

export const setPageNumber=(number)=>({
    type:PRODUCT_TYPES.PAGE_NUMBER,
    payload:number
})

export const setCurrentProduct=(product)=>{
    return{
        type:PRODUCT_TYPES.CURRENT_PRODUCT,
        payload:product
    }
}

export const setSearchProduct=charachter=>({
    type:PRODUCT_TYPES.SEARCH_PRODUCT,
    payload:charachter
})

//get products async using redux thunk;
export const fetchProductsStart=()=>({
    type:PRODUCT_TYPES.SATRT_FETCHING_PRODUCTS
})

export const fetchProductsSuccess=products=>({
    type:PRODUCT_TYPES.SUCCESS_FETCHING_PRODUCTS,
    payload:products
})

export const fetchFailureProduct=()=>({
    type:PRODUCT_TYPES.FAILURE_FETCHING_PRODUCTS
})

/*export const startProductFetchingAsync=()=>{

    return dispatch=>{
        console.log("dashax")
        dispatch(fetchProductsStart());
        try{
               getData(API_URL.PRODUCT_LIST)
              .then(product_list=>dispatch(fetchProductsSuccess(product_list.data)));
        }catch(err){
            console.log(err);
            dispatch(fetchFailureProduct());
        }
    }
}*/