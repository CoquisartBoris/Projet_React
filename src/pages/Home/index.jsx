import Background from '../../components/Background'
import CardList from '../../components/CardList'
import Logo2 from './../../assets/IMG.png'

function Home() {
  const content = "Chez vous, partout et ailleurs"
  return (
    <div className="App">
      <header className="App-header">
        <Background title={content} image={Logo2}/>
        <CardList />
      </header>
    </div>
  );
}

export default Home;
