import {GET_MARQUES} from "../types"
import {MarqueService} from "../../services/Marque-Service";
export const loadMarques=()=>{
 return (dispatch)=>{
 MarqueService.fetchMarques()
 .then(res=>{
 dispatch({type:GET_MARQUES,
 payload:res.data})

 }).catch((error)=>console.log(error));

 }
}