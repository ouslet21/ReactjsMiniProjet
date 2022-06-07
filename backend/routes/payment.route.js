import express from 'express';
const router = express.Router();
import stripe from 'stripe';
const Stripe = stripe('sk_test_51L7mHpALOpoP5FS9ctFB3y4AK0jJ4XXnp0xuiO93pRCtMSiCbBAcVVdYvj3LaiWXk9mgNwGK78fbN1Fhp39mAKZj00wT6R9Wz1');
router.post('/', async (req, res) => { console.log(req.body)
 let status, error;
 const { token, amount } = req.body;
 try {
 await Stripe.charges.create({
 source: token.id,
 amount,
 currency: 'usd',
 });
 status = 'success';
 } catch (error) {
 console.log(error);
 status = 'Failure';
 }
 res.json({ error, status });
 }); 
 export default router; 
