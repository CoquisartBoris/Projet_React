import { Link } from 'react-router-dom'
import './header.css'
 
function Header() {
    return (
        <nav>
            <p className='logo'>KASA</p>
            <Link to="/">Accueil</Link>
            <Link to="/APropos">A propos</Link>
        </nav>
    )
}

export default Header