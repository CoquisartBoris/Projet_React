import './background.css'
import Logo from './imgg.jpg'

function background(){
    return (
        <div className='test'>
            <img src={Logo} alt='bg' className='backgroundImg'></img>
        </div>
    )
}

export default background;