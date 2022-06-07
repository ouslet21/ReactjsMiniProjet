import { BrowserRouter as Router,Link, Route, Routes } from 'react-router-dom';
import ListProducts from './Components/Products/ListProducts';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AjoutProduct from './Components/Products/AjoutProduit'; 
import EditProduct from './Components/Products/EditProduct'; 
import Login from './Authentification/Login'; 
import ListCards from './Components/Client/ListCards'; 
import { CartProvider } from "react-use-cart"; 
import CartProduct from './Components/Client/CartProduct'; 
import Registration from './Components/Client/Registration';
import LoginClient from './Components/Client/LoginClient'; 
import ListCommandes from './Components/Commandes/ListCommandes';
import Dashboard from './Components/Admin/Dashboard'; 
import Payment from './Components/Client/Payment';
function App() {
return (
  <CartProvider> 
<>
 <Router>
 <Box sx={{ flexGrow: 1 }}>
 <AppBar position="static">
 <Toolbar>
 <IconButton
 size="large"
 edge="start"
 color="inherit"
 aria-label="menu"
 sx={{ mr: 2 }}
 >
 </IconButton>
 <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
 Mariem-Shop
 </Typography>
<Link to="/"><Button color="error">Liste des Products</Button></Link>
 </Toolbar>
 </AppBar>
 </Box>
 <Routes>
 <Route exact path="/products" element={<ListProducts/>}></Route>
 <Route path="/addProducts" element={<AjoutProduct/>}></Route>
 <Route path="/editProducts/:_id" element={<EditProduct/>}></Route>
 <Route path="/" element={<ListCards/>}></Route>
 <Route path="/cart" element={<CartProduct/>}></Route>
 <Route path="/register" element={<Registration/>}></Route>
 <Route path="/loginclient" element={<LoginClient/>}></Route>
 <Route path="/admin" element={<Login/>}></Route>
 <Route path="/listcommandes" element={<ListCommandes/>}></Route>
<Route path="/dashboard" element={<Dashboard/>}></Route>
<Route path="/payment" element={<Payment/>}></Route>



 </Routes>
 </Router>
 </>
 </CartProvider> 
 );
}
export default App; 