import { createStore,applyMiddleware } from "redux";
import  combineReducers  from "../combin-reducers/RootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "@redux-saga/core";
import { Rootsaga } from "../root-saga/Root-saga";

const sagaMiddleWare=createSagaMiddleware();
const middleware=[logger,sagaMiddleWare];

export const store=createStore(combineReducers,applyMiddleware(...middleware));

sagaMiddleWare.run(Rootsaga);

export const persistor=persistStore(store);
export default {store,persistor};