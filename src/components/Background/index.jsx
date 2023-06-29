import './background.scss'

function background(props){
    return(
        <div className='container'>
                <img src={props.image} alt='bg' className='backgroundImg'></img>
                <h2 className='centered'>{props.title}</h2>
            </div>
    )
}

export default background;