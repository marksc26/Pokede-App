
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import Pokemon from './pages/Pokemon'
import RouthProtected from './components/RouthProtected'
import HomeProtected from './components/HomeProtected'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Loader from './components/Loader'



function App() {

  const [isLoading, setIsLoading] = useState(true)


  useEffect(() =>{
    setTimeout(() =>{
      setIsLoading(!isLoading)

    },3500)

  },[])



  const nameTrainer = useSelector(state => state.nameTrainer)

  useEffect(() =>{
    localStorage.setItem("nameTrainer", nameTrainer)

  },[nameTrainer])

  return (
  
    <div className="App">  
 
      
      <Routes>
        <Route element={<HomeProtected/>}>
          <Route path='/' element={ isLoading ? (<Loader/>) : (<Home />)}/>
        </Route>

        
        <Route element={<RouthProtected/>}>

           <Route path='/pokedex' element={ isLoading ? (<Loader/>) : (<Pokedex />)}/>
           <Route path='/pokedex/:id' element={<Pokemon/>}/>
        </Route>
       
      </Routes>
      
    </div>
  
  )
}

export default App
