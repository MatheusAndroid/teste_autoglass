import { DataTypes, Model, Sequelize } from "sequelize";
import { sequelize } from "../sequelize";

const ProductModel = sequelize.define('products',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: { type: DataTypes.STRING },
    active: { type: DataTypes.BOOLEAN },
    manufacturing: { type: DataTypes.DATE },
    expiration: { type: DataTypes.DATE },
    supplierCode: { type: DataTypes.STRING },
    supplierDescription: { type: DataTypes.STRING },
    cnpj: { type: DataTypes.STRING }
}, {
    tableName: "products",
    modelName: 'products',
});

export { ProductModel }