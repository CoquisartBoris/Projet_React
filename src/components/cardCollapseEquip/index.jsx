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
        <div className='wrapperCardCollapseDesc wrapperCardCollapseEquip'>
            <div className='accordion'>
                    <div className='itemCardCollapseDesc'>
                        <div className='titleCardCollapseDesc' onClick={() => toggle(i)}>
                            <h2>Equipement</h2>
                            <span>{selected === i ? '-' : '+'}</span>
                        </div>
                        <div className={selected === i ? 'contentCardCollapseDesc show' : 'contentCardCollapseDesc'}>{equipList}</div>
                            
                    </div>
            </div>
        </div>
        
    )
}

export default CardCollapseEquip;