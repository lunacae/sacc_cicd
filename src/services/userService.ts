// src/services/userService.ts

export interface User {
  id: string;
  name: string;
  email: string;
}

export const getAllUsers = async (): Promise<User[]> => {
  // Em um cenário real, aqui você faria uma chamada ao banco de dados ou a uma API
  // Por enquanto, vamos retornar um array de usuários simulado
  const users: User[] = [
    { id: "1", name: "João Silva", email: "joao.silva@example.com" },
    { id: "2", name: "Maria Souza", email: "maria.souza@example.com" },
    { id: "3", name: "Carlos Ferreira", email: "carlos.ferreira@example.com" },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 500); // Simula um atraso de rede/banco de dados
  });
};
