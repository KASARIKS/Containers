import './App.css';
import ContainerList from './components/ContainerList';
import React from 'react';

// container counter
let id = 0

function App() {
  // containers
  const [conts, setConts] = React.useState([])

  // adding container
  function addContainer() {
    if (id != 5) {
      id++
      setConts([...conts, { id: id }])
    }
  }

  // deleting container
  function remContainer() {
    if (id != 0) {
      setConts(conts.filter(el => id != el.id))
      id--
    }
  }

  return (
    <div className="App">
      <ContainerList conts={conts}/>
      <button onClick={addContainer}>Append container</button>
      <button onClick={remContainer}>Delete container</button>
      <br></br>
    </div>
  );
}

export default App;
