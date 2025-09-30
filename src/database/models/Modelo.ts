import { DataTypes, Model } from "sequelize";
import sequelize from "../index";
import Marca from "./Marca";

class Modelo extends Model { }

Modelo.init({
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
    },
    marcaId: {
        type: DataTypes.INTEGER,
        references: {
            model: Marca,
            key: "id"
        }
    }
}, {
    sequelize,
    modelName: "modelo",
    tableName: "modelos",
    timestamps: false
});

// Associação
Marca.hasMany(Modelo, { foreignKey: "marcaId" });
Modelo.belongsTo(Marca, { foreignKey: "marcaId" });

export default Modelo;
