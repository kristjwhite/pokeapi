import request from "supertest";

const baseUrl = "https://pokeapi.co/api/v2/";

describe("Error Cases", () => {
    it("should return an error code for an invalid method", async () => {
      let response = await request(baseUrl).patch("pokemon/ditto");
  
      expect(response.statusCode).toBe(404);
    });
  
    it("should return a 404 when requesting an unknown pokemon", async () => {
      const response = await request(baseUrl).get(
        "pokemon/this-is-not-a-pokemon"
      );
      expect(response.status).toBe(404);
    });
  
    it("should return a 404 when requesting an invalid id", async () => {
      const response = await request(baseUrl).get("pokemon/999999");
      expect(response.status).toBe(404);
    });
  });
  