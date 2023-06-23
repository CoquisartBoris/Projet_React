import './cardCollapseDesc.scss'
import { useState } from 'react'

function CardCollapseDesc(props) {
console.log(props.data.description)
    const [selected, setSelected] = useState(null)

    const toggleDesc = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }
    let i = 0
    return (
        <div className='wrapperCardCollapseDesc'>
            <div className='accordion'>
                    <div className='itemCardCollapseDesc'>
                        <div className='titleCardCollapseDesc' onClick={() => toggleDesc(i)}>
                            <h2>Description</h2>
                            <span>{selected === i ? '-' : '+'}</span>
                        </div>
                        <div className={selected === i ? 'contentCardCollapseDesc show' : 'contentCardCollapseDesc'}>{props.data.description}</div>
                            
                    </div>
            </div>
        </div>
    )
}

export default CardCollapseDesc