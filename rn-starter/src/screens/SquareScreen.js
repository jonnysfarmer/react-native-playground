import React, { useReducer } from 'react'
import { View, Text, StyleSheet, Button, FlatList} from 'react-native'

import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 10

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number}
  // action === { colorToChange: 'red' || 'green' || 'blue',  amount: -15 || +15

  switch(action.colorToChange){
    case 'red':
      return { ...state, red: state.red + action.amount }
    case 'green':
        return { ...state, green: state.green + action.amount }
    case 'blue':
        return { ...state, blue: state.blue + action.amount }
    default:
  }
}

const SquareScreen = () => {


  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
  // console.log(state) = { red: 0, green: 0, blue: 0 }

  return (
    <View>
      <Text>Square screen</Text>
      <ColorCounter 
        onIncrease={()=> } 
        onDecrease={()=> } 
        color='Red'/>
      <ColorCounter 
        onIncrease={()=> } 
        onDecrease={()=> } 
        color='Blue'/>
      <ColorCounter 
        onIncrease={()=> } 
        onDecrease={()=> } 
        color='Green'/>
      <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}} />

    </View>
  )
}

const styles = StyleSheet.create({})


export default SquareScreen