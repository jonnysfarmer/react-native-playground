import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

// you can also add a conditional statement as well
// good that this is similar to ReactJS interms of State - but onChangeText opposed to onChange

const TextScreen = () => {
  const [name, setName] = useState('')

  return (
    <View>
      <Text>Text</Text>
      <TextInput 
        style={styles.input} 
        autoCapitalize='none' 
        autoCorrect={false}
        // autoCorrect and AutoCapitlize are import for IOS.  Important for Usernames / Emails / Passwords etc
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text>My name is {name}</Text>
      {name.length > 5 ? <Text>Longer than 5</Text> : <Text>Shorter than 5</Text> }
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