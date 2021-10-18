
import { PRODUCT_TYPES } from "./Product-type"
import { calculatePages,pagination } from "./Product-utility"

const INITIAL_PRODUCT={
    products:[],
    pageNumber:1,
    filteredproducts:[],
    pages:1,
    currentProduct:{},
    searchedProducts:[]
}

export const productReducer=(state=INITIAL_PRODUCT,action)=>{
    switch(action.type){
        case PRODUCT_TYPES.GET_ALL_PRODUCTS:
            return {
                ...state,
                products:[...action.payload]
            }
            case PRODUCT_TYPES.PAGE_NUMBER:
                return{
                    ...state,
                    pageNumber:action.payload
                }
                case PRODUCT_TYPES.FILTER_PRODUCTS:
                    return{
                        ...state,
                        filteredproducts:pagination(state.products,action.payload)
                    }
                    case PRODUCT_TYPES.TOTALPAGES:
                        return{
                            ...state,
                            pages:calculatePages(state.products.length)
                        }
                        case PRODUCT_TYPES.CURRENT_PRODUCT:
                            return{
                                ...state,
                                currentProduct:action.payload
                            }
                            case PRODUCT_TYPES.SEARCH_PRODUCT:
                                return{
                                    ...state,
                                    searchedProducts:state.filteredproducts.filter(item=>item.title.includes(action.payload))
                                }
            default:
                return state;
            
    }
}
