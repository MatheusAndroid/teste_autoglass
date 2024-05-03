import express from 'express';
import { createProduct, getAllProducts, getProductById, updateProduct } from './presentation/controllers/ProductController';
import cors from 'cors';

const app = express();

app.use(express.json());

const allowedOrigins: string[] = ['http://localhost:4200'];

const corsOptions: cors.CorsOptions = {
    origin: allowedOrigins,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.get('/products/:id', getProductById);
app.get('/products', getAllProducts);
app.post('/products', createProduct);
app.put('/products/:id', updateProduct);

export { app };