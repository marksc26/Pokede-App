import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../pages/styles/Pokemon.css'
import Footer from '../Layout/Footer'
import Header from '../Layout/Header'


const Pokemon = () => {
    
    const [dataPokemon, setDataPokemon] = useState()

    const {id} = useParams()

    const getPercentBarProgress = (valueStat) =>{
        const maxValue = 150
        return `${(valueStat * 100) / maxValue}%`
    }

    

    useEffect(() =>{

        const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
        axios.get(URL)
         .then(res => setDataPokemon(res.data))
         .catch(err => console.log(err))

    }, [])


    
  return (
    <main>
       <Header/>
        <section className='pokemon-card'>
            <article className='pokemon-content'>
            <section className='first-part'>
            <div className={`pokeCard-header bg-lg-${dataPokemon?.types[0].type.name}`}>
                <img className='img-pokemon' src={dataPokemon?.sprites.other["official-artwork"].front_default} alt="" />
            </div>
                
                <h3># {dataPokemon?.id}</h3>
                <h2 className={`textColor-${dataPokemon?.types[0].type.name}`}>{dataPokemon?.name}</h2>
            <div className='weight-height-info'>
                <div className='weight-info'>
                    <p><span className='span'>Weight</span>  {dataPokemon?.weight}</p>
              </div>
               <div className='height-info'>
                    
                    <p><span className='span'>Height</span>   {dataPokemon?.height}</p>
               </div>  
            </div>
            
        </section>
        <hr />

        <section className='second-part'>
         <div className='types'>
            <h4>Types</h4>
            <div className='list-types'>
                {
                    dataPokemon?.types.map(type => <p className={`bg-lg-${type.type.name}`}key={type.type.name}>{type.type.name}</p>)
                }
              
            </div>
         </div>
         <div className='abilities'>
            <h4>Abilities</h4>
            <div className='list-abilities'>
                {
                    dataPokemon?.abilities.map(ability => <p key={ability.ability.name}>{ability.ability.name}</p>)
                }
                
            </div>
         </div>
            
        </section>
        <section className='stats'>
            <h3>Stats</h3>
              <div className='stats-cont'>
                
                {
                 dataPokemon?.stats.map(stat => (
                    <div className='stat'>
                        <div className='stat-header'>
                            <p className='stat-name'>{stat.stat.name}</p>
                            <p className='stat-value'>{stat.base_stat}/150</p>
                        </div>
                        <div className='stat-bar'>
                            <div style={{width: getPercentBarProgress(stat.base_stat)}} className={`stat-progress bar-bg-lg-${dataPokemon?.types[0].type.name}`}></div>
                        </div>

                    </div> 

                 ))
                }      
                
            </div>
        </section>

        </article>
        </section>
    
        <Footer/>

    </main>
  )
}

export default Pokemon