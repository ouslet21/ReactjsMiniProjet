import { combineReducers } from "redux";
import productsReducers from "./productsReducer";
import marquesReducers from "./marquesReducer"; 

const rootReducer= combineReducers({
 allproducts:productsReducers,
 allmarques:marquesReducers, 
});
export default rootReducer 