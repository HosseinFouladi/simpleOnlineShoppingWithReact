import { createStore,applyMiddleware } from "redux";
import  combineReducers  from "../combin-reducers/RootReducer";
import logger from "redux-logger";

const middleware=[logger];

export const store=createStore(combineReducers,applyMiddleware(...middleware));