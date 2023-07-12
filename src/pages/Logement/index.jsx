import './logement.scss'
import Slideshow from '../../components/Slideshow'
import Collapse from '../../components/Collapse'
import Rating from '../../components/Rating'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom";

function Logement() {
    const { id } = useParams()
    const navigate = useNavigate();
    const [housing, setHousing] = useState(null)
    
    useEffect(() => {
        fetch('/Data/data.json').then((response) => {
            return response.json()
        }).then((data) => {
            data.find((item) => {
                if (item.id === id) {
                    setHousing(item);
                }
                
            })
        });
    },[])
    if (housing === null) {
        return (<div>Loading ...</div>)
    } else if (housing.id === undefined){
        navigate("/")
    }
    const tags = housing.tags ? housing.tags : []
    const tagList = tags.map((tag, i) =>
        <li className='tag' key={i}>{tag}</li>
    );

    const hostNames = housing.host.name.split(' ')
    let firstName = hostNames[0]
    let splittedName = hostNames[1]

    return (
        
        <div className='logementWrapper'>
            <Slideshow images={housing.pictures}/>
            <div className='specWrapper'>
                <div className='infoWrapper'>
                    <h1 className='logementTitle'>{housing.title}</h1>
                    <p className='logementLocation'>{housing.location}</p>
                    <ul className='logementTags'>{tagList}</ul>
                </div>
                <div className='hostWrapper'>
                        <p className='logementHost'>{firstName} <br></br> {splittedName}</p>
                        <img src={housing.host?.picture} className='hostPict'></img>
                    <div className='ratingWrapper'>
                        <Rating ratingValue={housing.rating}/>
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