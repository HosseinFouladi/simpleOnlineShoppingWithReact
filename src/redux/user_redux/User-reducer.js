import { USER_TYPES } from "./User-type"
import { addProduct, deleteproduct } from "./User-utility"

const USER_STATE={
    currentUser:{},
    productCount:0,
    popup:false,
    isLoading:true
}

export const userReducer=(state=USER_STATE,action)=>{

    switch(action.type){
        case USER_TYPES.INSERT_USER:
            return {
                ...state,
                currentUser:{...action.payload}
            }
            case USER_TYPES.ADD_PRODUCT:
                return{
                    ...state,
                    currentUser:addProduct(state.currentUser,action.payload)
                }
                case USER_TYPES.PRODUCT_COUNT:
                    return{
                        ...state,
                        productCount:state.currentUser.products.length
                    }
                    case USER_TYPES.DELETE_PRODUCT:
                        return{
                            ...state,
                            currentUser:deleteproduct(state.currentUser,action.payload.product)
                        }
                        case USER_TYPES.SET_POPUP:
                            return{
                                ...state,
                                popup:!state.popup
                            }
                            case USER_TYPES.IS_LOADING:
                                return{
                                    ...state,
                                    isLoading:action.payload
                                }
                                case USER_TYPES.USER_LOG_OUT:
                                    return{
                                        ...state,
                                        currentUser:{}
                                    }
            default:
                return state;
    }
}

export default userReducer;