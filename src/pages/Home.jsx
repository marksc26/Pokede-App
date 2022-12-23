import React from 'react'
import FormHome from '../components/FormHome'
import './styles/Home.css'
import pokedexLogo from '../assets/img/Pokédex_logo.png'


const Home = () => {
  return (
    <main className='home'>
        <img src={pokedexLogo} alt="" />
        <h2>Hi, trainer!</h2>
        <p>Give us, your name to start!</p>
        <FormHome/> 

    </main>
  )
}

export default Home