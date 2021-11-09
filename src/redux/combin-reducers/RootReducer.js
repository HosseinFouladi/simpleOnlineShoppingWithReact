import { combineReducers } from "redux";
import { productReducer } from "../product-redux/Product-reducer";
import{userReducer}from '../user_redux/User-reducer';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig={
    key:'root',
    storage,
    whitelist:['user']
}
const rootReducer=combineReducers({
    user:userReducer,
    products:productReducer
});

export default persistReducer(persistConfig,rootReducer);