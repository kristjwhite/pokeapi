import request from "supertest";

const baseUrl = "https://pokeapi.co/api/v2/";

describe.only("Scenario Test", () => {
  it("should be able to navigate to the evolved forms of a pokemon", async () => {
    const pokemonResponse = await request(baseUrl).get(
      "pokemon-species/sneasel"
    );
    const evolutionResponse = await request("").get(
      pokemonResponse.body.evolution_chain.url
    );

    expect(evolutionResponse.body.chain.evolves_to[0].species.name).toBe(
      "weavile"
    );
    expect(evolutionResponse.body.chain.evolves_to[1].species.name).toBe(
      "sneasler"
    );
  });
});
