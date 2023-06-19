import './myCard.scss'

function myCard(props) {
    console.log(props)
    return (
        
        <div className='card'>
            <img src={props.data.cover} className='cardImg'></img>
            <h1 className='cardTitle'>{props.data.title}</h1>
        </div>
        
    )
}

export default myCard