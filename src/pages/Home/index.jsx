import Background from '../../components/Background'
import CardList from '../../components/CardList'

function Home() {
  const text = "yes"
  return (
    <div className="App">
      <header className="App-header">
        <Background data={text}/>
        <CardList />
      </header>
    </div>
  );
}

export default Home;
