import { useState } from 'react'
import SearchInput from './components/SearchInput'
import SkeletonLoader from './components/SkeletonLoader'
import Profile from './components/Profile'
import axios from 'axios'
import './App.css'

function App() {

  const [githubUserData, setGithubUserData] = useState(
    {
      isLoading: false,
      isError: true,
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
          isError: false,
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

  return (
    <div id='App'>
      <div className="head">
        <SearchInput searchValue={searchValue} />
      </div>


      {
        githubUserData.isLoading ?
          <SkeletonLoader />
        :
          githubUserData.isError ?
            (
              <div className='no-data'>
                <p>No Data</p>
              </div>
            )
          :
          <Profile profile={githubUserData.data} />
      }
    </div>
  )
}

export default App;
