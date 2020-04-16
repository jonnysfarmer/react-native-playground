import React, { useReducer } from 'react'
import { View, Text, StyleSheet, TextInput} from 'react-native'

const TextScreen = () => {

  return (
    <View>
      <Text>Text</Text>
      <TextInput 
        style={styles.input} 
        autoCapitalize='none' 
        autoCorrect={false}
        // autoCorrect and AutoCapitlize are import for IOS.  Important for Usernames / Emails / Passwords etc
        value='hi There'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
})

export default TextScreen