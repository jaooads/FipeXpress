import express from "express";
//import router from "./route";
import { sequelize } from "./database/models";

const app = express();
app.use(express.json());

// Sincroniza tabelas no banco
sequelize.sync()
    .then(() => console.log("Tabelas sincronizadas ✅"))
    .catch(err => console.log("Erro ao sincronizar tabelas:", err));

// Rotas da FIPE
//app.use("/api/fipe", router);
app.get("/", (req, res) => {
    res.send("<h1>FipeXpress está online 🚀</h1>");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
