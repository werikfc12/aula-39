const express = require("express");
const controladorDeUsuario = require("../controllers/controladorDeUsuario");
const rotasDeUsuario = express.Router();

rotasDeUsuario.get("/todos", controladorDeUsuario.pegarTodos);
rotasDeUsuario.post("/cadastrar", controladorDeUsuario.cadastrar);
rotasDeUsuario.post("/conectar", controladorDeUsuario.conectar);
rotasDeUsuario.get("/:id", controladorDeUsuario.PegarUmPeloID);

module.exports = rotasDeUsuario;



