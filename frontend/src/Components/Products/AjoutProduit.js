import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {addproduct} from "../../Redux/actions/productsAction";
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
const AjoutProduct=()=>{
 const [nom, setNom] = useState("");
 const [reference, setReference] = useState("");
 const [prix, setPrix] = useState("");
 const [qtestock, setQtestock] = useState("");
 const [decription, setDecription] = useState("");
 const [lesmarques, setLesmarques] = useState([]);
 const [files, setFiles] = useState("")

 const dispatch = useDispatch();
 const navigate = useNavigate(); 
 useEffect(() => {
    dispatch(loadMarques());
    },[dispatch]);
    const marques = useSelector((state) =>state.allmarques.marques);
   
    const handleSubmit = async(event)=> {
    event.preventDefault();
    const prd={
    nom:nom,
    reference:reference,
    prix:prix,
    qtestock:qtestock,
    decription:decription,
    photo : files[0].file.name,
    auteurs:lesmarques
    };
    dispatch(addproduct(prd));
    navigate("/dashboard");
    }
    return (
   
    <div className="container">
   
    <form style={{ marginLeft: 8}}>
    <div>
    <Button variant="contained"
   onClick={(event)=>handleSubmit(event)}>Ajout</Button>
    </div>
    <FormControl>
    <TextField
    variant="outlined"
   label="nom"
   value={nom}
    onChange={e => setNom(e.target.value)}
    required />
 <TextField
 variant="outlined"
type="Number"
label="reference"
value={reference}
 onChange={e => setReference(e.target.value)}
 />
 <TextField
 variant="outlined"
type="Number"
label="Prix"
value={prix}
 onChange={e => setPrix(e.target.value)}
 />
 <TextField
 variant="outlined"
type="Number"
label="Quantité"
value={qtestock}
 onChange={e => setQtestock(e.target.value)}
 />


<TextField
 variant="outlined"
label="decription"
value={decription}
 onChange={e => setDecription(e.target.value)}
 />

 <TextField
 variant="outlined"
 select
 label="Marques"
 SelectProps={{multiple: true}}
 value={lesmarques}
 helperText="Sélectionner des marques"
 onChange={e => setLesmarques(e.target.value)}
 >
 {
 marques ?
 marques.map((aut)=>
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
export default AjoutProduct