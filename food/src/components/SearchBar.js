import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = () => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name='search' style={styles.iconStyle}/>
      <TextInput 
        placeholder='Search'
        style={styles.inputStyle}
      />
    </View>

  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#D8D6D6',
    height: 50,
    borderRadius: 5,
    margin: 15,
    flexDirection: 'row'
  },
  inputStyle: {
    // borderColor: 'black',
    // borderWidth: 1,
    flex: 1,
    fontSize: 20
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 10

  }

})

export default SearchBar