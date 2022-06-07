import {GET_PRODUCTS,DELETE_PRODUCT,ADD_PRODUCT,GET_SINGLE_PRODUCT,UPDATE_PRODUCT} from
'../types'
const initialState={
 products:[],
 product:{}

};
const productsReducers =(state=initialState,action)=>{
 switch(action.type){
 case GET_PRODUCTS:
 return{
 ...state,
 products:action.payload,

 };
 case ADD_PRODUCT:
 return{
 ...state,
 products : [...state.products, action.payload],
 product:action.payload
 };
 case DELETE_PRODUCT:
 return{
 ...state,
 products: state.products.filter(product=> product._id !==
action.payload)
 };
 case UPDATE_PRODUCT:
 return {
 ...state,
 products:state.products.map(product => product._id ===
action.payload._id ? (product = action.payload) : product)
 };
 case GET_SINGLE_PRODUCT:
 return { ...state,
 product:action.payload };
 default: return state
 }
}
export default productsReducers