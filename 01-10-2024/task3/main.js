async function fetchPokemonAbilities() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
    const data = await response.json();

    const pokemonPromises = data.results.map(async (pokemon) => {
      const pokemonResponse = await fetch(pokemon.url);
      return pokemonResponse.json();
    });

    const pokemonDetails = await Promise.all(pokemonPromises);

    const pokemonAbilities = pokemonDetails.map((pokemon) => ({
      name: pokemon.name,
      abilities: pokemon.abilities.map((ability) => ability.ability.name),
      image: pokemon.sprites.front_default,
    }));

    const container = document.getElementById("pokemon-container");
    container.innerHTML = "";
    pokemonAbilities.forEach((pokemon) => {
      const pokemonDiv = document.createElement("div");
      pokemonDiv.classList.add("pokemon");
      pokemonDiv.innerHTML = `
              <h3>${pokemon.name}</h3>
              <p>Abilities: ${pokemon.abilities.join(", ")}</p>
              <img src="${pokemon.image}" alt="${pokemon.name}" />
          `;
      container.appendChild(pokemonDiv);
    });
  } catch (error) {
    console.error("Error fetching Pokémon abilities:", error);
  }
}

window.onload = fetchPokemonAbilities;
