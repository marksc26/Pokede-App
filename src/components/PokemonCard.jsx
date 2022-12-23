import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../components/styles/PokemonCard.css'

const PokemonCard = ({pokemon}) => {

    const [dataPokemon, setDataPokemon] = useState()
   
    const types = dataPokemon?.types.map(type => type.type.name).join(" / ")

    //const types = dataPokemon?.types.map(type => type.type.name[0].toUpperCase() + type.type.name.subString())
    const navigate = useNavigate()

    useEffect(() =>{

        axios.get(pokemon.url)
         .then(res => setDataPokemon(res.data))
         .catch(err => console.log(err))

    },[])


   const handleClickPokemon= () => {

    navigate(`/pokedex/${dataPokemon?.id}`)

   } 



  return (
    <article onClick={handleClickPokemon} className={`pokeCard border-${dataPokemon?.types[0].type.name}`}>
        <section >
            
        </section>
        <section className='pokeCard-content'>
            <div className={`pokeCard-header bg-lg-${dataPokemon?.types[0].type.name}`}>
                
                   <img className='pokeCar-img' src={dataPokemon?.sprites.other["official-artwork"].front_default} alt="" /> 
                 
            </div>
           
            <h3 className= {`textColor-${dataPokemon?.types[0].type.name}`}>{pokemon.name}</h3>
            <p className='pokecard-types'>{types}</p>
            <p className='pokecar-types-title'>Type</p>

        </section>  
            
        <section className='pokeCard-stats'>
            {
                dataPokemon?.stats.map(stat => (
                    <div key={stat.stat.name} className='pokecard-stat'>
                     <p className='pokecard-stat-name'>{stat.stat.name}</p>
                    <p className={`textColor-${dataPokemon?.types[0].type.name}`}>{stat.base_stat}</p>
                  </div>
                ))
            }
            
        </section>
    </article>
  )
}

export default PokemonCard