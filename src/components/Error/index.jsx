import { Link } from 'react-router-dom'
import './error.scss'

function Error() {
    return (
        <div>
            <h1 className='notFoundTitle'>404</h1>
            <p className='notFound'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className='goBack'>Retourner sur la page d'accueil</Link>
        </div>
    )
}
 
export default Error