import request from "supertest";

const baseUrl = "https://pokeapi.co/api/v2/";


describe("Generation Api", () => {
    it("should return the correct region with subgroups", async () => {
      const { body } = await request(baseUrl).get("generation/5/");
  
      expect(body.main_region.name).toBe("unova");
      expect(body.version_groups.length).toBe(2);
    });
  
    it("should return a list of all pokemon for that generation with name and url", async () => {
      const { body } = await request(baseUrl).get("generation/1/");
      const species = body.pokemon_species
  
      expect(species.length).toBe(151);
  
      species.forEach(async (pokemon) => {
        expect(pokemon).toMatchObject({
          name: expect.any(String),
          url: expect.any(String),
        });
      });
  
    });
  });