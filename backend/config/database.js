const mongoose = require("mongoose");
var promise = mongoose.connect("mongodb://localhost:27017/db_finance", {
  useMongoClient: true,
});
module.exports = mongoose;
mongoose.Error.messages.general.required = 'O atributo "{PATH" é obrigatório';
mongoose.Error.messages.Number.min =
  'O "{VALUE}" informado é menor que o limite mínimo de "{MIN}".';
mongoose.Error.messages.Number.max =
  'O "{VALUE}" informado é maior que o limite máximo de "{MIN}".';
mongoose.Error.messages.String.enum =
  "'{VALUE}' não é válido para o atributo '{PATH}' ";
