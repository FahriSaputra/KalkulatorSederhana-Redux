import React  from 'react'
import { Button, StyleSheet, Text, TextInput, View, Dimensions } from 'react-native'

const KalkulatorConnect = ({setInput, hitungHasil, value, finalValue, firstValue, secondValue, operator}) => {
  handleSetInput = (newValue, inputType) => {
    if(inputType == 'firstValue'){
      setInput(newValue, inputType)
    }else if(inputType == 'secondValue'){
      setInput(newValue, inputType)
    }else if(inputType == 'operator'){
      if(newValue.length > 0){
        if(newValue === '+' || newValue === '*' || newValue === '-' || newValue ==='/'){
          setInput(newValue, inputType)
        }else{
          alert("salah masukan operator")
          return 
        }
      }
      if(newValue.length == 0){
        setInput(newValue = '', inputType)
      }
    }
  }
  return (
    <View style={styles.container}>
      <Text>First Value</Text>
      <TextInput 
        value = {firstValue.toString()}
        onChangeText = {newValue => handleSetInput(newValue, 'firstValue')}
        style={styles.input}
      />
      <Text>Operator</Text>
      <TextInput 
        value = {operator.toString()}
        onChangeText = {newValue => handleSetInput(newValue, 'operator')}
        style={styles.input}
      />
      <Text>Second Value</Text>
      <TextInput 
        value = {secondValue.toString()}
        onChangeText = {newValue => handleSetInput(newValue, 'secondValue')}
        style={styles.input}
      />
      {/* <Text>{value}</Text> */}
      <View style={styles.hasilContainer}>
        <Text style = {styles.titleHasil}>Hasil</Text>
        <Text style={styles.hasil}>{finalValue}</Text>
      </View>
      
      <Button title="=" onPress={hitungHasil}/>
    </View>
  )
}

export default KalkulatorConnect;

const styles = StyleSheet.create({
  container : {
    paddingHorizontal : 10
  },
  input : {
    borderWidth : 1,
    borderRadius : 20,
    paddingHorizontal : 20,
    marginBottom : 10
  },
  hasilContainer : {
    marginVertical : 20,
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
})
