import './myCard.scss'
import { Link } from 'react-router-dom'

function myCard(props) {
    console.log(props)
    const path = "Logement/" + props.data.id
    return (
        <Link to={path}>
            <div className='card'>
                <img src={props.data.cover} className='cardImg' ></img>
                <h1 className='cardTitle'>{props.data.title}</h1>
            </div>
        </Link>
    )
}

export default myCard