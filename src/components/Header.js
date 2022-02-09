import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header className='header--header'>
      <h4>
        <FontAwesomeIcon icon={faGlobe} />
        my travel journal.
      </h4>
    </header>
  )
}

export default Header   
