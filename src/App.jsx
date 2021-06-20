import React from 'react';
import Module from './module';
import './styles/index.scss';
import Providers from './providers';

function App() {
  return (
    <Providers>
      {typeof document !== 'undefined' && (
        <Module />
      )}
    </Providers>
  );
}

export default App;
