import { HITUNG_HASIL_KALKULATOR, RESET_KALKULATOR, SET_INPUT_KALKULATOR } from "../../Redux";

const hitungHasilKalkulator = () => {
  return {type : HITUNG_HASIL_KALKULATOR}
};

const setInputKalkulator = (newValue) => {
  return {
    type : SET_INPUT_KALKULATOR,
    payload : newValue
  }
}

const resetKalkulator = () => {
  return {
    type : RESET_KALKULATOR
  }
}

export {
  hitungHasilKalkulator,
  setInputKalkulator,
  resetKalkulator
}

