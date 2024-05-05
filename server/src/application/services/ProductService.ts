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
    async createProduct(item: Product): Promise<Product> {
        return await this.productRepository.create(item);
    }
    async updateProduct(id: number, item: Product): Promise<Product> {
        return await this.productRepository.update(id, item);
    }
    async deleteProduct(id: number): Promise<Product> {
        return await this.productRepository.delete(id);
    }
}

export { ProductService };