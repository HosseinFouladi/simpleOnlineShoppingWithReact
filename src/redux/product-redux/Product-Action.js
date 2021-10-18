import { PRODUCT_TYPES } from "./Product-type";

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