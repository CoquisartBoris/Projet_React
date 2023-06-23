import './cardlist.scss'
import React, { useState, useEffect } from 'react';
import MyCard from '../../components/MyCard'

function CardList() {
    const [datas, setDatas] = useState(null)
    let i = 0;
    
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
    /*
    return (
        <div className='cardWrapper'>
            <MyCard data={datas[0]}/>
            <MyCard data={datas[1]}/>
            <MyCard data={datas[2]}/>
            <MyCard data={datas[3]}/>
            <MyCard data={datas[4]}/>
            <MyCard data={datas[5]}/>
        </div>
    )
    */
   return (
    <ul className='cardWrapper'>{listItems}</ul>
   )
}

export default CardList