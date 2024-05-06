import { Optional } from "sequelize";
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
    async create(item : any): Promise<any> { 
        const product = await ProductModel.create(item as Optional<any, string>);
        return product.toJSON() as Product;
    }
    async update(id: number , product: Product): Promise<any> { 
        await ProductModel.update(product, { where: {id: id} });
    };
    async delete(id: number): Promise<any> { 
        const newProduct = await ProductModel.update({active: false},{ where: { id: id } });
    };
}

export { SequelizeProductRepository }