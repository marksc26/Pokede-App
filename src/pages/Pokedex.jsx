import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ListPokemons from '../components/ListPokemons.jsx'
import '../pages/styles/Pokedex.css'
import Footer from '../Layout/Footer.jsx'
import { paginationLogic } from '../helpers/paginationLogic.js'
import Header from '../Layout/Header.jsx'


const Pokedex = () => {
    

    //States
   const [pokemons, setPokemons] = useState([])
   const [types, setTypes] = useState([])
   const [namePokemon, setNamePokemon] = useState("")
   const [pokemonsFilter, setPokemonsFilter] = useState([])
   const [pokemonType, setPokemonType] = useState("")
   const [currentPage, setCurrentPage] = useState(1)

   //Global State
   const nameTrainer= useSelector(state => state.nameTrainer)

   //Paginación
   const {lastPage, pagesInBlock, pokemonsInPage} = paginationLogic(currentPage, pokemonsFilter)


    //botones y eventos
   const handleSubmit = (e)=>{
    e.preventDefault()
    const name = e.target.namePokemon.value
    setNamePokemon(name)

   }

   const handleChangeSelect = (e) => {
    setPokemonType(e.target.value)
   }

   const handleClickPage = (newPage) =>{
    setCurrentPage(newPage)
   }

   const handleNextPage = () =>{
    const newPage = currentPage + 1
    if(newPage > lastPage){
        setCurrentPage(1)
    }else{
        setCurrentPage(newPage)
    }
   }

   const handleFirstPage = () =>{
    setCurrentPage(1)
   }

   const handleLastPage = () =>{
    setCurrentPage(lastPage)
   }

   const handlePreviousPage = () =>{
    const newPage = currentPage -1
    if(newPage < 1){
      setCurrentPage(lastPage)
    }else{
      setCurrentPage(newPage)
    }
   }

  

   //Use Effects
  /* useEffect(() =>{
    const URL = "https://pokeapi.co/api/v2/pokemon/?limit=200"
     axios.get(URL)
      .then(res => setPokemons(res.data.results))
      .catch(err => console.log(err))

   },[])*/

   

   useEffect(() =>{
    const URL = `https://pokeapi.co/api/v2/${pokemonType ? `type/${pokemonType}/`: "pokemon/?limit=600"}`
    axios.get(URL)
        .then( res => {
            if(pokemonType){
                const newPokemons = res.data.pokemon.map(pokemon => pokemon.pokemon)
                setPokemons(newPokemons)
            }else{
                setPokemons(res.data.results)
            }
        })
        .catch(err => console.log(err))

   },[pokemonType])

//effect para renderizar options de los tipos de pokemon

   useEffect(() =>{

    const URL ='https://pokeapi.co/api/v2/type/'
    axios.get(URL)
     .then(res => setTypes(res.data.results))
     .catch(err => console.log(err))

   },[])
  
//effect para busqueda
   useEffect(() => {
    const newPokemons = pokemons.filter(pokemon => pokemon.name.includes(namePokemon))
    setPokemonsFilter(newPokemons)

   },[namePokemon, pokemons])






  return (
    <main className="main" >
       
       <Header/>
        <h2>Welcome <span>{nameTrainer}</span>, here you can find your favorite pokemon</h2>
        <form className='form-container' onSubmit={handleSubmit}>
            <div className='input-container'>
                <input type="text" id='namePokemon'/>
                <button  type='submit'><i className='bx bx-search-alt'></i></button>
            </div>

            <div className='select-container'>
                <select className='select' onChange={handleChangeSelect} name="" id="">
                <option value="">All Pokemons</option>
                {
                    types.map(type => <option value={type.name} key={type.url}>{type.name}</option>)
                }
                </select>
            </div>
            
        </form>
        <ul className='pagination'>
          
            <li onClick={handlePreviousPage}><i className='bx bx-skip-previous'></i></li>
            <li onClick={handleFirstPage}>...</li>
            
                {
                pagesInBlock.map(pageInBlock => <li className={currentPage === pageInBlock ? "actualPage" : ""} onClick={() => handleClickPage(pageInBlock)} key={pageInBlock}>{pageInBlock}</li> )
                } 
                <li onClick={handleLastPage}>...</li>
            
              <li onClick={handleNextPage}><i className='bx bx-skip-next'></i></li>
            
        </ul>
        
        <ListPokemons pokemons={pokemonsInPage}/>
        <ul className='pagination'>
          
            <li onClick={handlePreviousPage}><i className='bx bx-skip-previous'></i></li>
                <li onClick={handleFirstPage}>...</li>
                {
                pagesInBlock.map(pageInBlock => <li className={currentPage === pageInBlock ? "actualPage" : ""} onClick={() => handleClickPage(pageInBlock)} key={pageInBlock}>{pageInBlock}</li> )
                } 
                
                <li onClick={handleLastPage}>...</li>
            
              <li onClick={handleNextPage}><i className='bx bx-skip-next'></i></li>
              
            
        </ul>

        <Footer/>

    </main>
  )
}

export default Pokedex