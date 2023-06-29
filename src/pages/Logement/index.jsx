import './logement.scss'
import Slideshow from '../../components/Slideshow'
import Collapse from '../../components/Collapse'
import Rating from '../../components/Rating'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from "react"

function Logement() {
    const { id } = useParams()
    console.log(id)
    const [housing, setHousing] = useState(null)
    
    useEffect(() => {
        fetch('/Data/data.json').then((response) => {
            return response.json()
        }).then((data) => {
            data.map((item) => {
                if (item.id === id) {
                    setHousing(item);
                }
            })  
        });
    },[])

    if (housing === null) {
        return (<div>Loading ...</div>)
    }
    const tags = housing.tags ? housing.tags : []
    const tagList = tags.map((tag, i) =>
        <li className='tag' key={i}>{tag}</li>
    );
    
    console.log(housing)
    return (
        
        <div className='logementWrapper'>
            <Slideshow images={housing.pictures}/>
            <div className='test'>
                <div className='infoWrapper'>
                    <h1 className='logementTitle'>{housing.title}</h1>
                    <p className='logementLocation'>{housing.location}</p>
                    <ul className='logementTags'>{tagList}</ul>
                </div>
                <div className='hostWrapper'>
                        <p className='logementHost'>{housing.host?.name}</p>
                        <img src={housing.host?.picture} className='hostPict'></img>
                    <div className='ratingWrapper'>
                        <Rating data={housing.rating}/>
                    </div>
                </div>
            </div>
            
            <div className='cardCollapseWrapper'>
                <Collapse question={"Description"} answers={[housing.description]}/>
                <Collapse question={"Equipement"} answers={housing.equipments}/>
            </div>
        </div>
    )
}

export default Logement;