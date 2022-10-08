import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faUserPlus, faUserCheck, faFolderTree, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const index = ({ profile }) => {
  return (
    <div className='profile container'>
      <div className='box'>
        <div className='opener'>
          <div className='profile-pic'>
            <img src={profile.avatar_url} alt="profile-pic" />
          </div>
          <div className='profile'>
            <p className='name'>{profile.name}</p>
            <p className='location'>
              <FontAwesomeIcon icon={faLocation} />
              {profile.location}
            </p>
            <p className='username'>{profile.login}</p>
            <p className='bio'>{profile.bio}</p>
          </div>
        </div>
        <div className='closer'>
          <p className='followers'>
            <FontAwesomeIcon icon={faUserCheck} />
            {profile.followers}
          </p>
          <p className='following'>
            <FontAwesomeIcon icon={faUserPlus} />
            {profile.following}
          </p>
          <p className='repo'>
            <FontAwesomeIcon icon={faFolderTree} />
            {profile.public_repos}
          </p>
          <div className='link'>
            <a href={profile.html_url} rel='noreferrer' target='_blank'>
              Go to github profile page 
              <span>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index