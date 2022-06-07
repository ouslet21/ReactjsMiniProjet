import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {loadProducts} from "../../Redux/actions/productsAction";
import AfficheCards from "./AfficheCards";
const ListCards=()=>{

 const dispatch = useDispatch();

 useEffect(() => {
 dispatch(loadProducts());
 });


 return(

 <div><AfficheCards/></div>
 )
}
export default ListCards 
