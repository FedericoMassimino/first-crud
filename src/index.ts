import express from 'express';
import {User} from './/models/user.model';
import {users} from './data/users.data';

import {router as UserApi} from './routes/user.route';
import {router as ProductApi} from './routes/product.route';

const app =express(); 
const PORT=3000;
app.use(express.json())

app.get("/", (req, res)=>{
    res.status(200).json({message:"Server online"})
})

app.use("/users", UserApi);
app.use("/products", ProductApi );

app.listen(PORT,() => {
    console.log("Server on")
})
