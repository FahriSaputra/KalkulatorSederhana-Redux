import {connect} from 'react-redux';
import KalkulatorConnect from './KalkulatorConnect.screen';
import {setInput, hitungHasil} from './KalkulatorConnect.action';

const mapStateToProps = state => {
  const reducers = state.kalkulatorConnectReducer
  return {
    finalValue : reducers.finalValue,
    firstValue : reducers.firstValue,
    secondValue : reducers.secondValue,
    operator : reducers.operator
  }  
};

const mapDispatchToProps = dispatch => {
  return {
    setInput : (newValue, inputType) => dispatch(setInput(newValue, inputType)),
    hitungHasil : () => dispatch(hitungHasil())
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(KalkulatorConnect);