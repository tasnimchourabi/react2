
import './App.css';
import Entete from './components/Entete';
import PlayersList from './components/PlayersList';
import pappe from './pape-removebg-preview.png';
import messi from './messi-removebg-preview.png';
import ronaldo from './ronaldo-removebg-preview.png'
import rodri from './rodriguez-removebg-preview.png'
import benzema from './benzema-removebg-preview.png'
import kama from './kama-removebg-preview.png'
function App() {
  const joueurs=[
    {
    id:Math.random(),
    name:"Kylian Mbappé",
    age:"25",
    equipe:'Real Madrid',
    imageurl:pappe,
    
    },
    {
      id:Math.random(),
    name:"Lionel Messi",
    age:"37",
    equipe:'Argentine',
    imageurl:messi,
    },
    {
      id:Math.random(),
    name:"Cristiano Ronaldo",
    age:"39",
    equipe:'Al nasr',
    imageurl:ronaldo,
    },
    {
      id:Math.random(),
    name:"James Rodríguez",
    age:"33",
    equipe:'Colombie',
    imageurl:rodri,
    },
    {
      id:Math.random(),
    name:"Karim Benzema",
    age:"36",
    equipe:'Al-ittihad',
    imageurl:benzema,
    },
    {
      id:Math.random(),
    name:"Eduardo Camavinga",
    age:"21",
    equipe:'Real Madrid',
    imageurl:kama,
    },
    {
      id:Math.random(),
      name:"Lionel Messi",
      age:"37",
      equipe:'Argentine',
      imageurl:messi,
    },
  ]
  return (
    <div className="App">

      <Entete></Entete>
      
      <PlayersList  joueurs={joueurs} ></PlayersList>
    </div>
  );
}

export default App;
