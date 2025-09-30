import { DataTypes, Model } from "sequelize";
import sequelize from "../index";
import Modelo from "./Modelo";

class Veiculo extends Model { }

Veiculo.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    codigoFIPE: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ano: {
        type: DataTypes.STRING,
        allowNull: false
    },
    valor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    modeloId: {
        type: DataTypes.INTEGER,
        references: {
            model: Modelo,
            key: "id"
        }
    }
}, {
    sequelize,
    modelName: "veiculo",
    tableName: "veiculos",
    timestamps: false
});

// Associação
Modelo.hasMany(Veiculo, { foreignKey: "modeloId" });
Veiculo.belongsTo(Modelo, { foreignKey: "modeloId" });

export default Veiculo;
