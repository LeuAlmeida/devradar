import React, { useState } from 'react';

// import { Container } from './styles';

function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);
  }

  return (
    <>
      <h1>Contador: {counter}</h1>
      <button type="button" onClick={() => incrementCounter()}>
        Adicionar
      </button>
    </>
  );
}

export default App;
