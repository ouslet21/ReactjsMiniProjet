import {GET_MARQUES} from '../types'
const initialState={
 marques:[]
};
const marquesReducers =(state=initialState,action)=>{
 switch(action.type){
 case GET_MARQUES:
 return{
 ...state,
 marques:action.payload,

 };
 default: return state
 }
}
export default marquesReducers 