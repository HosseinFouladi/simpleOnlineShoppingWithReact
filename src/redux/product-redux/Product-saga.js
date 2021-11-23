import { takeEvery,put,delay,all,call } from "@redux-saga/core/effects";
import { takeLatest } from "redux-saga/effects";
import { API_URL } from "../../helpers/Constants";
import { getData,saveUser } from "../../helpers/Helper";
import { USER_TYPES } from "../user_redux/User-type";
import { fetchFailureProduct, fetchProductsSuccess } from "./Product-Action";
import { PRODUCT_TYPES } from "./Product-type";

export function* fetchProductsAsync(){
    console.log(" i has been called");
    try{
        const products=yield getData(API_URL.PRODUCT_LIST);
        yield put(fetchProductsSuccess(products.data));
    }catch(err){
        yield put(fetchFailureProduct());
    }
}

export function* fetchProductsStart(){
    yield takeLatest(PRODUCT_TYPES.SATRT_FETCHING_PRODUCTS,fetchProductsAsync)
}

function* startDelete({payload:{product,userId}}){
  yield saveUser(`${API_URL.DELETE_PRODUCT}${userId}`,product);
}

export function* deleteProducts(){
    yield takeEvery(USER_TYPES.DELETE_PRODUCT,startDelete);
}

export default function* ProductSaga(){
    yield all([call(deleteProducts),call(fetchProductsStart)]);
}