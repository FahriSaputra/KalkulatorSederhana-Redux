import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {setInputKalkulator, hitungHasilKalkulator, resetKalkulator} from './Kalkulator.action'

const Kalkulator = () => {
  const dispatch = useDispatch()

  const kalkulatorReducer = useSelector(state => state.kalkulatorReducer)

  const onHandleInput = () => {
    dispatch(hitungHasilKalkulator())
  }

  const setInput = (newValue) => {
    dispatch(setInputKalkulator(newValue))
  }

  const reset = () => {
    dispatch(resetKalkulator())
  }

  return (
    <View style = {styles.container}>
      <View style={styles.formContainer}>
        <TextInput 
          value = {kalkulatorReducer.value}
          style = {styles.textInput}
          onChangeText = {newValue => setInput(newValue)}
        />
      </View>
      <View style = {styles.hasilContainer}>
        <Text style = {styles.titleHasil}>Hasil : </Text>
        <Text style={styles.hasil}>{kalkulatorReducer.finalValue}</Text>
      </View>
      <Button title="=" onPress = {() => onHandleInput()} style={styles.button}/>
      <Button title="Reset" onPress = {() => reset()}/>
      
      
    </View>
  )
}

export default Kalkulator;

const styles = StyleSheet.create({
  container : {
    flex : 1,
    paddingHorizontal : 20,
    justifyContent : 'center'
  },
  formContainer : {
    justifyContent : 'center',
    marginBottom : 20
  },
  textInput : {
    borderWidth : 1,
    textAlign : 'right',
    paddingHorizontal : 30
  },
  hasilContainer : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    marginBottom : 20,
    alignItems : 'center'
  },
  titleHasil : {
    fontSize : 20
  },
  hasil : {
    fontWeight : 'bold',
    fontSize : 24
  },
  button : {
    marginBottom : 10
  }
})
