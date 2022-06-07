import express from 'express';
const router = express.Router();
import { getMarques, getMarqueByID, createMarque, updateMarque, deleteMarque }
from '../controllers/marque.controller.js';
/**
* @route GET /api/marques
* @desc Get All marques
* @access Public
*/
router.get('/', getMarques);
/**
* @route POST /api/marques
* @desc Ajouter un marque
* @access Public
*/
router.post('/', createMarque);
/**
* @route GET /api/marques/:id
* @desc Renvoyer un marque
* @access Public
*/
router.get('/:id', getMarqueByID);
/**
* @route PUT /api/marques/:id
* @desc Modifier un marque
* @access Public
*/
router.put('/:id', updateMarque);
/**
* @route DELETE /api/marques/:id
* @desc Supprimer un marque
* @access Public
*/
router.delete('/:id', deleteMarque);
export default router;