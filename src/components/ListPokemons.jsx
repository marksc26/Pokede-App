import React from 'react'
import PokemonCard from './PokemonCard'
import '../components/styles/ListPokemons.css'

const ListPokemons = ({pokemons}) => {

  
  return (
    <section className='list-pokemons'>
    
            {
                pokemons.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.url}/>)
            }
        
    </section>
        
    
  )
}

export default ListPokemons