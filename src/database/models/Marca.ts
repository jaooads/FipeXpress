import { DataTypes, Model } from "sequelize";
import sequelize from "../index";

class Marca extends Model { }

Marca.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    codigoFIPE: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "marca",
    tableName: "marcas",
    timestamps: false
});

export default Marca;
