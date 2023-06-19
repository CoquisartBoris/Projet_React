import './cardlist.scss'
import React, { useState, useEffect } from 'react';
import MyCard from '../../components/MyCard'

function CardList() {
    const [datas, setDatas] = useState(null)
    
    useEffect(() => {
        fetch('/Data/data.json').then((response) => {
            return response.json()
        }).then((data) => {
            setDatas(data);
        });
    },[])

    return (
        
        <div className='cardWrapper'>
            <MyCard data={datas}/>
        </div>
    )
}

export default CardList