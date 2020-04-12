import React from "react"
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native"

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Hello World</Text>
      <Button 
        title='Go to Component Demo' 
        onPress={()=> console.log('button press')}
      />
      <TouchableOpacity onPress={()=>console.log('Button 2 Pressed')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'red'

  }
})

export default HomeScreen
