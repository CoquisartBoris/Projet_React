import { useState } from 'react'
import './cardCollapseEquip.scss'

function CardCollapseEquip (props){
    const [selected, setSelected] = useState(null)
    let i = 0
    console.log(props.data.equipments)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }
    const equipments = props.data.equipments
    const equipList = equipments.map((item) =>
        <li>{item}</li>
    );
    return (
        <div className='wrapperCardCollapseDesc'>
            <div className='accordion'>
                    <div className='item'>
                        <div className='title' onClick={() => toggle(i)}>
                            <h2>Equipement</h2>
                            <span>{selected === i ? '-' : '+'}</span>
                        </div>
                        <div className={selected === i ? 'content show' : 'content'}>{equipList}</div>
                            
                    </div>
            </div>
        </div>
        
    )
}

export default CardCollapseEquip;