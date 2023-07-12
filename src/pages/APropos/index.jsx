import Background from "../../components/Background";
import CollapseList from "../../components/CollapseList";
import Logo from './../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png'

function About() {
    return (
      <div className="App">
        <header className="App-header">
          <Background title="" image={Logo}/>
          <CollapseList data={collapseData}/>
        </header>
      </div>
    );
  }
  const collapseData = [
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
  export default About;