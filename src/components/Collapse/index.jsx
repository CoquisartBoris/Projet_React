import Logo from './../../assets/collapseLogo.png'
import { useState } from 'react'

function Collapse ({question, answers}){
    const [selected, setSelected] = useState(false)

    let content = "";
    let items = "";

    if (answers.length === 1) {
        content = answers[0]
    } else {
        items = answers.map((answer) => {
            return<li>{answer}</li>
        })
        content = <ul>{items}</ul>
    }
        return (
            <div className='item'>
                <div className='title' onClick={() => setSelected(!selected)}>
                    <h2>{question}</h2>
                    <img className={ selected ? 'rotated logoCollapse' : 'logoCollapse' } alt= {selected ? 'close' : 'open'} src={Logo}></img>
                </div>
                <div className={selected ? 'content show' : 'content'}>
                    <div className='contentText'>{content}</div>
                </div>    
            </div>
        )
}

export default Collapse;