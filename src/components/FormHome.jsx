import React from 'react'
import { useDispatch } from 'react-redux'
import { setNameTrainerGlobal } from '../store/slices/nameTrainer.slice'
import './styles/FormHome.css'

const FormHome = () => {

    const dispatch = useDispatch()

    const handleSubmit = (e) =>{
        e.preventDefault() 
        const nameTrainer = e.target.nameTrainer.value.trim()
        dispatch(setNameTrainerGlobal(nameTrainer))
        
    }

  return (
    <div>
        <form onSubmit={handleSubmit} className='home-form'>
            <input required type="text" id='nameTrainer' placeholder='Your Name' />
            <button>Start</button>
        </form>
    </div> 
  )
}

export default FormHome