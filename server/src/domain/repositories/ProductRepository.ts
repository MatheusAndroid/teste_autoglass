import { Product } from "../models/Product";

interface ProductRepository { 
    findById(id: string | number): Promise<Product | null>;
    findAll(): Promise<Product[]>;
    create(product: Product): Promise<Product>;
    update(id: string | number, product : Product): Promise<Product>;
}

export { ProductRepository }