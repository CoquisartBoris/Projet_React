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
        question: 'Service',
        answer:
        'La bienveillance fait partie des valeurs fondatrices de Kasa.Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.',

    },
    {
        question: 'Sécurité',
        answer:
        'La sécurité est la priorité de Kasa.Aussi bien pour nos hotes que pour les voyageurs, chaque logement correspond aux critères établis par nos services.En laissant une note aussi bien à l hote qu au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.Nous organisons également dess ateliers sur la sécurité domestiques pour nos hotes.',
        
    }
]

export default Collapse;