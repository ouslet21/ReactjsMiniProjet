import Axios from "../Axios/Api";
const MARQUE_API="/marques"
 const fetchMarques=async()=> {
 return await Axios.get(MARQUE_API);
 }

 export const MarqueService = {
 fetchMarques
 } 
