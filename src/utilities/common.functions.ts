import { Product } from "../models/product.model";

import { User } from "../models/user.model";


export function generateNewUserId(elements:Product[] | User[]):number {
    return (elements.reduce((max,element)=>{
        return Math.max(+element.id, max)   
            }, 0)+1);
}