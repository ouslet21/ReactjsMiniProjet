import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {loadProducts} from "../../Redux/actions/productsAction"
import AfficheProducts from "./AfficheProducts"
const ListProducts=()=>{

 const dispatch = useDispatch();

 useEffect(() => {
 dispatch(loadProducts());
 });


 return(

 <div><AfficheProducts/></div>
 )
}
export default ListProducts 
