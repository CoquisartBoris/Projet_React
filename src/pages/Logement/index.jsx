import { useLocation } from 'react-router-dom'
import './logement.scss'

function Logement() {
    const location = useLocation()
    const { newData } = location.state
    //console.log(newData.props.data.title)

    return (
        <div className='logementWrapper'>
            <img src={newData.props.data.cover} className='logementImg'></img>
            <h1>{newData.props.data.title}</h1>
        </div>
    )
}

export default Logement;