import './index.css'

const index = () => {
  return (
    <div className='container skeleton-loader'>
      <div className='box'>
        <div className='opener'>
          <div className='profile-pic'></div>
          <div className='profile'>
            <div className='name'></div>
            <div className='location'></div>
            <div className='username'></div>
            <div className='bio'></div>
          </div>
        </div>
        <div className='closer'>
          <div className='followers'></div>
          <div className='following'></div>
          <div className='repo'></div>
          <div className='link'></div>
        </div>
      </div>
    </div>
  )
}

export default index