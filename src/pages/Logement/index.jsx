import { useLocation } from 'react-router-dom'
import './logement.scss'
import Slideshow from '../../components/Slideshow'
import CardCollapseDesc from '../../components/cardCollapseDesc'
import CardCollapseEquip from '../../components/cardCollapseEquip'

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
            <div className='test'>
                <div className='infoWrapper'>
                    <h1 className='logementTitle'>{newData.props.data.title}</h1>
                    <p className='logementLocation'>{newData.props.data.location}</p>
                    <ul className='logementTags'>{tagList}</ul>
                </div>
                <div className='hostWrapper'>
                    <p className='logementHost'>{newData.props.data.host.name}</p>
                    <img src={newData.props.data.host.picture} className='hostPict'></img>
                </div>
            </div>
            <div className='cardCollapseWrapper'>
                <CardCollapseDesc data={newData.props.data} />
                <CardCollapseEquip data={newData.props.data}/>
            </div>
        </div>
    )
}

export default Logement;