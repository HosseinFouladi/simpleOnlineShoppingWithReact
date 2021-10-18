import { combineReducers } from "redux";
import { productReducer } from "../product-redux/Product-reducer";
import{userReducer}from '../user_redux/User-reducer';

export default combineReducers({
    user:userReducer,
    products:productReducer
});