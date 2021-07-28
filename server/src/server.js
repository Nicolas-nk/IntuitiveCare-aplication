const { ApolloServer } = require("apollo-server");
const app = require('./app');


console.log(ApolloServer);

app.listen(8080, () =>{
  console.log("Servidor iniciado na porta 8080.");
});
