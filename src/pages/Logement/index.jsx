import { useLocation } from 'react-router-dom'
import './logement.scss'
import Slideshow from '../../components/Slideshow'

function Logement() {
    const location = useLocation()
    const { newData } = location.state
    const tags = newData.props.data.tags
    const tagList = tags.map((tag, i) =>
        <li className='tag' key={i}>{tag}</li>
    );

    //<p>rating = {newData.props.data.rating}</p>
    
    return (
        <div className='logementWrapper'>
            <Slideshow images={newData.props.data.pictures}/>
            <h1 className='logementTitle'>{newData.props.data.title}</h1>
            <p className='logementHost'>{newData.props.data.host.name}</p>
            <img src={newData.props.data.host.picture}></img>
            <p className='logementLocation'>{newData.props.data.location}</p>
            <ul className='logementTags'>{tagList}</ul>
        </div>
    )
}

export default Logement;