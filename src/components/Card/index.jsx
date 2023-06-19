import './card.scss'
import React, { useState, useEffect } from 'react';

function Card() {
    const [datas, setDatas] = useState(null)
    
    useEffect(() => {
        fetch('/Data/data.json').then((response) => {
            console.log(response);
            return response.json()
        }).then((data) => {
            console.log(data);
        });

        /*
            .then((response) => response.json()
            .then(({ data }) => console.log(data))
            .catch((error) => console.log(error))
        )
        */
    },[])

    return (
        <div className='cardWrapper'>
            
        </div>
    )
}

export default Card