/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Kalkulator from './src/Screen/kalkulator/Kalkulator.screen';
// import KalkulatorConnect from './src/Screen/kalkulatorConnect/KalkulatorConnect.container';
import {KalkulatorConnect} from './src/Route'

import {Provider} from 'react-redux';
import {getStore} from './src/Redux/Store'

const store = getStore();

const App = () => {
  return (
    <Provider store={store}>
      {/* <Kalkulator/> */}
      <KalkulatorConnect/>
    </Provider>
    
  );
};

export default App;
