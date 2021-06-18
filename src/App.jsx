import React from 'react';
import Module from './module';
import './styles/index.scss';
import Providers from './providers';

function App() {
  return (
    <Providers>
      <Module />
    </Providers>
  );
}

export default App;
