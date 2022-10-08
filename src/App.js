import { useState } from 'react'
import SearchInput from './components/SearchInput'
import axios from 'axios'
import './App.css'

function App() {

  const [githubUserData, setGithubUserData] = useState(
    {
      isLoading: true,
      isError: false,
      data: {}
    }
  )

  const fetchData = async (value) => {
    setGithubUserData({ 
      isLoading: true,
      isError: false,
      data: {}
    })
    return await axios.get(`https://api.github.com/users/${value}`)
      .then(res => {
        setGithubUserData({
          isLoading: false,
          data: res.data
        })
      })
      .catch(err => {
        setGithubUserData({
          isLoading: false,
          isError: true,
          data: {}
        })
      })
  }

  const searchValue = (e) => {
    fetchData(e)
  }

  const dataLength = Object.keys(githubUserData.data).length
  return (
    <div id='App'>
      <div className="head">
        <SearchInput searchValue={searchValue} />
      </div>


      {
        dataLength > 0 ?
          githubUserData.isLoading ?
            (
            <div className='loading'>
              Loading
            </div>
            ) : (
            <div className='container data-loaded'>
              <p>Github Name: { githubUserData.data.name }</p>
            </div>
            )
        :
          (
            <div className='no-data'>
              <p>No Data</p>
            </div>
          )
      }
    </div>
  )
}

export default App;
