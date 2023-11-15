import { useState, useEffect } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';


function App() {

  const [heroes, setHeroes] = useState([])

  const OnNewHero = (hero) => {
    setHeroes([...heroes,hero])
  }

  useEffect(() => {
    console.log(heroes)
  },[heroes]);

  return (
    <div className="App">
      <Banner />
      <Form onHeroSubmitted = {hero => OnNewHero(hero)} />
    </div>
  );
}

export default App;
