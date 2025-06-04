// tests/userController.test.ts
import request from "supertest";
import { app, server } from "../src/app"; // Assuming app.ts initializes Express
import * as userService from "../src/services/userService";

jest.mock("../src/services/userService");
afterAll((done) => {
  // Fecha o servidor HTTP
  server.close(() => {
    console.log("Servidor Express fechado.");
    done(); // Indica ao Jest que a função assíncrona terminou
  });
});

describe("User Controller", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("GET /users should return a list of users", async () => {
    const mockUsers = [{ id: 1, name: "Alice" }];
    (userService.getAllUsers as jest.Mock).mockResolvedValue(mockUsers);

    const response = await request(app).get("/users");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockUsers);
  });
});
