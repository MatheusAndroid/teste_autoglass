import { Product } from "../models/Product";

interface ProductRepository { 
    findById(id: string | number): Promise<Product | null>;
    findAll(): Promise<Product[]>;
}

export { ProductRepository }