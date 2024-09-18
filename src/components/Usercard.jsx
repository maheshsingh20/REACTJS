import React from 'react'
import mak from '../assets/mak.jpeg'
import './usercard.css'

function Usercard() {
  return (
    <div className='card-container'>
    <p id='username'>Mahesh Singh</p>
    <img id='user-image' src={mak} alt='mahesh'></img>
    <p id='description'>Software Developer</p>
</div>
  )
}
export default Usercard