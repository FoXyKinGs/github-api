import './index.css'
import { useState } from 'react'

const SearchInput = ({ searchValue }) => {

  const [value, setValue] = useState('')

  const search = (e) => {
    e.preventDefault()
    searchValue(value)
  }

  return (
    <form onSubmit={search}>
      <input
        type="text"
        placeholder="Input github username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type='submit'>
        Search
      </button>
    </form>
  )
}

export default SearchInput