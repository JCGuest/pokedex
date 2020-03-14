document.addEventListener('DOMContentLoaded', () => {
  handleOnSearchSubmit()
})

class Pokemon {
  constructor(pokemonData) {
    this.pokedexId = pokemonData.id
    this.name = pokemonData.name
    this.height = pokemonData.height
    this.weight = pokemonData.weight
  }
}

function handleOnSearchSubmit() {
  const form = document.getElementById('pokemon-form')
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    e.stopPropagation();
    let pokemonName = e.target['search-input'].value
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(result => result.json())
    .then(pokemonData => {
    const newPokemon = new Pokemon(pokemonData)
    let profileDiv = document.getElementById('profile')
    let headerDiv = document.getElementById('header')
    profileDiv.innerHTML = `
      <h2>Profile</h2>
      <ul>
        <li>Height: ${newPokemon.height} ft</li>
        <li>Weight: ${newPokemon.weight} lbs</li>
      </ul>
    `
    headerDiv.innerHTML = `
      <h1>Name: ${newPokemon.name}</h1>
     
    `
  })
})
}