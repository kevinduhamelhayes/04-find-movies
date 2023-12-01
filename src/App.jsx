import './App.css'
import React, { useRef } from 'react'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'

function App () {
  const { movies: mappedMovies } = useMovies()
  const inputRef = useRef()
  const handleClick = (event) => {
    event.preventDefault()
    const inputElement = inputRef.current
    const value = inputElement.value
    console.log(value)
  }
  return (
    <div className='page'>
      <header>
      <h1 className='title'>Buscador de Peliculas</h1>
      <form action="" className='form'>
        <input ref={inputRef} type="text" placeholder='Avengers, Star Wars, The Matrix .....' name="" id="" />
        <button type='submit' onClick={handleClick}>Search</button>
      </form>
      </header>
      <main>
  <Movies movies={mappedMovies} />
      </main>
    </div>
  )
}

export default App
