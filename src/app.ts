// src/app.ts
import express from "express";
//import { getUsers } from "./controllers/userController"; // Importa a função getUsers

const app = express();
const port = 3002; // Você pode mudar a porta se quiser

// Middleware para analisar o corpo das requisições JSON (se necessário para outras rotas)
app.use(express.json());

// Definindo a rota para obter usuários
// Quando uma requisição GET for feita para /users, ela será tratada pela função getUsers
app.get("/users", getUsers);

// Rota básica para testar se o servidor está funcionando
app.get("/", (req, res) => {
  res.send("Bem-vindo à API de Usuários!");
});

// Inicia o servidor
// app.listen(port, () => {
//   console.log(`Servidor rodando em http://localhost:${port}`);
// });

// A gente exporta o resultado de app.listen() para que os testes possam fechá-lo
const server = app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

// Exporta a instância do 'app' e o 'server'
export { app, server };
