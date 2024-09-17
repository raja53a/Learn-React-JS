import React from "react";

function PokemonCards({ pokemonInfo }) {
  const {
    name,
    sprites,
    types,
    height,
    weight,
    stats,
    base_experience,
    abilities,
  } = pokemonInfo;

  const imageUrl = pokemonInfo.sprites.other.dream_world.front_default;
  return (
    <li className="pokemon-card">
      <figure>
        <img src={imageUrl} className="pokemon-image" />
      </figure>
      <h1 className="pokemon-name">{name}</h1>
      <div className="pokemon-info pokemon-highlight">
        <p>{types.map((currType) => currType.type.name).join(", ")}</p>
      </div>

      <div className="grid-three-cols">
        <p className="pokemon-info">
          <span> Height:</span> {height}
        </p>
        <p className="pokemon-info">
          <span> Weight:</span> {weight}
        </p>
        <p className="pokemon-info">
          <span> speed:</span>
          {stats[5].base_stat}
        </p>
      </div>

      <div className="grid-three-cols">
        <div className="pokemon-info">
          <p>{base_experience}</p>
          <span> Experience:</span>
        </div>
        <div className="pokemon-info">
          <p>{stats[1].base_stat}</p>
          <span>Attack:</span>
        </div>
        <div className="pokemon-info">
          <p>
            {abilities
              .map((abilityInfo) => abilityInfo.ability.name)
              .slice(0, 1)
              .join(", ")}
          </p>
          <span> Abilities: </span>
        </div>
      </div>
    </li>
  );
}

export default PokemonCards;
