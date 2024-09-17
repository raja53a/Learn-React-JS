import React, { useEffect, useState } from "react";
import "./Pokemon.css";
import PokemonCards from "./PokemonCards";
import Loader from "./Loader";

function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const API = "https://pokeapi.co/api/v2/pokemon?limit=124";

  useEffect(() => {
    const fetchPokemonAll = async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();

        const ResultsPokemon = data.results.map(async (currElement) => {
          const res = await fetch(currElement.url);
          const data = await res.json();
          return data;
        });
        const PokemonData = await Promise.all(ResultsPokemon);
        setPokemon(PokemonData);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError("Failed to load Pokémon. Please try again later.");
      }
    };

    fetchPokemonAll();
  }, []);

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }

  const searchData = pokemon.filter((currCard) =>
    currCard.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="container">
      <header>
        <h1> Lets Catch Pokémon</h1>
      </header>
      <div className="pokemon-search">
        <input
          type="text"
          placeholder="search Pokemon"
          value={search}
          onChange={(currCard) => {
            setSearch(currCard.target.value);
          }}
        />
      </div>
      <div>
        <ul className="cards">
          {searchData.map((currPokemon) => (
            <PokemonCards key={currPokemon.id} pokemonInfo={currPokemon} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Pokemon;
