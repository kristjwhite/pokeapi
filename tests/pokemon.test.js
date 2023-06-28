import request from "supertest";

const baseUrl = "https://pokeapi.co/api/v2/";

describe("Pokemon Api", () => {
    it("should return the correct pokemon when requesting by ID", async () => {
      const response = await request(baseUrl).get("pokemon/812");
      expect(response.body.name).toBe("rillaboom");
    });
  
    it("should return the correct pokemon when requesting by Name", async () => {
      const response = await request(baseUrl).get("pokemon/pikachu");
      expect(response.body.id).toBe(25);
    });
  });