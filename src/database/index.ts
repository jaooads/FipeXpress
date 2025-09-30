import { Sequelize } from "sequelize";

const sequelize = new Sequelize("FipeXpress", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
    logging: false
});

sequelize.authenticate()
    .then(() => console.log("Banco conectado "))
    .catch(err => console.log("Erro de conexão:", err));

export default sequelize;