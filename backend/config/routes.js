// config/routes.js - TOTALMENTE ATUALIZADO

const express = require("express");
const billingCycleService = require("../api/billingCycle/billingCycleService"); // Vamos criar este arquivo a seguir

module.exports = function (server) {
  // Definir a URL base para todas as rotas
  const router = express.Router();
  server.use("/api", router);

  // Registrar as rotas de BillingCycle
  billingCycleService(router);
};