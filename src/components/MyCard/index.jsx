import './myCard.scss'

function myCard(props) {
    console.log(props)
    return [
        <h1>{props.data[1].title}</h1>
    ]
}

export default myCard