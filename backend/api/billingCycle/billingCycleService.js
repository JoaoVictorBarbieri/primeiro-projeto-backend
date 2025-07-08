// api/billingCycle/billingCycleService.js - NOVO ARQUIVO (lógica das rotas)

const BillingCycle = require("./billingCycle");

// Habilita o uso de async/await e tratamento de erros
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

const setupRoutes = (router) => {
  // GET: Retorna todos os ciclos de pagamento
  router.get(
    "/billingCycles",
    asyncHandler(async (req, res) => {
      const billingCycles = await BillingCycle.find({});
      res.json(billingCycles);
    })
  );

  // GET: Retorna um ciclo de pagamento por ID
  router.get(
    "/billingCycles/:id",
    asyncHandler(async (req, res) => {
      const billingCycle = await BillingCycle.findById(req.params.id);
      if (billingCycle) {
        res.json(billingCycle);
      } else {
        res.status(404).send("Billing Cycle not found");
      }
    })
  );

  // POST: Cria um novo ciclo de pagamento
  router.post(
    "/billingCycles",
    asyncHandler(async (req, res) => {
      const newBillingCycle = new BillingCycle(req.body);
      await newBillingCycle.save();
      res.status(201).json(newBillingCycle);
    })
  );

  // PUT: Atualiza um ciclo de pagamento
  router.put(
    "/billingCycles/:id",
    asyncHandler(async (req, res) => {
      // { new: true } retorna o documento atualizado
      // { runValidators: true } garante que as validações do schema sejam aplicadas na atualização
      const updatedBillingCycle = await BillingCycle.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      res.json(updatedBillingCycle);
    })
  );

  // DELETE: Remove um ciclo de pagamento
  router.delete(
    "/billingCycles/:id",
    asyncHandler(async (req, res) => {
      await BillingCycle.findByIdAndRemove(req.params.id);
      res.status(204).send(); // 204 No Content
    })
  );

  // ROTA PERSONALIZADA: Contagem de documentos
  router.get(
    "/billingCycles/count",
    asyncHandler(async (req, res) => {
      // O Mongoose v4 usa .count(), versões mais novas usam .countDocuments()
      const count = await BillingCycle.count({});
      res.json({ value: count });
    })
  );
};

module.exports = setupRoutes;