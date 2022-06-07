import React, { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import {loadSingleproduct,updateproduct} from "../../Redux/actions/productsAction";
import {loadMarques} from "../../Redux/actions/marquesAction";
import {useDispatch, useSelector} from "react-redux";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import { FilePond,registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)
const EditProduct=()=>{
    const [state, setState] = useState({
    nom: "", reference:"",
    prix:"",qtestock:"",decription:"",
    marques:[]
    });
   
    const [aut, setAut] = useState([])
    const [files, setFiles] = useState("")
   
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const _id=params._id;
    useEffect(() => {
    dispatch(loadSingleproduct(_id));
    dispatch(loadMarques());
    setFiles("");
    },[_id,dispatch]);
   
    const product = useSelector((state) => state.allproducts.product);
    const listemarques = useSelector((state) =>state.allmarques.marques);
   
    useEffect(()=>{
    setState(product);
    setFiles(product.photo)
    },[product]);
    const handleSubmit = async(event)=> {
    event.preventDefault();
    console.log(aut)
    const prod={
    _id:_id,
    nom:state.nom,
    reference:state.reference,
    prix:state.prix,
    qtestock:state.qtestock,
    decription:state.decription,
    photo : files[0].file.name,
 marques:aut.length>0?aut:state.marques
 };
 dispatch(updateproduct(prod));
 navigate("/dashboard");
 }
 const handelInputChange=(e)=>{
 const {name,value}=e.target;
 setState({...state,[name]:value});
 }
 const labelmarque=()=>{
 if(state.marques) {
 let ch=""
 state.marques.map((aut)=>{
 if(aut.nommarque)
 ch = ch+aut.nommarque
 })
 return ch
 }
 else return null
 }
 const handleMarques=(event)=>{
 setState({...state,"marques": []});

 setAut(event.target.value);

 }
 return ( <div className="container">

 <form style={{ marginLeft: 8}}>
 <div>
 <Button color="secondary" variant="contained"
onClick={(event)=>handleSubmit(event)}>Modifier</Button>
 </div>
 <FormControl>
 <TextField name="nom"
 variant="outlined"
label="Nom"
value={state.nom}
 onChange={handelInputChange}
 required
style={{ margin: 10}}/>
 <TextField name="reference"
 variant="outlined"
type="Number"
label="Reference"
value={state.reference}
 onChange={handelInputChange}
 style={{ margin: 10}}/>
 <TextField name="prix"
 variant="outlined"
type="Number"
label="Prix"
value={state.prix}
 onChange={handelInputChange}
 style={{ margin: 10}}/>
 <TextField name="qtestock"
 variant="outlined"
type="Number"
label="Quantité"
value={state.qtestock}
 onChange={handelInputChange}
 style={{ margin: 10}}/>

<TextField name="decription"
 variant="outlined"
label="Decription"
value={state.decription}
 onChange={handelInputChange}
 style={{ margin: 10}}/>

 <TextField
 name="marques"
 variant="outlined"
 select
 label={labelmarque()}
 SelectProps={{multiple: true}}
 value={aut?aut:state.marques}
 helperText="Sélectionner des marques"
 onChange={(event)=>handleMarques(event)}
 >
 {
 listemarques ?
 listemarques.map((aut)=>
 <MenuItem key={aut._id}
value={aut._id}>{aut.nommarque}</MenuItem>
 )
 :null
 }
 </TextField>
 </FormControl>
 </form>

 <h4>Télécharger Image</h4>
 <FormControl>
 <div style={{width:300, height:50}}>
 <FilePond
 files={files}
 allowMultiple={false}
 onupdatefiles={setFiles}
 labelIdle='<span class="filepond--label-action">Browse
One</span>'
 />
 </div>
 </FormControl>
 </div>
 );}
export default EditProduct