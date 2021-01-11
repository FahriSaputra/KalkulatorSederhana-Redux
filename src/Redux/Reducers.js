import {combineReducers} from 'redux'
import {kalkulatorReducer} from '../Screen/kalkulator/Kalkulator.reducer';
import {kalkulatorConnectReducer} from '../Screen/kalkulatorConnect/KalkulatorConnect.reducer';

export default combineReducers({
  kalkulatorReducer,
  kalkulatorConnectReducer
});