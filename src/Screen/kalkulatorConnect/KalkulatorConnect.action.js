import {HITUNG_HASIL, SET_INPUT} from '../../Redux';

const hitungHasil = () => dispatch => {
  dispatch({
    type : HITUNG_HASIL
  })
}

const setInput = (newValue, inputType) => dispatch => {
  dispatch({
    type : SET_INPUT,
    payload : {
      inputType : inputType,
      newValue : newValue
    }
  })
}


export {
  hitungHasil,
  setInput
}