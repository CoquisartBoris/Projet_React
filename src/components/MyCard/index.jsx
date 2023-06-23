import './myCard.scss'
import { Link } from 'react-router-dom'

function myCard(props) {
    console.log(props)
    return (
        <Link to="Logement" state={{ newData: {props} }}>
            <div className='card'>
                <img src={props.data.cover} className='cardImg' ></img>
                <h1 className='cardTitle'>{props.data.title}</h1>
            </div>
        </Link>
    )
}

export default myCard