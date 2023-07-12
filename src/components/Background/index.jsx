import './background.scss'

function background({title, image}){
    return(
        <div className='container'>
                <img src={image} alt='bg' className='backgroundImg'></img>
                <h2 className='centered'>{title}</h2>
            </div>
    )
}

export default background;