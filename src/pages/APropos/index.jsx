import Background from "../../components/Background";
import CollapseList from "../../components/CollapseList";

function About() {
  const test = "test"
  
    return (
      <div className="App">
        <header className="App-header">
          <Background/>
          <CollapseList data={test}/>
        </header>
      </div>
    );
  }

  export default About;