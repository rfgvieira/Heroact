import { useState, useEffect } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';
import Universe from './components/Universe/Universe';
import { universeItems } from "./utils/Constants";

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
      {universeItems().map(universe => <Universe key = {universe.name} name = {universe.name}/>)}
    </div>
  );
}

export default App;
