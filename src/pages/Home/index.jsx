import HomeBackground from '../../components/HomeBackground'
import CardList from '../../components/CardList'

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <HomeBackground />
        <CardList />
      </header>
    </div>
  );
}

export default Home;
