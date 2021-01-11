import {HITUNG_HASIL_KALKULATOR, SET_INPUT_KALKULATOR, RESET_KALKULATOR} from '../../Redux';

const initialState = {
  value: '',
  finalValue : 0
}

export const kalkulatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case HITUNG_HASIL_KALKULATOR:
      return {
        ...state,
        finalValue : eval(state.value)
      }
    case SET_INPUT_KALKULATOR:
      return {
        ...state,
        value : action.payload
      }
    case RESET_KALKULATOR:
      return {
        ...state,
        value : '',
        finalValue : 0
      }
    default : 
      return {...state}
  }
}

// export default kalkulatorReducer