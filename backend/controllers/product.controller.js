import mongoose from 'mongoose';
import Product from '../models/Product.model.js';
export const getProducts = async (req, res) => {
 try {
    const cat = await Product.find().populate('marques');
   
    res.status(200).json(cat);
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
   }
   export const getProductByID = async (req, res) => {
    try {
    const liv = await Product.findById(req.params.id).populate('marques')
    res.status(200).json(liv);
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
   }
   export const createProduct = async (req, res) => {
    const {nom,reference,prix,qtestock,photo,decription,marques } =
   req.body;
   
    const newProduct = new Product({
    nom:nom,reference:reference,prix:prix,qtestock:qtestock,photo:photo,decription:decription,marques:marques })
    try {
    await newProduct.save();
    res.status(201).json(newProduct );
    } catch (error) {
    res.status(409).json({ message: error.message });
    }
   }
   export const updateProduct= async (req, res) => {
    const { id } = req.params;
    const {nom,reference,prix,qtestock,photo,decription,marques } =
   req.body;
   if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de product avec un id: ${id}`);
 const prd1 = {nom:nom,reference:reference,prix:prix,qtestock:qtestock,photo:photo,decription:decription,marques:marques, _id: id
};
 await Product.findByIdAndUpdate(id, prd1);
 res.json(prd1);
}
export const deleteProduct = async (req, res) => {
 const { id } = req.params;
 if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de product avec l'ID: ${id}`);
 await Product.findByIdAndDelete(id);
 res.json({ message: "product supprimé avec succès." });
} 
