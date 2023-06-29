import Background from "../../components/Background";
import CollapseList from "../../components/CollapseList";
import Logo from './../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png'

function About() {
    return (
      <div className="App">
        <header className="App-header">
          <Background title="" image={Logo}/>
          <CollapseList />
        </header>
      </div>
    );
  }

  export default About;