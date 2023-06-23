import { Link } from 'react-router-dom'
import './header.scss'
 
function Header() {
    return (
        <nav>
            <p className='logo'>KASA</p>
            <Link to="/">Accueil</Link>
            <Link to="/APropos">Apropos</Link>
        </nav>
    )
}

export default Header