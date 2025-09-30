import { Router } from "express";
// import { getMarcas, getModelos, getValor } from "./controllers/consultaFipeController"; 

const router = Router();

// Retorna todas as marcas de carros
router.get("/marcas", getMarcas);

// Retorna todos os modelos de uma marca
router.get("/modelos/:codigoMarca", getModelos);

// Retorna o valor de um veículo pelo código FIPE
router.get("/valor/:codigoFipe", getValor);

export default router;
