import {HITUNG_HASIL, SET_INPUT} from '../../Redux';

const initialState = {
  firstValue : '',
  secondValue : '',
  operator : '',
  finalValue : 0
}

export const kalkulatorConnectReducer = (state = initialState, action) => {
  switch(action.type){
    case HITUNG_HASIL :
      let tmp;
      if(state.operator == '+'){
        tmp = parseInt(state.firstValue) + parseInt(state.secondValue)
      }else if(state.operator === '-'){
        tmp = parseInt(state.firstValue) - parseInt(state.secondValue)
      }else if(state.operator === '*'){
        tmp = parseInt(state.firstValue) * parseInt(state.secondValue)
      }else if(state.operator === '/'){
        tmp = parseInt(state.firstValue) / parseInt(state.secondValue)
      }
      return {
        ...state,
        finalValue : tmp 
      }
    case SET_INPUT : 
      return {
        ...state,
        // value : action.payload
        [action.payload.inputType] : action.payload.newValue
      }
    default :
      return {...state}
  }
}