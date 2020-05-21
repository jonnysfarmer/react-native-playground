import React, { useContext } from 'react'
import { Text, View, StyleSheet, FlatList, Button } from 'react-native'
import { Context } from '../context/BlogContext'

const IndexScreen = () => {
  // we use useContext to get the value prop from Context
  const { state, addBlogPost } = useContext(Context)

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title='Add Post' onPress={addBlogPost}/>
      <FlatList
        data={state}
        keyExtractor={(blogPosts) => blogPosts.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>
        }}
      />



    </View>
  )
}

const styles = StyleSheet.create({})

export default IndexScreen