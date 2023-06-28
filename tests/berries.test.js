import request from "supertest";

const baseUrl = "https://pokeapi.co/api/v2/";

describe("Berry Api", () => {
    it("should return a paginated list of all the berries by default", async () => {
      const allBerries = [];
      let response = await request(baseUrl).get("berry/");
  
      allBerries.push(...response.body.results);
      const pages = response.body.count / 20;
  
      for (let i = 0; i < pages - 1; i++) {
        response = await request("").get(response.body.next);
        allBerries.push(...response.body.results);
      }
  
      expect(allBerries.length).toBe(64);
    });
  
    it("should return a full list of all the berries when requested with parameters", async () => {
      let { body } = await request(baseUrl).get("berry/?offset=0&limit=100");
  
      expect(body.results.length).toBe(64);
    });
  });
  
  