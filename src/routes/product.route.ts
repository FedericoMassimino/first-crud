import Router from 'express';

export const router=Router();

import {Product} from '..//models/product.model';
import {products} from '../data/product.data';
import { generateNewUserId } from '../utilities/common.functions';

router.get("/",(req, res)=>{
    if(!products){res.status(200).json({message:"No users found"})}
    else{res.status(200).json(products)};
})


router.get("/:id",(req, res)=>{
    const productId=+req.params.id
    const productFound=products.find((product)=>product.id===productId)
    if(productFound){
        res.status(200).json(productFound)}
        else{
            res.status(404).json({message: "user not found"});
        }
    })

router.post("/",(req, res)=>{
    const insertedProduct: Product=req.body;
    if(insertedProduct){
        products.push({...insertedProduct,id: generateNewUserId(products)})
        res.status(201).json(insertedProduct)}
    else{
        res.status(400).json({message:"user non trovato"})}
})

router.delete("/:id", (req,res)=>{
    const deleteProductbyId=+req.params.id;
    const index = products.findIndex(product => product.id === deleteProductbyId);
    if (index !== -1) {
        res.json({ message: 'Utente eliminato con successo', index: index });
        products.splice(index, 1);
    } else {
        res.status(404).json({ error: 'Utente non trovato' });
    }
    console.log(products);
})

router.patch("/:id", (req, res)=>{
const productId=+req.params.id;
const pos=products.find(product=>product.id===productId)
//const index = users.findIndex(user => user.id === userId);
if(pos){
    Object.assign(pos,req.body);
    res.status(201).json(pos)}
    else{
        res.status(404).json({ error: 'Utente non trovato' });
    }
})