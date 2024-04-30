import { Request, Response } from 'express';
import { ProductService } from '../../application/services/ProductService';
import { SequelizeProductRepository } from '../../infrastructure/repositories/SequelizeProductRepository';

const productService = new ProductService(new SequelizeProductRepository());

async function getProductById(req: Request, res: Response) { 
    const { id } = req.params;
    const user = await productService.getProductById(parseInt(id, 10));
    res.sendStatus(200).json(user);
}
async function getAllProducts(req: Request, res: Response) { 
    const products = await productService.getProducts();
    res.sendStatus(200).json(products);
}

export { getProductById, getAllProducts }