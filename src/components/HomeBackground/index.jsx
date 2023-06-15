import './homeBackground.css'
import Logo from './../../assets/IMG.png'

function homeBackground(){
    return (
        <div className='container'>
            <img src={Logo} alt='bg' className='backgroundImg'></img>
            <h2 className='centered'>Chez vous, partout et ailleurs</h2>
        </div>
    )
}

export default homeBackground;