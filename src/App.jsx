import React, { useEffect, useState } from 'react'
import Character from './components/Character/Character'
import './App.css'

const App = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data) => setCharacters(data.results))
      .catch((err) => console.error('Error fetching characters:', err))
  }, [])

  return (
    <div className='app'>
      <h1 id='headline'>Welcome to the world of Rick and Morty</h1>{' '}
      <div className='character-container'>
        {' '}
        {characters.map((char) => (
          <Character key={char.id} character={char} />
        ))}
      </div>
    </div>
  )
}

export default App
