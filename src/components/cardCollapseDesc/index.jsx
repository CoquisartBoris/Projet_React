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
                    <div className='item'>
                        <div className='title' onClick={() => toggleDesc(i)}>
                            <h2>Description</h2>
                            <span>{selected === i ? '-' : '+'}</span>
                        </div>
                        <div className={selected === i ? 'content show' : 'content'}>{props.data.description}</div>
                            
                    </div>
            </div>
        </div>
    )
}

export default CardCollapseDesc