import React, { useContext } from 'react'
import { Text, View, StyleSheet, FlatList, Button } from 'react-native'
import BlogContext from '../context/BlogContext'

const IndexScreen = () => {
  // we use useContext to get the value prop from Context
  const { data, addBlogPost } = useContext(BlogContext)

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title='Add Post' onPress={addBlogPost}/>
      <FlatList
        data={data}
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