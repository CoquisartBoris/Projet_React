import './myCard.scss'
import { Link } from 'react-router-dom'

function myCard({title, cover, id}) {
    const path = "Logement/" + id
    return (
        <Link className='cardLink' to={path}>
            <div className='card'>
                <img src={cover} className='cardImg' alt={title}></img>
                <h1 className='cardTitle'>{title}</h1>
            </div>
        </Link>
    )
}

export default myCard