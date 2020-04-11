import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
  // Need to add a Key property to the object - must be a unique string...
  // or you can add keyExtrator to Flatlist
  const friends = [
    { name: 'friend 1', age: 5 },
    { name: 'friend 2', age: 6 },
    { name: 'friend 3', age: 8 },
    { name: 'friend 4', age: 9  },
    { name: 'friend 5', age: 10  },
    { name: 'friend 6', age: 12  },
    { name: 'friend 7', age: 15  }
  ]

  return (
    // Use flatlist opposed to Map as its inbult into react native and a lot 
    // more flexibke.  element is both item and postion in array.
    //for we take { item } out.
    <FlatList
      // horizontal
      // showsHorizontalScrollIndicator = {false}
      keyExtractor={(friend)=> friend.name}
      // This basically gives the key.  It returns a unique string from the array of Objects
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
        )
      }}
    />

  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 60
  }

})

export default ListScreen