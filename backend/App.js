import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import marqueRouter from "./routes/marque.route.js"
import productRouter from "./routes/product.route.js"; 

import clientRouter from "./routes/client.route.js";
import commandeRouter from "./routes/commande.route.js";
import lignecommandeRouter from "./routes/lignecommande.route.js";
import paymentRouter from "./routes/payment.route.js"
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
// Connexion à la base données
mongoose.connect(process.env.DATABASE,{
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(() => {console.log("Connexion à la base de données réussie");
}).catch(err => {
console.log('Impossible de se connecter à la base de données', err);
process.exit();
});
app.use('/api/marques', marqueRouter);
app.use('/api/products', productRouter); 
app.use('/api/payment', paymentRouter); 
app.use('/api/users', clientRouter);
app.use('/api/commandes', commandeRouter);
app.use('/api/lignescommandes', lignecommandeRouter); 


app.get("/",(req,res)=>{
res.send("Shop");
});
app.listen(process.env.PORT, () => {
console.log(`Server is listening on port ${process.env.PORT}`); });
