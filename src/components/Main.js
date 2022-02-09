import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Main = (props) => {
  console.log(props.item)

  return (
    <main>
      <div className="card">
              <img src={`../images/${props.item.img}`} alt={props.item.place} />
              <div className='card--stats'>
                  <h6>{props.item.state}</h6>
                  <a href={props.item.googleLink}>View on Google Maps</a>
                  <h2>{props.item.place}</h2>
                  <span>{props.item.date}</span>
                  <p>{ props.item.description}</p>
              </div>
      </div>
    </main>
  )
}

export default Main
