import React, { useState } from 'react'
import './Character.css'

const Character = ({ character }) => {
  const [rotated, setRotated] = useState(false)

  const handleClick = () => {
    setRotated((prev) => !prev)
  }

  return (
    <div className='card'>
      <img
        src={character.image}
        alt={character.name}
        className={`character-img ${rotated ? 'rotated' : ''}`}
        onClick={handleClick}
      />
      <h3>{character.name}</h3>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
    </div>
  )
}

export default Character
