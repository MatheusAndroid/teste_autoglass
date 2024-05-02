import { Response } from "express";

interface Product { 
    id: number;
    name: string;
    active: boolean;
    manufacturing: Date;
    expiration: Date;
    supplierCode: string;
    supplierDescription: string;
    cnpj: string;
}
function productValidator(res: Response, product: Product) : String[]{ 
    const mustHaveKeys = ['name', 'active', 'manufacturing', 'expiration', 'supplierCode', 'supplierDescription', 'cnpj'];
    const errorsFound : String[] = [];

    const keys = Object.keys(product);
    mustHaveKeys.forEach((key: string) => { 
        if (!keys.includes(key) || (product as any)[key] == '') {
            res.status(400).send({ error: `Campo ${key} é obrigatório` });
            return false;
        }
    })
    return errorsFound;
}

export { Product, productValidator };