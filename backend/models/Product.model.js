import mongoose from "mongoose"
var productSchema = mongoose.Schema({
 nom: {type: String, required: true},
 reference: String,
 prix: Number,
 qtestock: Number,
 photo: String,
 decription: String,
 marques: [{
 type: mongoose.Schema.Types.ObjectId,
 ref: 'Marque'
 }]
})
const Product = mongoose.model('Product', productSchema);
export default Product 