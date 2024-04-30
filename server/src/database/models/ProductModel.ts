import { DataTypes, Model, Sequelize } from "sequelize";
import { sequelize } from "../sequelize";

class ProductModel extends Model<ProductModel>{ 
    public id!: number;
    public name!: string;
    public active!: boolean;
    public manufacturing!: Date;
    public expiration!: Date;
    public supplierCode!: string;
    public supplierDescription!: string;
    public cnpj!: string;
}

ProductModel.init({
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
    cnpj: { type: DataTypes.STRING },
    _attributes: "",
    sequelize: "",
    destroy: "",
    restore: "",
    update: "",
    increment: "",
    decrement: "",
    addHook: "",
    removeHook: "",
    hasHook: "",
    hasHooks: "",
    dataValues: "",
    _creationAttributes: "",
    isNewRecord: "",
    where: "",
    getDataValue: "",
    setDataValue: "",
    get: "",
    set: "",
    setAttributes: "",
    changed: "",
    previous: "",
    save: "",
    reload: "",
    validate: "",
    equals: "",
    equalsOneOf: "",
    toJSON: "",
    isSoftDeleted: "",
    _model: ""
}, {
    sequelize,
    tableName: "products",
    modelName: 'products',
});

export { ProductModel }