import './background.css'
import Logo from './../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png'
import Logo2 from './../../assets/IMG.png'

function background(props){
    if (props.data === "yes") {
        return (
            <div className='container'>
                <img src={Logo2} alt='bg' className='backgroundImg'></img>
                <h2 className='centered'>Chez vous, partout et ailleurs</h2>
            </div>
        )
    }else {
        return (
            <div className='test'>
                <img src={Logo} alt='bg' className='backgroundImg'></img>
            </div>
        )
    }
    
}

export default background;