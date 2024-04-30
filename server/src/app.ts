import express from 'express';
import { getAllProducts, getProductById } from './presentation/controllers/ProductController';

const app = express();

app.use(express.json());

app.get('/products/:id', getProductById);
app.get('/products', getAllProducts);

export { app };