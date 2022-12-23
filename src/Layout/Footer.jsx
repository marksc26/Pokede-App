import React from 'react'
import './styles/Footer.css'
import logoPokedex from '../assets/img/Pokédex_logo.png'

const Footer = () => {
  return (
    <footer className='footer'>
        
          <img  className='logo-footer' src={logoPokedex} alt="" /> 
          <img  className='pikachu-footer' src="https://media.tenor.com/0WkmuOC_W00AAAAi/waving-pikachu.gif" alt="" />
          <p className='dev' >Desarrollado por: <span>Marcos Sigala</span></p>
          
    </footer>
  )
}

export default Footer