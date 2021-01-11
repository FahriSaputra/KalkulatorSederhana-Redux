import React  from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const KalkulatorConnect = ({setInput, hitungHasil, value, finalValue, firstValue, secondValue, operator}) => {
   
  const handleSetInput = (newValue, inputType) => {
    if(newValue.length > 0 && inputType != 'operator'){
      let newValueToInt = parseInt(newValue);
      if( typeof newValueToInt === 'number' || newValue != '+' || newValue != '*' || newValue != '-' || newValue !='/'){
        alert('Inputan harus bernilai angka atau operator')
      }
    }

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

  console.log(value)
  return (
    <View>
      <Text>CONNECT</Text>
      <TextInput 
        value = {firstValue.toString()}
        onChangeText = {newValue => handleSetInput(newValue, 'firstValue')}
      />
      <TextInput 
        value = {operator.toString()}
        onChangeText = {newValue => handleSetInput(newValue, 'operator')}
      />
      <TextInput 
        value = {secondValue.toString()}
        onChangeText = {newValue => handleSetInput(newValue, 'secondValue')}
      />
      <Text>{value}</Text>
      <Text>{finalValue}</Text>
      <Button title="=" onPress={hitungHasil}/>
    </View>
  )
}

export default KalkulatorConnect;

const styles = StyleSheet.create({})
