import React from 'react';

// import { Container } from './styles';

function App() {
  function incrementCounter() {}

  return (
    <>
      <h1>Contador: 0</h1>
      <button type="button" onClick={() => incrementCounter()}>
        Adicionar
      </button>
    </>
  );
}

export default App;
