import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

import Routes from './src/routes';

YellowBox.ignoreWarnings(['Unrecognized WebSocket']);

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#33CBD4" />
      <Routes />
    </>
  );
}

export default App;
