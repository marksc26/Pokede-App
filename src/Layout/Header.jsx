import React from 'react'
import { useDispatch } from 'react-redux'
import logoPokedex from '../assets/img/Pokédex_logo.png'
import { setNameTrainerGlobal } from '../store/slices/nameTrainer.slice'
import './styles/Header.css'


const Header = () => {

    
    const dispatch = useDispatch()

    const handleClickLogout = () =>{
        dispatch(setNameTrainerGlobal(""))
    
       }

  return (
    <div>
        <header className='header-pokedex'>
            <div className='logo-container'>
                <div className='header-logo'>
                   <img src={logoPokedex} alt="" /> 
                </div>

            </div>
                
            <div className='icons-container'>
                <div className='moon-logout'>
                    
                    <i onClick={handleClickLogout} className='bx bx-log-out'></i>
                </div>
            </div>
            
        </header>
    </div>
  )
}

export default Header