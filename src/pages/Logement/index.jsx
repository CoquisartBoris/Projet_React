import './logement.scss'
import Slideshow from '../../components/Slideshow'
import Collapse from '../../components/Collapse'
import Rating from '../../components/Rating'
import Tag from './../../components/Tag'
import { useNavigate, useParams } from 'react-router-dom'
import { useState,useEffect } from "react"

function Logement() {
    const { id } = useParams()
    const [housing, setHousing] = useState(null)
    const navigate = useNavigate();
    const [loaded, setLoaded] = useState(false)
    
    useEffect(() => {
        fetch('/Data/data.json').then((response) => {
            console.log(response)
            return response.json()
        }).then((data) => {
            console.log(data)
            let housingData = data.find((item) => item.id === id)
            setLoaded(true)
            setHousing(housingData)
           // if (housingData === undefined) {
            //     window.location.href=("/");
            // } 
            
    });
    },[])
    console.log(housing)
    if (loaded === false) {
        return (<div>Loading ...</div>)
    }
    if (loaded === true && housing === undefined){
        navigate("/404")
        return (<div>Redirecting ...</div>)
    }

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
                    <ul className='logementTags'>
                        {housing.tags.map((tag, key) => {
                            return (
                            <Tag key={key} label={tag}/>
                            )
                        }) }
                    </ul>
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