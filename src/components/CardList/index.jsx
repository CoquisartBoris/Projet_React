import './cardlist.scss'
import React, { useState, useEffect } from 'react';
import MyCard from '../../components/MyCard'

function CardList() {
    const [datas, setDatas] = useState([])
    
    useEffect(() => {
        fetch('/Data/data.json').then((response) => {
            return response.json()
        }).then((data) => {
            setDatas(data);
        });
    },[])

    const listItems = datas.map((test) =>
        <MyCard data={test}/>
    )
    
   return (
    <ul className='cardWrapper'>{listItems}</ul>
   )
}

export default CardList