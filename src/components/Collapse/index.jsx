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
                                <span className={selected ? 'rotated' : 'normal'}>^</span>
                            </div>
                            <div className={selected ? 'content show' : 'content'}>
                                {content}  
                            </div>    
                        </div>
        )

    

    
}

export default Collapse;