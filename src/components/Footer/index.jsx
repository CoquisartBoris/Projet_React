import './footer.scss'
import LogoFooter from './../../assets/logo_footer.png'

function Footer () {
    return (
        <div className='footer'>
            <p className="footerTitle">K<img className='logoFooter' src={LogoFooter}></img>SA</p>
            <p className='footerPlus'>2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer;