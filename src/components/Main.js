import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Main = (props) => {
  return (
    <main>
      <div className="main-card">
        <img src={`../images/${props.item.img}`} alt={props.item.place} />
        <div className="card--stats">
          <div className="main-item1">
            <h6>
              <FontAwesomeIcon icon={faLocationDot} className="icon" />{' '}
              {props.item.state}
            </h6>
            <a href={props.item.googleLink}>View on Google Maps</a>
          </div>

          <h2>{props.item.place}</h2>
          <span>{props.item.date}</span>
          <p>{props.item.description}</p>
        </div>
      </div>
      <hr />
    </main>
  )
}

export default Main
