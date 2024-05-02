import express from 'express';
import { createProduct, getAllProducts, getProductById, updateProduct } from './presentation/controllers/ProductController';

const app = express();

app.use(express.json());

app.get('/products/:id', getProductById);
app.get('/products', getAllProducts);
app.post('/products', createProduct);
app.put('/products/:id', updateProduct);

export { app };