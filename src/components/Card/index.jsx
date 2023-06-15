import './card.css'
import React, { useState, useEffect } from 'react';
import Datas from '../../Data/data.json';

function Card() {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(Datas)
            .then((response) => response.json()
            .then(({ data }) => console.log(data))
            .catch((error) => console.log(error))
        )
    }, [])

    return (
        <div className='cardWrapper'>
            
        </div>
    )
}

export default Card