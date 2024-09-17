# Pokemon Project Base Code here -

## Pokemon.jsx

```javascript
<section className="container">
  <header>
    <h1> Lets Catch Pokémon</h1>
  </header>
  <div className="pokemon-search">
    <input type="text" placeholder="search Pokemon" />
  </div>
  <div>
    <ul className="cards">
      <PokemonCards />
    </ul>
  </div>
</section>
```

## PokemonCards.jsx

```javascript
<li className="pokemon-card">
  <figure>
    <img src="" className="pokemon-image" />
  </figure>
  <h1 className="pokemon-name">Name</h1>
  <div className="pokemon-info pokemon-highlight">
    <p>Types</p>
  </div>

  <div className="grid-three-cols">
    <p className="pokemon-info">
      <span> Height:</span> 43
    </p>
    <p className="pokemon-info">
      <span> Weight:</span> 67
    </p>
    <p className="pokemon-info">
      <span> speed:</span> 22
    </p>
  </div>

  <div className="grid-three-cols">
    <div className="pokemon-info">
      <p>23</p>
      <span> Experience:</span>
    </div>
    <div className="pokemon-info">
      <p>45</p>
      <span>Attack:</span>
    </div>
    <div className="pokemon-info">
      <p>Fire</p>
      <span> Abilities: </span>
    </div>
  </div>
</li>
```
