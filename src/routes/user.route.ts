import Router from 'express';

export const router=Router();

import {User} from '../models/user.model';
import {users} from '../data/users.data';
import { products } from '../data/product.data';
import { generateNewUserId } from '../utilities/common.functions';


router.get("/",(req, res)=>{
    if(!users){res.status(200).json({message:"No users found"})}
    else{res.status(200).json(users)};
})

router.get("/:id",(req, res)=>{
    const userId=req.params.id
    const userFound=users.find((user)=>user.id===userId)
    if(userFound){
        res.status(200).json(userFound)}
        else{
            res.status(404).json({message: "user not found"});
        }
    })

router.post("/",(req, res)=>{
    const insertedUser: User=req.body;
    if(insertedUser){
        users.push({...insertedUser,id: generateNewUserId(users).toString()})
        res.status(201).json(insertedUser)}
    else{
        res.status(400).json({message:"user non trovato"})}
})

router.delete("/:id", (req,res)=>{
    const deleteUserbyId=req.params.id;
    const index = users.findIndex(user => user.id === deleteUserbyId);
    if (index !== -1) {
        res.json({ message: 'Utente eliminato con successo', index: index });
        users.splice(index, 1);
    } else {
        res.status(404).json({ error: 'Utente non trovato' });
    }
    console.log(users);
})

router.patch("/:id", (req, res)=>{
const userId=req.params.id;
const pos=users.find(user=>user.id===userId)
//const index = users.findIndex(user => user.id === userId);
if(pos){
    Object.assign(pos,req.body);
    res.status(201).json(pos)}
    else{
        res.status(404).json({ error: 'Utente non trovato' });
    }
})
