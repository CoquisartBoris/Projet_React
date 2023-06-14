import { useState } from 'react'
import './collapse.css'

function Collapse (){
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    return (
        <div className='wrapper'>
            <div className='accordion'>
                {data.map((item, i) => (
                    <div className='item'>
                        <div className='title' onClick={() => toggle(i)}>
                            <h2>{item.question}</h2>
                            <span>{selected === i ? '-' : '+'}</span>
                        </div>
                        <div className={selected === i ? 'content show' : 'content'}>{item.answer}</div>
                            
                    </div>
                ))}
            </div>
        </div>
    )
}

const data = [
    {
        question: 'Fiabilité',
        answer:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    },
    {
        question: 'Respect',
        answer:
        'La bienveillance fait partie des valeurs fondatrices de Kasa.Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.',
    },
    {
        question: 'question 3',
        answer:
        'kjfbnsqkjfbkjsbgfkjsndkfnslcnslfnkvnskfnskjfskjfbskfbskfbsd,nfbsd,nfbsdknfbkshj 3',
    }
]

export default Collapse;