import React, { useEffect } from 'react';
import './App.css';
import Feature from '@features/feature';

function App() {
  function hey(msj: any) {
    return msj;
  }

  useEffect(() => {
    hey('holis');
  });

  return (
    <div className="App">
      <Feature />
    </div>
  );
}

export default App;
