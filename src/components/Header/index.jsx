import { Link } from 'react-router-dom'
import './header.scss'
import LogoHeader from './../../assets/logo_header.png'
 
function Header() {
    return (
        <nav>
            <p className='logo'>K<img className='logoHeader' src={LogoHeader}></img>SA</p>
            
            <Link to="/">Accueil</Link>
            <Link to="/APropos">Apropos</Link>
        </nav>
    )
}

export default Header