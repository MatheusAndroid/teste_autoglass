import { Request, Response } from 'express';
import { ProductService } from '../../application/services/ProductService';
import { SequelizeProductRepository } from '../../infrastructure/repositories/SequelizeProductRepository';
import { Product, productValidator } from '../../domain/models/Product';

const productService = new ProductService(new SequelizeProductRepository());

async function getProductById(req: Request, res: Response) { 
    const { id } = req.params;
    const user = await productService.getProductById(parseInt(id, 10));
    res.sendStatus(200).json(user);
}
async function getAllProducts(req: Request, res: Response) { 
    const products = await productService.getProducts();
    res.status(200).json(products);
}
async function createProduct(req: Request, res: Response) { 
    const body: Product = req.body;
    const errors = productValidator(res, body);
    if (errors.length) { 
        return res.status(400).json({errors: errors});
    }
    const product = await productService.createProduct(body);
    res.sendStatus(200).json(product);
}

async function updateProduct(req: Request, res: Response) { 
    const body: Product = req.body;
    const errors = productValidator(res, body);
    if (errors.length) { 
        return res.status(400).json({errors: errors});
    }
    const id = parseInt(req.params.id, 10);
    const product = await productService.updateProduct(id, body);
    res.status(200).json(product);
}

export { getProductById, getAllProducts, createProduct, updateProduct }