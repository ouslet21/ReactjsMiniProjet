import express from 'express';
const router = express.Router();
import { getProducts, getProductByID, createProduct, updateProduct, deleteProduct } from
'../controllers/product.controller.js';
import {auth} from "../middleware/auth.js"
/**
 * @route GET /api/products
 * @desc Get All products
 * @access Public
 */
router.get('/', getProducts);
/**
 * @route POST /api/products
 * @desc Ajouter un product
 * @access Public
 */
 router.post('/', auth, createProduct);
 /**
  * @route GET /api/products/:id
  * @desc Renvoyer un product
  * @access Public
  */
 router.get('/:id', getProductByID);
 /**
  * @route PUT /api/products/:id
  * @desc Modifier un product
  * @access Public
  */
 router.put('/:id', auth, updateProduct);
 /**
  * @route DELETE /api/products/:id
  * @desc Supprimer un product
  * @access Public
  */
 router.delete('/:id', auth, deleteProduct);
 export default router; 