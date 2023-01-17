import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import logoPokedex from '../assets/img/Pokédex_logo.png'
import { setdarkModeGlobal } from '../store/slices/darkMode.slice'
import { setNameTrainerGlobal } from '../store/slices/nameTrainer.slice'
import './styles/Header.css'


const Header = () => {

    
    const dispatch = useDispatch()
    const darkMode = useSelector(state => state.darkMode)

    const handleClickLogout = () =>{
        dispatch(setNameTrainerGlobal(""))
    
       }


    const changeTheme = () =>{
        localStorage.setItem("darkMode", JSON.stringify(!darkMode))
        dispatch(setdarkModeGlobal(!darkMode))
    }

    



  return (
    <div>
        <header className={!darkMode ? "header-pokedex" : "header-pokedex-darkMode"}>
            <div className='logo-container'>
                <div className='header-logo'>
                   <img src={logoPokedex} alt="" /> 
                </div>

            </div>
                
            <div className='icons-container'>
                <div className='moon-logout'>
                    <button onClick={changeTheme} className={!darkMode ? "btn" : "btn-dark"}>
                        {
                            darkMode ? <i  class='bx bxs-sun'></i> : <i className='bx bxs-moon'></i>
                        }
                    </button>
                    
                   
                    <i onClick={handleClickLogout} className='bx bx-log-out'></i>
                </div>
            </div>
            
        </header>
    </div>
  )
}

export default Header