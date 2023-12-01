import '../styles/searchBar.css'
import React, { useState } from 'react'
import { Mic, Search } from '@mui/icons-material/'
import { Button } from '@mui/material'
import { useRouter } from 'next/router'

const initialState = {
  inputTerm: '',
}

function SearchBar({ term, hideButtons = false }) {
  const [inputTerm, setInputTerm] = useState(term)
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/search?q=${inputTerm}`)

  }

  const handleChange = (e) => {
    setInputTerm(e.target.value)
  }

  return (
    <form className='search' onSubmit={handleSubmit}>
      <div className='search-input'>
        {!hideButtons ? <Search className='search-input-icon' /> : null}
        <input type='text' value={inputTerm} onChange={handleChange} required />
        <Mic />
        {!hideButtons ? null : <Search className='search-input-icon' />}
      </div>
      {!hideButtons ? (
        <div className='search-buttons'>
          <Button variant='outlined' onClick={handleSubmit}>
            Google Search
          </Button>
          <Button variant='outlined'>I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className='search-buttons hidden'>
          <Button variant='outlined' onClick={handleSubmit} type='submit'>
            Google Search
          </Button>
          <Button variant='outlined'>I'm Feeling Lucky</Button>
        </div>
      )}
    </form>
  )
}

export default SearchBar
