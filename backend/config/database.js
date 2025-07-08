// config/database.js - ATUALIZADO PARA MONGOOSE MODERNO

const mongoose = require("mongoose");

// A conexão agora é uma função assíncrona
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/db_finance");
    console.log("MongoDB Conectado com sucesso!");
  } catch (err) {
    console.error("Erro ao conectar no MongoDB:", err.message);
    // Em caso de erro na conexão, encerra o processo
    process.exit(1);
  }
};

// Mensagens de erro personalizadas (ainda úteis)
mongoose.Error.messages.general.required = 'O atributo "{PATH}" é obrigatório';
mongoose.Error.messages.Number.min =
  'O "{VALUE}" informado é menor que o limite mínimo de "{MIN}".';
mongoose.Error.messages.Number.max =
  'O "{VALUE}" informado é maior que o limite máximo de "{MAX}".';
mongoose.Error.messages.String.enum =
  "'{VALUE}' não é válido para o atributo '{PATH}' ";

// Exportamos a função de conexão
module.exports = connectDB;