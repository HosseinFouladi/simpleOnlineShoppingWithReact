import {all,call}from 'redux-saga/effects';
import ProductSaga from '../product-redux/Product-saga';

export  function* Rootsaga (){
    yield all([call(ProductSaga)]);
}