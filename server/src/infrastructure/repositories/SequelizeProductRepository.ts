import { ProductModel } from "../../database/models/ProductModel";
import { Product } from "../../domain/models/Product";
import { ProductRepository } from "../../domain/repositories/ProductRepository";

class SequelizeProductRepository implements ProductRepository { 
    async findById(id: string): Promise<Product|null> {
        const product = await ProductModel.findByPk(id);
        return product ? product.toJSON() as Product : null;
    }
    async findAll(): Promise<Product[]> {
        const products = await ProductModel.findAll();
        return products.map(product => product.toJSON() as Product);
    }
}

export { SequelizeProductRepository }