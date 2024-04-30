import { Product } from "../../domain/models/Product";
import { ProductRepository } from "../../domain/repositories/ProductRepository";

class ProductService { 
    constructor(private productRepository: ProductRepository) { }

    async getProductById(id: number): Promise<Product | null> {
        return await this.productRepository.findById(id);
    }
    async getProducts(): Promise<Product[]> {
        return await this.productRepository.findAll();
    }
}

export { ProductService };